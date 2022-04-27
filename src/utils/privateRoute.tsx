import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useUser } from "../services/user.context";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useUser();
  let location = useLocation();

  if (
    !user?.userState?.user ||
    Object.getOwnPropertyNames(user.userState.user).length === 0
  ) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
