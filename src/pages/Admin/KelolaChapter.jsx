import Proptype from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCourse } from "../../redux/actions/courseActions";
import { useParams } from "react-router-dom";
import UpdateChapter from "../../components/Admin/chapters/UpdateChapter";
import { Link } from "react-router-dom";

const KelolaChapter = () => {
    const { id } = useParams();
    const { courseDetails } = useSelector((state) => state.course);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsCourse(id));
    }, [dispatch, id]);

    return (
        <div>
            <Link to={"/admin/dashboard"}>Kembali</Link>
            <div className="card">
                <UpdateChapter details={courseDetails} />
            </div>
        </div>
    );
};

export default KelolaChapter;
KelolaChapter.propTypes = {
    id: Proptype.node,
};
