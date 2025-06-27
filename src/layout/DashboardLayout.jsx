
import { AuthContext } from "../context/AuthContext";
import Loading from "../pages/Loading";
import Dashboard from "../pages/Dashboard/Dashboard";
import { use } from "react";
import PrivateRoute from "../provider/PrivateRoute";

export default function DashboardLayout() {
  const {loading} = use(AuthContext)
  return !loading ? (
    <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  ) : (
    <Loading></Loading>
  );
}
