import {} from "react";

const PaymentSucces = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-6">
        <button className="bg-green-400 text-white p-4 rounded-2xl py-4 px-7 ">
          Terima kasih atas pembayaran tertentu
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold text-[#6148FF] ">Selamat!</h1>
        <img
          src="/icon/Cart_shopping-list.svg"
          className=" w-50 lg:w-50 lg:block mt-6"
          alt="Cart Shopping"
        />
        <p className="mt-4 text-lg mt-4 font-bold mt-6 text-center">
          Transaksi pembayaran kelas premium berhasil!
        </p>
        <p className="mt-4 text-lg ">E-receipt telah dikirimkan ke email.</p>
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          <button className="btn btn-ghost w-full sm:w-[343px] bg-blue-500 text-white p-4 rounded-full hover:bg-blue-700">
            Mulai Belajar
          </button>
          <button className="btn btn-ghost w-full sm:w-[343px] bg-gray-500 text-white p-4 rounded-full hover:bg-gray-700">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucces;
