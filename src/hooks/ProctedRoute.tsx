import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { api } from "../services/api";
import { IState } from "../store";
import { UserProps } from "../store/modules/user/types";

export const ProtectedRoute = () => {
  const user = useSelector<IState, UserProps>((state) => state.user);

  useEffect(() => {
    api.get("/products").then((response) => {
      console.log(response.data);
    });
  }, []);

  console.log(user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
