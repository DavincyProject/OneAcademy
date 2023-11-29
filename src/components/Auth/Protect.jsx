import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protect = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  return children;
};

export default Protect;
