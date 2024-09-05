import { Route, Routes } from "react-router-dom";
import { ROUTE_PARAMS, ROUTES } from "./routes";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<>home</>} />
      <Route path={`:${ROUTE_PARAMS.userName}`} element={<>user</>} />
    </Routes>
  );
};

export default Navigation;
