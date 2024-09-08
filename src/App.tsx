import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import store from "./store/store";
import Navigation from "./navigation";
import { GlobalStyle } from "./styles";

import { shouldForwardProp } from "utils/helpers";

const Root: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </StyleSheetManager>
    </div>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
