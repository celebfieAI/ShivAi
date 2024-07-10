import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store"; // Adjust the path accordingly

interface PrivateRouteProps {
  element: React.ReactElement;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Route
      path={path}
      element={user ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
