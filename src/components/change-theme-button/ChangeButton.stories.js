import React from 'react';
import ChangeButton from './ChangeButton';

export default {
  title: 'Buttons/Change Theme',
  component: ChangeButton,
};

const Template = (args) => <ChangeButton {...args} />;

export const Default = Template.bind({});
Default.args = {};