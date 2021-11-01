import { createSlice } from "@reduxjs/toolkit";
import { IProject } from "../../models/IProject";

const projectSlice = createSlice({
  name: "project",
  initialState: [] as IProject[],
  reducers: {
    getProject() {},
    setProject(state, action) {
      const { payload: projectData } = action;
      return [...projectData];
    },
  },
});

export const { getProject, setProject } = projectSlice.actions;

export default projectSlice.reducer;
