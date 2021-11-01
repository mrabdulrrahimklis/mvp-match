import { Doughnut } from "react-chartjs-2";
import React, { FC } from "react";

export interface IGraph {
  data: any;
}

export const Graph: FC<IGraph> = ({ data }) => {
  return (
    <Doughnut
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
      data={data}
    />
  );
};
