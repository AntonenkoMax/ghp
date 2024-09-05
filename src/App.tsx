import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import store from "./store/store";
import Navigation from "./navigation";

const Root: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
