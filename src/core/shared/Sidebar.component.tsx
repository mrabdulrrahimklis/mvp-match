import { Box } from "@mui/material";
import AnalyticIcon from "./../../assets/img/AnalyticLogo.png";
import HomeIcon from "./../../assets/img/HomeLogo.png";
import CardIcon from "./../../assets/img/CardLogo.png";
import GraphIcon from "./../../assets/img/GraphLogo.png";
import LogoutIcon from "./../../assets/img/LogoutLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setChart } from "../store/shared/reducer/chart.slice";
import { RootState } from "../store/configure";

export const SidebarComponent = () => {
  const dispatch = useDispatch();
  const isChartVisible: boolean = useSelector(
    (state: RootState) => state.chart
  );

  const changeChart = () => {
    const chartVisible = !isChartVisible;
    dispatch(setChart(chartVisible));
  };

  return (
    <Box marginTop={3}>
      <Box marginLeft={3} marginRight={3} marginTop={2}>
        <img
          src={AnalyticIcon}
          alt="Analityc Logo"
          onClick={() => changeChart()}
        />
      </Box>
      <Box marginLeft={3} marginRight={3} marginTop={2}>
        <img src={HomeIcon} alt="Analityc Logo" />
      </Box>
      <Box marginLeft={3} marginRight={3} marginTop={2}>
        <img src={CardIcon} alt="Analityc Logo" />
      </Box>
      <Box marginLeft={3} marginRight={3} marginTop={2}>
        <img src={GraphIcon} alt="Analityc Logo" />
      </Box>
      <Box marginLeft={3} marginRight={3} marginTop={2}>
        <img src={LogoutIcon} alt="Analityc Logo" />
      </Box>
    </Box>
  );
};
