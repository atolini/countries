import React from 'react';
import LoadMoreButton from './LoadMoreButton';

export default {
  title: 'Buttons/Load More Button',
  component: LoadMoreButton,
};

const Template = (args) => <LoadMoreButton {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isFetchingParam: true, 
  hasNextPageParam: false,
};

export const Default = Template.bind({});
Default.args = {
  isFetchingParam: false, 
  hasNextPageParam: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isFetchingParam: false,
  hasNextPageParam: false,
};