import React from "react";
import Headline from "./headline";

export default {
  component: Headline,
  title: "H1",
  argTypes: {
    color: { control: "color" },
    yRotation: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    xRotation: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    zRotation: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
};

export const Default = () => <Headline text="Some type of headline" />;

const Template = (args) => <Headline {...args} />;

// Each story then reuses that template
export const Wavy = Template.bind({});

Wavy.args = {
  text: "Anything can be a headline",
  color: "white",
  yRotation: 0,
};
