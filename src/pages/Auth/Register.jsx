import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/authActions";
import toast from "react-hot-toast";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateNomor = (e) => {
    const inputValue = e.target.value;

    //menghilangkan karakter yang bukan angka
    const numericValue = inputValue.replace(/\D/g, "");

    // mengatur panjang maksimal nomor telepon ke 15
    const maxLength = 15;
    const truncateValueNomor = numericValue.slice(0, maxLength);

    setNomor(truncateValueNomor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama && !email && !nomor && !password) {
      toast.error("Semua Form Harus Diisi");
      return;
    } else if (nama === "") {
      toast.error("Nama masih kosong");
      return;
    } else if (email === "") {
      toast.error("Email masih kosong");
      return;
    } else if (nomor === "") {
      toast.error("Nomor Telepon masih kosong");
      return;
    } else if (password === "") {
      toast.error("Password masih kosong");
      return;
    } else if (password.length < 8) {
      toast.error("Password min 8 karakter!");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("nama:", nama);
    console.log("nomor:", nomor);
    dispatch(register(email, password, nama, nomor, navigate));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
        <form onSubmit={handleSubmit} className="w-full">
          <h1 className="text-[24px] font-bold text-[#6148FF] mb-8">Daftar</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-[12px] mb-[4px]">Nama</label>
              <input
                type="text"
                className="border w-full p-2 rounded-2xl"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[12px] mb-[4px]">Email</label>
              <input
                type="email"
                className="border w-full p-2 rounded-2xl"
                placeholder="Contoh: johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[12px] mb-[4px]">Nomor Telepon</label>
              <input
                type="tel"
                className="border w-full p-2 rounded-2xl appearance-none"
                placeholder="+62"
                value={nomor}
                onChange={validateNomor}
                style={{ appearance: "none" }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <label className="text-[12px] mb-[4px]">Buat Password</label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="border-none" />
                  ) : (
                    <FaRegEye className="border-none" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <button className="btn btn-primary w-full text-[14px] font-medium bg-[#6148FF] text-white py-[10px] rounded-2xl mt-5">
            Daftar
          </button>
          <div className="flex justify-center items-center gap-2 mt-6">
            <h1 className="text-[14px] font-normal">Sudah punya akun?</h1>
            <Link to="/login" className="text-[#6148FF] text-[14px] font-bold">
              Masuk di sini
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex justify-center items-center bg-[#6148FF] w-[50%] min-h-[100dvh]">
        <img src="/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Register;
