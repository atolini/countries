import React from 'react';
import SelectInput from './SelectInput';

export default {
  title: 'Buttons/Select Input',
  component: SelectInput,
};

const Template = (args) => <SelectInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  func: () => null
};