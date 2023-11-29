import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTelegram, FaShoppingCart } from "react-icons/fa";
import VideoCardList from "../../components/Details/VideoCardList";
import VideoPlayer from "../../components/Details/VideoPlayer";

const KelasDetail = () => {
  const [activeVideo, setActiveVideo] = useState("");
  return (
    <div>
      <div className="container-fluid p-2 bg-[#EBF3FC] ">
        <div className="top-[20px] mx-2">
          <div className="flex gap-3 my-3">
            <Link to={"/"}>
              <img src="/icon/fi_arrow-left.svg" alt="back icon" />
            </Link>

            <h1 className="text-[16px] font-bold">Kelas Lainnya</h1>
          </div>

          <div className="flex flex-col gap-1 ml-9 container-fluid md:w-[65vw]">
            <div className="flex justify-between container-fluid md:w-[65vw]">
              <h1 className="text-[#6148FF] text-[20px] font-bold">
                UI/UX Design
              </h1>
              <div className="flex gap-1 mr-12 items-center">
                <img
                  src="/icon/ic_round-star.svg"
                  className="w-[14px]"
                  alt="rating icon"
                ></img>
                <p className="text-[14px] font-bold">5.0</p>
              </div>
            </div>
            <h1 className="text-[14px]">
              Intro to Basic of User Interaction Design
            </h1>
            <p className="text-[12px] font-bold">by Simon Doe</p>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <img src="/icon/mdi_badge-outline.svg" alt="level icon"></img>
                <h1 className="text-[12px] text-[#6148FF] font-semibold">
                  Beginner Level
                </h1>
              </div>
              <div className="flex gap-1">
                <img src="/icon/clarity_book-line.svg" alt="module icon"></img>
                <h1 className="text-[12px]">5 Modul</h1>
              </div>
              <div className="flex gap-1">
                <img src="/icon/ri_time-fill.svg" alt="time icon"></img>
                <h1 className="text-[12px]">45 Menit</h1>
              </div>
            </div>
            <div className="flex gap-1 flex-wrap">
              <button className="mt-3 w-[269px] h-[34px] bg-[#73CA5C] text-white rounded-[25px]">
                <span className="flex justify-center items-center">
                  Join Grup Telegram
                  <FaTelegram className="ml-2" />
                </span>
              </button>

              {/* need to add logic to send id course into transaction pages */}
              <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="h-[34px] w-[269px] bg-[#6148FF] mt-3 text-white rounded-[25px]"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <span className="flex justify-center items-center">
                    Beli Kelas
                    <FaShoppingCart className="ml-2" />
                  </span>
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="text-center">
                      <h3 className="font-bold text-[24px]">
                        Selangkah lagi menuju
                      </h3>
                      <h3 className="text-[#6148FF] font-bold text-[24px]">
                        Kelas Premium
                      </h3>
                    </div>

                    <p className="py-4">
                      Press ESC key or click the button below to close Card Here
                    </p>
                    <div className="modal-action flex justify-center">
                      <form action="/login">
                        <button className="mt-3 w-[320px] h-[48px] bg-[#6148FF] text-white rounded-[25px]">
                          <span className="flex justify-center items-center">
                            Beli Sekarang
                            <img src="/icon/buy-now.svg" alt="buy icon"></img>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:flex-col">
          <div className="p-5 order-2 lg:order-1">
            {/* Video component di sini */}
            <VideoPlayer videoSrc={activeVideo} />
          </div>
          <div className="w-full md:w-[65vw] p-5">
            <div className="collapse collapse-arrow bg-base-200 mb-2">
              <input
                type="radio"
                name="my-accordion-2"
                aria-label="class info"
              />
              <div className="collapse-title text-[20px] font-bold ">
                Kelas Ini Ditujukan Untuk
              </div>
              <div className="collapse-content">
                <ol className="text-[13px] text-justify px-3 list-decimal">
                  <li>Anda yang ingin memahami poin penting design system</li>
                  <li>
                    Anda yang ingin membantu perusahaan lebih optimal dalam
                    membuat design produk
                  </li>
                  <li>Anda yang ingin latihan membangun design system</li>
                  <li>Anda yang ingin latihan membangun design system</li>
                </ol>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
              <input
                type="radio"
                name="my-accordion-2"
                aria-label="class description"
              />
              <div className="collapse-title text-[20px] font-bold ">
                Tentang Kelas
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  Design system adalah kumpulan komponen design, code, ataupun
                  dokumentasi yang dapat digunakan sebagai panduan utama yang
                  memunginkan designer serta developer memiliki lebih banyak
                  kontrol atas berbagai platform. Dengan hadirnya design system,
                  dapat menjaga konsistensi tampilan user interface dan
                  meningkatkan user experience menjadi lebih baik. Disisi
                  bisnis, design system sangat berguna dalam menghemat waktu dan
                  biaya ketika mengembangkan suatu produk. Bersama mentor XXX,
                  kita akan mempelajari design system dari mulai manfaat, alur
                  kerja pembuatannya, tools yang digunakan, hingga pada
                  akhirnya, kita akan membuat MVP dari design system. Selain
                  itu, mentor juga akan menjelaskan berbagai resource yang
                  dibutuhkan untuk mencari inspirasi mengenai design system.
                  Kelas ini sesuai untuk Anda yang ingin memahami apa itu design
                  system. Tidak hanya ditujukan untuk UI/UX Designer ataupun
                  Developer, kelas ini sangat sesuai untuk stakeholder lain agar
                  dapat memudahkan tim dalam bekerja sama. Yuk segera daftar dan
                  kami tunggu di kelas ya!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 lg:order-2">
          <VideoCardList
            onVideoSelect={(videoSrc) => setActiveVideo(videoSrc)}
          />
        </div>
      </div>
    </div>
  );
};

export default KelasDetail;
