/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  ChevronRightRounded as ChevronRightRoundedIcon,
  ChevronLeftRounded as ChevronLeftRoundedIcon,
} from "@material-ui/icons";

import ButtonComponent from "./Button";

export default {
  title: "Atomos/Buttons",
  component: ButtonComponent,
  argTypes: {
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  color: "primary",
  children: "Label",
};

export const ButtonStartIcon = Template.bind({});
ButtonStartIcon.args = {
  color: "primary",
  children: "Label",
  startIcon: <ChevronLeftRoundedIcon />,
};

export const ButtonEndIcon = Template.bind({});
ButtonEndIcon.args = {
  color: "primary",
  children: "Label",
  endIcon: <ChevronRightRoundedIcon />,
};
