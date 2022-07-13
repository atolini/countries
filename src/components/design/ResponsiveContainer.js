const ResponsiveContainer = `
  @media screen and (max-width: 320px) { 
    width: 320px; 
    padding-left: 14px; 
    padding-right: 14px;
    padding-top: 24px;
    padding-bottom: 24px; 
  }

  @media screen and (min-width: 320px) { 
    width: 95vw;
    padding-left: 14px; 
    padding-right: 14px;
    padding-top: 24px;
    padding-bottom: 24px; 
  }

  @media screen and (min-width: 375px) { 
    padding-left: 16px; 
    padding-right: 16px; 
    padding-top: 32px;
    padding-bottom: 32px; 
  }

  @media screen and (min-width: 1440px) { 
    width: 1440px; 
    padding-left: 80px; 
    padding-right: 80px;
    padding-top: 46px;
    padding-bottom: 46px; 
  }
`; 

export default ResponsiveContainer;

