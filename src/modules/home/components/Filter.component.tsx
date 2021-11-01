import { Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import {
  CustomSelect,
  CustomButton,
  CustomMenuItem,
  CustomFormControl,
  CustomInputLabel,
  CustomTextField,
} from "../../../core/styled";
import { useDispatch, useSelector } from "react-redux";
import { IProject } from "../models/IProject";
import { RootState } from "../../../core/store/configure";
import { getGateway } from "../store/reducer/gateway.slice";
import { getProject } from "../store/reducer/project.slice";
import { IGateway } from "../models/IGateway";
import { handleGetReport } from "../store/saga/handler/report.handle";
import {
  IReportParams,
  requestGetReports,
} from "../store/saga/request/report.request";
import { AxiosResponse } from "axios";
import { IResponse } from "../../../core/models/Response";
import { IReport } from "../models/IReport";
import { getReport, setReport } from "../store/reducer/report.slice";
import InsertChartIcon from "@mui/icons-material/InsertChart";

export interface IStateProject {
  projectId: string;
  projectName: string;
}

export interface IStateGateway {
  gatewayId: string;
  gatewayName: string;
}

const useStyles = makeStyles(() => ({
  input: {
    color: "#FFFFFF",
    backgroundColor: "#1BC5BD",
  },
  borderNone: {
    border: "1px solid red",
  },
  icon: {
    color: "#FFFFFF",
    backgroundColor: "#1BC5BD",
  },
}));

export const FilterComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const projects: IProject[] = useSelector((state: RootState) => state.project);
  const gateways: IGateway[] = useSelector((state: RootState) => state.gateway);

  useEffect(() => {
    dispatch(getGateway());
    dispatch(getProject());
    dispatch(getReport());
  }, []);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [gateway, setGateway] = useState<IStateGateway>({} as IStateGateway);
  const [project, setProject] = useState<IStateProject>({} as IStateProject);

  const getData = async () => {
    let reportParams: IReportParams = {
      from: fromDate,
      to: toDate,
      projectId: project.projectId,
      gatewayId: gateway.gatewayId,
    };
    const { data }: AxiosResponse<IResponse<IReport>> = await requestGetReports(
      reportParams
    );
    dispatch(setReport(data.data));
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="h6">Reports</Typography>
        <Typography variant="body2">
          Easily generate a report of your transactions
        </Typography>
      </Box>
      <Box display="flex">
        <Box width="135px" marginLeft="23px">
          <CustomFormControl fullWidth size="small">
            <CustomInputLabel>All projects</CustomInputLabel>
            <CustomSelect
              inputProps={{
                classes: {
                  icon: classes.icon,
                  input: classes.input,
                },
              }}
              size="small"
              value={project.projectName}
              label={project.projectName}
              placeholder={project.projectName}
              onChange={(e) => setProject(JSON.parse(e.target.value as string))}
            >
              <CustomMenuItem
                value={JSON.stringify({
                  projectId: "",
                  projectName: "All projects",
                })}
              >
                All projects
              </CustomMenuItem>
              {projects?.map((project: IProject, index) => (
                <CustomMenuItem
                  key={index}
                  value={JSON.stringify({
                    projectId: project.projectId,
                    projectName: project.name,
                  })}
                >
                  {project.name}
                </CustomMenuItem>
              ))}
            </CustomSelect>
          </CustomFormControl>
        </Box>
        <Box width="135px" marginLeft="23px">
          <CustomFormControl fullWidth size="small">
            <CustomInputLabel>All gateways</CustomInputLabel>
            <CustomSelect
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
              size="small"
              value={gateway.gatewayName}
              label={gateway.gatewayName}
              placeholder={gateway.gatewayName}
              onChange={(e) => setGateway(JSON.parse(e.target.value as string))}
            >
              <CustomMenuItem
                value={JSON.stringify({
                  projectId: "",
                  projectName: "All gateways",
                })}
              >
                All gateways
              </CustomMenuItem>
              {gateways?.map((gateway: IGateway, index) => (
                <CustomMenuItem
                  key={index}
                  value={JSON.stringify({
                    gatewayId: gateway.gatewayId,
                    gatewayName: gateway.name,
                  })}
                >
                  {gateway.name}
                </CustomMenuItem>
              ))}
            </CustomSelect>
          </CustomFormControl>
        </Box>
        <Box minWidth="135px" marginLeft="23px">
          <CustomTextField
            InputLabelProps={{ shrink: false }}
            value={fromDate}
            fullWidth
            InputProps={{
              className: classes.input,
            }}
            size="small"
            type="date"
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Box>
        <Box minWidth="135px" marginLeft="23px">
          <CustomTextField
            InputLabelProps={{ shrink: false }}
            InputProps={{
              className: classes.input,
            }}
            value={toDate}
            fullWidth
            size="small"
            type="date"
            onChange={(e) => setToDate(e.target.value)}
          />
        </Box>

        <Box marginLeft="23px">
          <CustomButton onClick={() => getData()} variant="contained">
            Generate Report
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
