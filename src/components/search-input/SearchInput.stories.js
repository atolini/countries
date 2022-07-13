import React from "react";
import SearchInput from "./SearchInput";

export default {
  title: "Buttons/Search Input",
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  func: () => null
};
