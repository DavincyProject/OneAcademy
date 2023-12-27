import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/actions/profileActions";
import { toast } from "react-hot-toast";

const UbahPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const [loginWithGoogle, setLoginWithGoogle] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //   const google = localStorage.getItem("active");

  //   if (google === "true") {
  //     setLoginWithGoogle(true);
  //   } else {
  //     setLoginWithGoogle(false);
  //   }

  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword && !newPassword && !repeatPassword) {
      toast.error("Semua Form Harus Diisi");
      return;
    } else if (oldPassword === "") {
      toast.error("Password Lama masih kosong");
      return;
    } else if (newPassword === "") {
      toast.error("Password Baru masih kosong");
      return;
    } else if (repeatPassword === "") {
      toast.error("Harap Ulangi Password Baru!");
      return;
    } else if (newPassword !== repeatPassword) {
      toast.error("Password Baru dan Pengulangan Password tidak sama");
      return;
    } else if (newPassword.length < 8) {
      toast.error("Password min 8 karakter!");
      return;
    } else if (!/[A-Z]/.test(newPassword)) {
      toast.error("Password harus memiliki setidaknya satu huruf besar");
      return;
    } else if (!/[0-9]/.test(newPassword)) {
      toast.error("Password harus memiliki setidaknya satu angka");
      return;
    }

    setLoading(true);

    try {
      await dispatch(changePassword(oldPassword, newPassword));
    } finally {
      setTimeout(() => {
        setLoading(false);
        setNewPassword("");
        setOldPassword("");
        setRepeatPassword("");
      }, 1500);
    }
  };
  return (
    <div className="w-full card py-5 my-2">
      <h1 className="text-2xl text-center font-bold">Ubah Password</h1>

      <div className="card bg-base-100">
        {/* {loginWithGoogle ? (
          <></>
        ) : ( */}
        <form
          onSubmit={handleUpdatePassword}
          className="card-body items-center text-center"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Masukkan Password Lama</span>
            </div>
            <div className="relative">
              <input
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Password Lama"
                className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
              />
              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={togglePassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Masukkan Password Baru</span>
            </div>
            <div className="relative">
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type={showNewPassword ? "text" : "password"}
                placeholder="Masukkan Password Baru"
                className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
              />
              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={toggleNewPassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
              >
                {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ulangi Password Baru</span>
            </div>
            <div className="relative">
              <input
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                type={showNewPassword ? "text" : "password"}
                placeholder="Ulangi Password Baru"
                className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
              />
              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={toggleNewPassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
              >
                {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </label>
          <button className="btn btn-primary text-white rounded-3xl w-full max-w-xs mt-3">
            {loading ? "Menyimpan..." : "Ubah Password"}
          </button>
        </form>
        {/* )} */}
      </div>
    </div>
  );
};

export default UbahPassword;
