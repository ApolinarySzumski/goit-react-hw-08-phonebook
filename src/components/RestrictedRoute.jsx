import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RestricredRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestricredRoute;

RestricredRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};
