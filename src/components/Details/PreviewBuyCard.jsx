import { formatPrice } from "../../utils/utils";
import BuyCourseButton from "./BuyCourseButton";
import PropTypes from "prop-types";

const PreviewBuyCard = ({ data }) => {
  return (
    <div className="card md:max-w-fit bg-base-100 shadow-xl">
      <figure className="w-auto h-28 object-cover">
        <img src={data?.image?.url} alt="buy preview" />
      </figure>
      <div className="card-body text-center">
        <div className="flex flex-col items-center ">
          <h2 className="card-title text-xl mb-1">Dapatkan Keahlian Baru!</h2>
          <span className="text-sm ">
            {data?.price === 0
              ? "Eksplorasi Ilmu Tanpa Biaya"
              : "Beli Course ini Sekarang dan Dapatkan Keahlian Baru hanya dengan membayar"}
          </span>
          <div className="text-red-500 font-bold text-md my-1">
            {data?.price === 0
              ? "Pembelajaran Gratis 🎉 untuk Selamanya"
              : `${formatPrice(data?.price)}`}
          </div>
          <small>
            Upgrade pengetahuanmu dengan kursus ini. Pelajari hal-hal baru yang
            akan membuka pintu kesuksesanmu bersama One Academy 🚀
          </small>
        </div>

        <div className="card-actions justify-center">
          <BuyCourseButton id={data?.id} />
        </div>
      </div>
    </div>
  );
};

export default PreviewBuyCard;
PreviewBuyCard.propTypes = {
  data: PropTypes.object,
};
