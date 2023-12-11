import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedProfile = ({ children }) => {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (token === null) {
            navigate("/");
        }
    });

    return children ? children : <Outlet />;
};

export default ProtectedProfile;
ProtectedProfile.propTypes = {
    children: PropTypes.node,
};
