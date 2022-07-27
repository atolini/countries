import React from 'react';
import BackButton from './BackButton';

export default {
  title: 'Buttons/Back Page Button',
  component: BackButton,
};

const Template = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {};