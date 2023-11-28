import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/actions/authActions";
import toast from "react-hot-toast";

const SendReset = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleReset = (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Email Masih Kosong!");
            return;
        }

        //send email to api for getting mail reset
        console.log("email terkirim:", email);
        dispatch(resetPassword(email));
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
                <form onSubmit={handleReset} className="w-full">
                    <h1 className="text-[24px] font-bold text-[#6148FF] mb-8">
                        Reset Password
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <label className="text-[12px] mb-[4px]">
                                    Masukkan Email
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                                    placeholder="Contoh: johndoe@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="w-full text-[14px] bg-[#6148FF] text-white py-[10px] rounded-2xl mt-5">
                        Kirim
                    </button>
                </form>
            </div>

            <div className="hidden lg:flex justify-center items-center bg-[#6148FF] w-[50%] min-h-[100dvh]">
                <img src="/logo.png" alt="logo" />
            </div>
        </div>
    );
};

export default SendReset;