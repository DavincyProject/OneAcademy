import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const KelolaMaterial = ({ idCourse }) => {
  const { id } = useParams();
  return (
    <div className="container-fluid p-5">
      <Link
        to={"/admin/chapter/"}
        className="text-darkblue text-[16px] font-bold flex gap-2 items-center mb-5"
      >
        <FaArrowLeft className="text-darkblue" />
        Kembali Ke Dashboard
      </Link>
      <div className="container-fluid flex flex-col">
        {/* <UpdateCourse details={courseDetails} /> */}
        <div>{/* <ChapterTable /> */}</div>
      </div>
    </div>
  );
};

export default KelolaMaterial;
