import Proptype from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCourse } from "../../redux/actions/courseActions";
import { useParams } from "react-router-dom";
import UpdateChapter from "../../components/Admin/chapters/UpdateChapter";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
                className="text-darkblue text-[16px] font-bold flex gap-2 items-center mb-5"
            >
                <FaArrowLeft className="text-darkblue" />
                Kembali Ke Dashboard
            </Link>
            <div className="container">
                <UpdateChapter details={courseDetails} />
            </div>
        </div>
    );
};

export default KelolaChapter;
KelolaChapter.propTypes = {
    id: Proptype.node,
    details: Proptype.arrayOf(Proptype.object),
};
