/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ChipsComponent from "./Chips";

export default {
  title: "Atomos/Chips",
  component: ChipsComponent,
  argTypes: {},
};

const Template = (args) => <ChipsComponent {...args} />;

export const Chips = Template.bind({});
