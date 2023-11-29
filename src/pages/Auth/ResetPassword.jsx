import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/actions/authActions";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [ulangPassword, setUlangPassword] = useState("");
    const [showPasswordTop, setShowPasswordTop] = useState(false);
    const [showPasswordDown, setShowPasswordDown] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        //validate form submission if null
        if (password === "" || ulangPassword === "") {
            toast.error("Password harus diisi!");
            return;
        }

        //validate password
        if (ulangPassword !== password) {
            toast.error("Password harus sama!");
            return;
        }

        //send data to redux auth for reset password
        console.log("password baru:", password);
        console.log("ulang password:", ulangPassword);
        console.log("token reset:", id);

        dispatch(forgotPassword(password, id));
    };

    const togglePasswordTop = () => {
        setShowPasswordTop(!showPasswordTop);
    };
    const togglePasswordDown = () => {
        setShowPasswordDown(!showPasswordDown);
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className="text-[24px] font-bold text-[#6148FF] mb-8">
                        Reset Password
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <label className="text-[12px] mb-[4px]">
                                    Masukkan Password Baru
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPasswordTop ? "text" : "password"}
                                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                                    placeholder="Masukkan password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    aria-label="toggle password visibility"
                                    onClick={togglePasswordTop}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
                                >
                                    {showPasswordTop ? (
                                        <FaRegEyeSlash />
                                    ) : (
                                        <FaRegEye />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <label className="text-[12px] mb-[4px]">
                                    Ulangi Password Baru
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={
                                        showPasswordDown ? "text" : "password"
                                    }
                                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                                    placeholder="Masukkan password"
                                    value={ulangPassword}
                                    onChange={(e) =>
                                        setUlangPassword(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    aria-label="toggle password visibility"
                                    onClick={togglePasswordDown}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
                                >
                                    {showPasswordDown ? (
                                        <FaRegEyeSlash className="border-none" />
                                    ) : (
                                        <FaRegEye className="border-none" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="w-full text-[14px] bg-[#6148FF] text-white py-[10px] rounded-2xl mt-5">
                        Simpan
                    </button>
                </form>
            </div>

            <div className="hidden lg:flex justify-center items-center bg-[#6148FF] w-[50%] min-h-[100dvh]">
                <img src="/logo.png" alt="logo" />
            </div>
        </div>
    );
};

export default ResetPassword;
