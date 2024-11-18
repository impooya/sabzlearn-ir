import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/authContext"; // Adjust the import based on your file structure

function PAdminPrivate({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  // Render children only if the user is not logged in
  return !isLoggedIn ? <>{children}</> : null;
}

PAdminPrivate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PAdminPrivate;
