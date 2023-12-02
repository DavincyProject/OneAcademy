import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Payment = () => {
  return (
    <div className="container mx-auto">
      <div className="border w-full py-4 bg-[#FFFFFF] shadow-md">
        <div className="flex flex-col px-5 justify-center">
          <Link
            to={"/"}
            className="text-[16px] font-bold flex gap-2 items-center mb-5"
          >
            <FaArrowLeft />
            Kembali
          </Link>
          <div className="flex justify-center items-center">
            <h1 className="text-center bg-[#ff0000] w-[343px] md:w-[936px] text-[13px] md:text-[16px] font-bold text-white p-4 rounded-xl py-4 px-7">
              Selesaikan Pembayaran sampai 10 Maret 2023 12:00
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 p-2">
        <div className="flex justify-center items-center flex-wrap flex-row gap-10">
          <div className="p-10">
            <div className="collapse collapse-arrow bg-[#3c3c3c] rounded-[4px]">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium text-white">
                Bank Transfer
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#6148ff] mt-3 rounded-[4px] shadow-md">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium text-white">
                Credit Card
              </div>
              <div className="collapse-content bg-white py-5">
                <div className="flex justify-center flex-col items-center">
                  <div className="flex gap-5">
                    <img src="/icon/mastercard.svg" alt="" />
                    <img src="/icon/visa.svg" alt="" />
                    <img src="/icon/amex.svg" alt="" />
                    <img src="/icon/paypal.svg" alt="" />
                  </div>
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-black">
                          Card Number
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="4480 0000 0000 0000"
                        className="input border border-b-2 w-full max-w-xs"
                      />
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-black">
                          Card Holder name
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="input border border-b-2 w-full max-w-xs"
                      />
                    </label>
                    <div className="flex gap-10">
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text text-black">CVV</span>
                        </div>
                        <input
                          type="text"
                          placeholder="000"
                          className="input border border-b-2 w-full max-w-xs"
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text text-black">
                            Expiry date
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="07/24"
                          className="input border border-b-2 w-full max-w-xs"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="card w-[400px] h-[372px] bg-base-100 shadow-xl p-5 border border-[#6148ff]">
              <div className="card-body flex flex-col">
                <h1 className="font-bold">Pembayaran Kelas</h1>
                <div className="card card-compact w-full h-[140px] bg-base-100 shadow-xl">
                  <img src="/testing_course.png" alt="" />

                  <div className="flex flex-col px-2 py-2">
                    <h3 className="text-[10px] text-[#6148ff] ">
                      UI/UX Design
                    </h3>

                    <h3
                      className="font-Montserrat font-bold text-[10px] line-clamp-2 "
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Intro to Basic of User Interaction Design
                    </h3>
                    <p className="font-Montserrat font-normal text-[10px]">
                      by Simon Doe
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h1 className="font-bold">Harga</h1>
                    <h2>Rp 349,000</h2>
                  </div>
                  <div>
                    <h1 className="font-bold">PPN 11%</h1>
                    <h2>Rp 38,390</h2>
                  </div>
                  <div>
                    <h1 className="font-bold">Total Bayar</h1>
                    <h2 className="text-[#6148ff]">Rp 387,390</h2>
                  </div>
                </div>

                <button className="mt-3 w-[320px] h-[48px] bg-[#ff0000] text-white rounded-[25px]">
                  <span className="flex justify-center items-center">
                    Bayar dan Ikuti Kelas Selamanya
                    <img src="/icon/buy-now.svg" alt="buy icon"></img>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
