/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import TextFields from "./TextField";

export default {
  title: "Atomos/Text Field",
  component: TextFields,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
  },
};

const Template = (arg) => <TextFields {...arg} />;

export const TextField = Template.bind({});
