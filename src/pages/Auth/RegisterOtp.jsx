import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";

const RegisterOtp = () => {
    const [otp, setOtp] = useState("");

    const handleSubmitOtp = (e) => {
        e.preventDefault();
        console.log(otp);

        toast.success("OTP Berhasil Dikirim");
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
                <form onSubmit={handleSubmitOtp} className="w-full">
                    <div className="flex items-start gap-2">
                        <Link to={"/register"}>
                            <FaArrowLeft className="w-10 mt-[10px]" />
                        </Link>
                        <h1 className="text-[24px] font-bold text-[#6148FF] mb-8">
                            Masukkan OTP
                        </h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="text-[12px] mb-[4px] text-center">
                                Ketik 6 digit kode yang dikirimkan ke mail
                            </label>
                            {/* <input
                                type="text"
                                className="border w-full p-2 rounded-2xl"
                                placeholder="Kode OTP"
                                // value={nama}
                                // onChange={(e) => setNama(e.target.value)}
                            /> */}
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                containerStyle="my-6 flex justify-center items-center gap-[16px]"
                                inputStyle={{
                                    width: "42px",
                                    height: "42px",
                                    border: "1px solid #ccc",
                                    borderRadius: "16px",
                                }}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[12px] mb-[4px] text-center">
                                Kirim Ulang OTP dalam 60 detik
                            </label>
                        </div>
                    </div>
                    <button className="w-full text-[14px] font-medium bg-[#6148FF] text-white py-[10px] rounded-2xl mt-5">
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

export default RegisterOtp;
