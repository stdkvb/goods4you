import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserState } from "../types";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const loggedIn = useSelector(
    (state: { userSlice: UserState }) => state.userSlice.loggedIn
  );

  return loggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
