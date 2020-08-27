import React from "react";
import Headline from "./headline";

export default {
  component: Headline,
  title: "H1",
  argTypes: {
    color: { control: "color" },
  },
};

export const Default = () => <Headline text="Some type of headline" color="white" />;

const Template = (args) => <Headline {...args} />;

// Each story then reuses that template

export const Scale = Template.bind({});

Scale.argTypes = {
  xScale: {
    control: {
      type: "range",
      min: -5,
      max: 5,
      step: 0.1,
    },
  },
  yScale: {
    control: {
      type: "range",
      min: -5,
      max: 5,
      step: 0.1,
    },
  },
  zScale: {
    control: {
      type: "range",
      min: -5,
      max: 5,
      step: 0.1,
    },
  },
}

Scale.args = {
  text: "Anything can be a headline",
  color: "white",
  xScale: 1.5,
  yScale: 1.5,
  zScale: 1.5
}



export const Translation = Template.bind({});

Translation.argTypes = {
  xTranslation: {
    control: {
      type: "range",
      min: -5,
      max: 5,
      step: 0.1,
    },
  },
  yTranslation: {
    control: {
      type: "range",
      min: -5,
      max: 5,
      step: 0.1,
    },
  },
  zTranslation: {
    control: {
      type: "range",
      min: -5,
      max: 5,
      step: 0.1,
    },
  },
}

Translation.args = {
  text: "Anything can be a headline",
  color: "white",
  xTranslation: 1,
  yTranslation: 1,
  zTranslation: 1
}

export const Rotation = Template.bind({});

Rotation.args = {
  text: "Anything can be a headline",
  color: "white",
  yRotation: 0,
  xRotation: 0,
  zRotation: 0,
};

Rotation.argTypes = {
  yRotation: {
    control: {
      type: "range",
      min: -1,
      max: 1,
      step: 0.01,
    },
  },
  xRotation: {
    control: {
      type: "range",
      min: -1,
      max: 1,
      step: 0.01,
    },
  },
  zRotation: {
    control: {
      type: "range",
      min: -1,
      max: 1,
      step: 0.01,
    },
  },
}