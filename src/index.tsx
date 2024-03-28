import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import App from "./app";
import redux from "./state/store";
import { GlobalStyle, theme } from "./styles/index";

const { store, persistor } = redux;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const basename = import.meta.env.VITE_BASE_URL;

const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename={basename}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </QueryClientProvider>
  </Provider>
);
