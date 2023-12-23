import Proptype from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCourse } from "../../redux/actions/courseActions";
import { useParams } from "react-router-dom";
import UpdateCourse from "../../components/Admin/course/UpdateCourse";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ChapterTable from "../../components/Admin/chapter/ChapterTable";
import MaterialTable from "../../components/Admin/chapter/MaterialTable";

const KelolaChapter = () => {
  const { id } = useParams();
  const { courseDetails } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCourse(id));
  }, [dispatch, id]);

  return (
    <div className="container-fluid p-5">
      <Link
        to={"/admin/dashboard"}
        className="text-darkblue text-[16px] font-bold flex gap-2 items-center mb-5 w-fit"
      >
        <FaArrowLeft className="text-darkblue" />
        Kembali Ke Dashboard
      </Link>
      <div className="container-fluid flex flex-col">
        <UpdateCourse details={courseDetails} />
        <div>
          <ChapterTable />
          <MaterialTable />
        </div>
      </div>
    </div>
  );
};

export default KelolaChapter;
KelolaChapter.propTypes = {
  id: Proptype.node,
  details: Proptype.arrayOf(Proptype.object),
};
