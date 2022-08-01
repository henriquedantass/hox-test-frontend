import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { IState } from "../store";
import { UserProps } from "../store/modules/user/types";

export const ProtectedRoute = () => {
  const user = useSelector<IState, UserProps>((state) => state.user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
