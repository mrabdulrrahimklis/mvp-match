import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useSelector} from "react-redux";
import {RootState} from "../../../core/store/configure";
import {IReport} from "../models/IReport";
import {useEffect, useState} from "react";
import {
    Box,
    BoxProps,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {IProject} from "../models/IProject";
import { groupBy } from "lodash";
import {makeStyles} from "@mui/styles";
import dayjs from "dayjs";
import {IGateway} from "../models/IGateway";
import {Graph} from "./Chart.component";

interface IGroupedData {
    [key: string]: IReport[]
}

const useStyles = makeStyles(() => ({
    expandIcon: {
        "&$expanded": {
            transform: "translateY(-50%) rotate(45deg)"
        }
    },
}));

export const ListReport = () => {
    const classes = useStyles();

    const reports: IReport[] = useSelector((state: RootState) => state.report)
    const projects: IProject[] = useSelector((state: RootState) => state.project)
    const gateways: IGateway[] = useSelector((state: RootState) => state.gateway)
    const isChartVisible: boolean = useSelector((state: RootState) => state.chart)
    const [groupedData, setGroupedData] = useState<IGroupedData>();

    useEffect(() => {
        setGroupedData(groupBy(reports, 'projectId'));
        console.log(groupedData && Object.values(groupedData).map((data) => data.length))
    }, [reports])

    const finalPrice = (data: IReport[]) => {
        return data
            ?.map((report) => report.amount)
            .reduce(
                (previousValue: number, currentValue: number) =>
                    previousValue + currentValue,
                0
            )?.toFixed(2);
    }

    const projectName = (projectId: string) =>
        projects.find((project: IProject) => project.projectId === projectId)?.name

    const gatewayName = (gatewayId: string) =>
        gateways.find((gateway: IGateway) => gateway.gatewayId === gatewayId)?.name

    const data = {
        labels: projects.map((project) => project.name),
        datasets: [
            {
                label: '# of Votes',
                data: groupedData && Object.values(groupedData).map((data) => data.length),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <>
        <Box display='flex'>
            <Box display='flex' justifyContent='space-between' width='100%'>
                <Box padding={3} bgcolor='#F1FAFE' width='100%'>
                    {groupedData && Object.entries(groupedData).map((item) =>
                        <>
                            <Accordion variant='outlined' style={{margin: '10px', borderRadius: '10px', backgroundColor: 'white', border: 0}}>
                                <AccordionSummary
                                    style={{ borderRadius: '10px' }}
                                    classes={{
                                        expanded: classes.expandIcon
                                    }}
                                    expandIcon={<strong>TOTAL: {finalPrice(item[1])}</strong>}
                                >
                                    <Typography>{projectName(item[0])}</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: '#F1FAFE' }}>
                                    <TableContainer style={{borderRadius: '5px', marginTop: '10px'}}>
                                        <Table>
                                            <TableHead>
                                                <TableRow style={{ backgroundColor: 'white' }}>
                                                    <TableCell align='left'>Date</TableCell>
                                                    <TableCell align='center'>Gateway</TableCell>
                                                    <TableCell align='center'>Transaction ID</TableCell>
                                                    <TableCell align='right'>Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {item[1].map((report, index) => <TableRow style={index %2? { backgroundColor: 'white' }:{ backgroundColor: '#F1FAFE' } }>
                                                    <TableCell align='left'>{report.created && dayjs(report.created).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell align='center'>{gatewayName(report.gatewayId)}</TableCell>
                                                    <TableCell align='center'>{report.paymentId}</TableCell>
                                                    <TableCell align='right'>{report.amount} USD</TableCell>
                                                </TableRow>)}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    )}
                </Box>
            </Box>
            {isChartVisible && <Box width='100%'>
                <Graph data={data} />
            </Box>}
        </Box>
        <Box width='100%' bgcolor='#F1FAFE' paddingY={2} borderRadius={2} marginRight={2} marginTop={2}>
            <Typography marginLeft={2}>
                <strong>{`TOTAL: ${finalPrice(reports)} USD`}</strong>
            </Typography>
        </Box>
    </>
}