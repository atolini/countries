import React from "react";
import Chips from "./Chips";

export default {
  title: "Buttons/Chips",
  component: Chips,
};

const Template = (args) => <Chips {...args} />;

export const France = Template.bind({});
France.args = {
  text: "France",
};

export const Germany = Template.bind({});
Germany.args = {
  text: "Germany",
};

export const Netherlands = Template.bind({});
Netherlands.args = {
  text: "Netherlands",
};
