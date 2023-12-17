import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
    const { listCategory } = useSelector((state) => state.course);
    const [searchParams, setSearchParams] = useSearchParams();

    const level = [
        {
            id: 1,
            name: "Semua Level",
            params: "",
        },
        {
            id: 2,
            name: "Beginner Level",
            params: "beginner",
        },
        {
            id: 3,
            name: "Advanced Level",
            params: "advanced",
        },
        {
            id: 4,
            name: "Intermediate Level",
            params: "intermediate",
        },
    ];

    const handleCategoryFilter = (e, categoryId) => {
        const isChecked = e.target.checked;
        const currentParams = new URLSearchParams(searchParams);

        if (isChecked) {
            currentParams.append("category", categoryId);
        } else {
            currentParams.delete("category", categoryId);
        }

        setSearchParams(currentParams);
        console.log(currentParams);
    };

    const checkColor = `[--chkbg:theme(colors.check.100)] [--chkfg:white]`;
    return (
        <div>
            <div className="card w-full min-w-[280px] bg-base-100 text-center mt-3">
                <div className="card-body">
                    <h2 className="card-title text-[16px] font-bold">Filter</h2>
                    <div className="text-left text-[#202244CC] font-medium">
                        <div className="form-control items-start">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                                />
                                <span className="label-text ml-3 ">
                                    Paling Baru
                                </span>
                            </label>
                        </div>
                        <div className="form-control items-start">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                                />
                                <span className="label-text ml-3 ">
                                    Paling Populer
                                </span>
                            </label>
                        </div>
                        <div className="form-control items-start">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                                />
                                <span className="label-text ml-3">Promo</span>
                            </label>
                        </div>
                    </div>

                    {/* kategori */}
                    <h2 className="card-title text-[16px] font-bold">
                        Kategori
                    </h2>
                    <div className="text-left text-[#202244CC] font-medium">
                        {listCategory?.map((category) => (
                            <div
                                key={category?.id}
                                className="form-control items-start"
                            >
                                <label className="label cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                                        onChange={(e) =>
                                            handleCategoryFilter(e, category.id)
                                        }
                                    />
                                    <span className="label-text ml-3">
                                        {category?.name}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Level Kesulitan */}
                    <h2 className="card-title text-[16px] font-bold">
                        Level Kesulitan
                    </h2>
                    <div className="text-left text-[#202244CC] font-medium">
                        <div className="form-control items-start">
                            {level?.map((level) => (
                                <label
                                    key={level.id}
                                    className="label cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                                    />
                                    <span className="label-text ml-3 ">
                                        {level?.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-actions w-full">
                    <button className="btn btn-ghost w-full mb-4 text-red-500 font-medium">
                        Hapus Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
