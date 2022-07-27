import Home from "./pages/home/Home";
import Theme from "./components/design/ThemeStyle";
import GlobalStyle from "./components/design/GlobalStyle";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalProvider } from "./context/GlobalProvider";
import Header from "./components/header/Header";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";

const queryClient = new QueryClient();
const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <h1>404</h1> 
  }
];

function App() {
  return (
    <Router routes={routes} location={location}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <GlobalStyle />
          <GlobalProvider>
            <Header />
            <Outlet />
          </GlobalProvider>
        </Theme>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
