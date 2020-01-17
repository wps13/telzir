import React from "react";

import SelectDDD from "pages/Home/Simulation/DDDS/SelectDDD/SelectDDD";

export default {
  title: "SelectDDD",
  component: SelectDDD
};

export const select = () => (
  <SelectDDD change={console.log} labelText="Origem" />
);
