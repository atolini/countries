import Home from "./pages/home/Home";
import Theme from "./components/design/ThemeStyle";
import GlobalStyle from "./components/design/GlobalStyle";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalProvider } from "./context/GlobalProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyle />
        <GlobalProvider>
          <Home />
        </GlobalProvider>
      </Theme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
