import React from 'react';
import CountryDetails from './CountryDetails';
import { BrazilData, AustraliaData, ArgentinaData } from './Mockup'

export default {
  title: 'Page/Country Details',
  component: CountryDetails,
};

const Template = (args) => <CountryDetails {...args} />;

export const Brazil = Template.bind({});
Brazil.args = {
  country: BrazilData,
};

export const Australia = Template.bind({});
Australia.args = {
  country: AustraliaData,
};

export const Argentina = Template.bind({});
Argentina.args = {
  country: ArgentinaData,
};