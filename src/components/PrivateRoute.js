import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function PrivateRoute({ children }) {
  let auth = localStorage.getItem("token");

  return auth ? children : <Navigate to="/" />;
}
