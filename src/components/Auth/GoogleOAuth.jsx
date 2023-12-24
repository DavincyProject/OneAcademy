import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../redux/actions/authActions";

const GoogleOAuth = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();

    dispatch(loginWithGoogle());
  };

  return (
    <>
      <button
        onSubmit={handleLoginWithGoogle}
        className="btn bg-white shadow-md"
      >
        <div className="flex gap-1 items-center">
          <FcGoogle size={22} /> Sign in with Google
        </div>
      </button>
    </>
  );
};

export default GoogleOAuth;
