import { Navigate } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Spinner className="h-16 w-16 text-gray-900/50" />{" "}
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
