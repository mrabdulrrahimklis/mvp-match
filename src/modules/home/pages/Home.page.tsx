import React from "react";
import { Box } from "@mui/material";
import { FilterComponent } from "../components/Filter.component";
import { Footer } from "../../../core/shared/Footer.component";
import { ListReport } from "../components/ListReport.component";

export const HomePage = () => {
  return (
    <Box marginLeft={2} marginRight={10} width="100%">
      <Box display="flex" justifyContent="space-between">
        <Box marginTop={4} width="100%">
          <FilterComponent />
        </Box>
      </Box>
      <Box width="100%" marginTop={5} marginBottom={2}>
        <ListReport />
      </Box>
      <Box width="100%">
        <Footer />
      </Box>
    </Box>
  );
};
