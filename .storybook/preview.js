import React from "react";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/components/design/GlobalStyle";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { lightTheme, darkTheme } from "../src/components/design/ThemeStyle";
import useOnClickOutside from "use-onclickoutside";

// Initialize MSW
initialize();

// Instantiates the configured React Query Client for testing
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

// Turn off network error logging (React Query)
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

// Default Parameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

//Default Decorators
export const decorators = [
  (Story, context) => {
    const { theme } = context.globals;
    const storyTheme = theme === "dark" ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={storyTheme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </ThemeProvider>
    );
  },
  mswDecorator,
];

//Provides the theme change in the Storybook panel
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "light", icon: "circlehollow", title: "Light" },
        { value: "dark", icon: "circle", title: "Dark" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
