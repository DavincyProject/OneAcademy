import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectAdmin = ({ children }) => {
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.auth);

  if (role !== "ADMIN") {
    navigate("/");
  }

  return children ? children : <Outlet />;
};

export default ProtectAdmin;
ProtectAdmin.propTypes = {
  children: PropTypes.node,
};
