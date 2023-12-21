import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ProtectAdmin = ({ children }) => {
  const navigate = useNavigate();

  const { role, token, idUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token === null && idUser === null && role !== "ADMIN") {
      navigate("/");
    }
  }, [token, idUser, role, navigate]);

  return children ? children : <Outlet />;
};

export default ProtectAdmin;
ProtectAdmin.propTypes = {
  children: PropTypes.node,
};
