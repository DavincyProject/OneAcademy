import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const Protect = ({ children }) => {
    const navigate = useNavigate();
    const { token, idUser } = useSelector((state) => state.auth);

    useEffect(() => {
        if (token && idUser) {
            navigate("/");
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("idUser");
        }
    }, [idUser, navigate, token]);

    return children ? children : <Outlet />;
};

export default Protect;

Protect.propTypes = {
    children: PropTypes.node,
};
