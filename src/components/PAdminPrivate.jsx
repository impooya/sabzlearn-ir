import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/authContext"; // Adjust the import based on your file structure

function PAdminPrivate({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  // Render children only if the user is not logged in
  return !isLoggedIn ? <>{children}</> : <Navigate to={"/"} />;
}

PAdminPrivate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PAdminPrivate;
