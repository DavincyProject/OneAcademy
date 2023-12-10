import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PaymentSelect from "../../components/payment/PaymentSelect";
import PaymentSuccess from "../../components/payment/PaymentSuccess";
const Payment = () => {
    const { id } = useParams();
    const pay = false;

    return (
        <div className="container-fluid mx-auto">
            <div className="border w-full py-4 bg-[#FFFFFF] shadow-md">
                <div className="flex flex-col px-5 justify-center">
                    <Link
                        to={`/details/${id}`}
                        className="text-[16px] max-w-fit hover:text-darkblue font-bold flex gap-2 items-center mb-5"
                    >
                        <FaArrowLeft />
                        Kembali
                    </Link>
                    <div className="flex justify-center items-center">
                        {pay ? (
                            <h1 className="text-center w-[343px] md:w-[936px] text-[13px] bg-[#73CA5C] md:text-[16px] font-bold text-white p-4 rounded-xl py-4 px-7">
                                Terima kasih atas pembayaran transaksi
                            </h1>
                        ) : (
                            <h1 className="text-center w-[343px] md:w-[936px] bg-[#ff0000] text-[13px] md:text-[16px] font-bold text-white p-4 rounded-xl py-4 px-7">
                                Selesaikan Pembayaran sampai 10 Maret 2023 12:00
                            </h1>
                        )}
                    </div>
                </div>
            </div>

            {pay ? <PaymentSuccess /> : <PaymentSelect id={id} />}
        </div>
    );
};
export default Payment;
