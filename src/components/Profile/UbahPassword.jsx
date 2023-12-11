import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const UbahPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        console.log(oldPassword, password, repeatPassword);
    };
    return (
        <div className="w-full card py-5 my-2">
            <h1 className="text-2xl text-center font-bold">Ubah Password</h1>

            <div className="card bg-base-100 ">
                <form
                    onSubmit={handleUpdatePassword}
                    className="card-body items-center text-center"
                >
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">
                                Masukkan Password Lama
                            </span>
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
                                {showPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </button>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">
                                Masukkan Password Baru
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                {showNewPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </button>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">
                                Ulangi Password Baru
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                value={repeatPassword}
                                onChange={(e) =>
                                    setRepeatPassword(e.target.value)
                                }
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
                                {showNewPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </button>
                        </div>
                    </label>
                    <button className="btn btn-primary text-white rounded-3xl w-full max-w-xs mt-3">
                        Ubah Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UbahPassword;
