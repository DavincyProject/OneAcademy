import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listCategory } from "../../redux/actions/categoryActions";

const CardCategori = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.category.listCategory);

    useEffect(() => {
        dispatch(listCategory());
    }, [dispatch]);

    return (
        <div className="container-fluid flex justify-center bg-[#EBF3FC]">
            <div className="flex w-full flex-col pt-[26px] pb-[14px] gap-5 container">
                <div className="flex justify-between container px-6">
                    <h2 className="text-xl font-bold">Kategori Belajar</h2>
                    <Link
                        to="/class"
                        className=" font-extrabold text-xs max-w-fit text-[#6148FF]"
                    >
                        Lihat Semua
                    </Link>
                </div>
                <div className="flex flex-col flex-wrap">
                    <div className="justify-between flex flex-wrap grow gap-2.5">
                        {categoryList.map((category) => (
                            <div
                                key={category.id}
                                className="justify-center items-center flex grow basis-[0%] flex-col pl-1.5 pr-2.5"
                            >
                                <img
                                    loading="lazy"
                                    alt={category.name}
                                    src={category.imageId}
                                    className="aspect-[1.4] object-contain object-center w-[140px] "
                                />
                                <div className="text-black text-center text-xs font-semibold leading-9 whitespace-nowrap">
                                    {category.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCategori;
