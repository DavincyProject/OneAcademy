import { Link } from "react-router-dom";

const PaymentSucces = () => {
    return (
        <div className="container-fluid mx-auto">
            <div className="border w-full py-4 bg-[#FFFFFF] shadow-md">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center bg-[#73CA5C] w-[343px] md:w-[936px] text-[13px] md:text-[16px] font-bold text-white p-4 rounded-xl py-4 px-7">
                        Terima kasih atas pembayaran transaksi
                    </h1>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl font-bold text-[#6148FF] ">Selamat!</h1>
                <img
                    src="/icon/Cart_shopping-list.svg"
                    className="w-32 md:w-60 lg:block mt-6"
                    alt="Cart Shopping"
                />
                <p className="mt-4 text-sm md:text-lg text-center mb-5">
                    <span className="font-bold">
                        Transaksi pembayaran kelas premium berhasil!
                    </span>{" "}
                    <br />
                    E-receipt telah dikirimkan ke email.
                </p>
                <div className="flex flex-col justify-center mt-8 gap-2">
                    <button className="btn btn-ghost w-full sm:w-[343px] bg-blue-500 text-white p-4 rounded-full hover:bg-blue-700">
                        Mulai Belajar
                    </button>
                    <Link
                        to={"/"}
                        className="w-full text-center sm:w-[343px] text-[#6148FF] p-4 rounded-full hover:text-[#489CFF]"
                    >
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSucces;
