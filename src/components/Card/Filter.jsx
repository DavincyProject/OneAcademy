import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { listCategory, searchFilter } from "../../redux/actions/courseActions";
import FilterSkeleton from "../skeleton/FilterSkeleton";
import PropTypes from "prop-types";

const Filter = ({ page }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.course.listCategory);

  const level = [
    {
      id: 1,
      name: "Beginner Level",
      params: "beginner",
    },
    {
      id: 2,
      name: "Advanced Level",
      params: "advanced",
    },
    {
      id: 3,
      name: "Intermediate Level",
      params: "intermediate",
    },
  ];

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  useEffect(() => {
    handleParamsChange();
  }, [searchParams, page]);

  const handleParamsChange = () => {
    const categoryParams = searchParams.get("category");
    const levelParams = searchParams.get("level");
    const courseTypeParams = searchParams.get("courseType");

    const filters = {
      category: categoryParams,
      level: levelParams,
      courseType: courseTypeParams,
    };
    dispatch(searchFilter(filters, page));
  };

  const handleCategoryFilter = (e, categoryId) => {
    const currentParams = new URLSearchParams(searchParams);
    const existingCategories = new Set(
      (currentParams.get("category") || "").split(",")
    );

    if (e.target.checked) {
      existingCategories.add(categoryId);
    } else {
      existingCategories.delete(categoryId);
    }

    const categoriesArray = [...existingCategories].join(",");

    // Hapus koma di awal string jika ada
    const finalCategory = categoriesArray.startsWith(",")
      ? categoriesArray.substring(1)
      : categoriesArray;

    currentParams.set("category", finalCategory);

    setSearchParams(currentParams).then(() => {
      handleParamsChange();
    });
  };

  const handleLevelFilter = (e, levelParams) => {
    const currentParams = new URLSearchParams(searchParams);
    const existingLevels = new Set(
      (currentParams.get("level") || "").split(",")
    );

    if (e.target.checked) {
      existingLevels.add(levelParams);
    } else {
      existingLevels.delete(levelParams);
    }

    const updatedLevels = [...existingLevels].join(",");

    // Hapus koma di awal string jika ada
    const finalLevels = updatedLevels.startsWith(",")
      ? updatedLevels.substring(1)
      : updatedLevels;

    currentParams.set("level", finalLevels);

    setSearchParams(currentParams).then(() => {
      handleParamsChange();
    });
  };

  const handleRemoveFilter = () => {
    setSearchParams(new URLSearchParams()).then(() => {
      handleParamsChange();
    });
  };

  if (categoryList <= 0) {
    return <FilterSkeleton />;
  }

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
                <span className="label-text ml-3 ">Paling Baru</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3 ">Paling Populer</span>
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
          <h2 className="card-title text-[16px] font-bold">Kategori</h2>
          <div className="text-left text-[#202244CC] font-medium">
            {categoryList?.map((category) => (
              <div key={category.id} className="form-control items-start">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                    checked={searchParams
                      .get("category")
                      ?.split(",")
                      .includes(category.id)}
                    onChange={(e) => handleCategoryFilter(e, category.id)}
                  />
                  <span className="label-text ml-3">{category?.name}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Level Kesulitan */}
          <h2 className="card-title text-[16px] font-bold">Level Kesulitan</h2>
          <div className="text-left text-[#202244CC] font-medium">
            <div className="form-control items-start">
              {level?.map((level) => (
                <label key={level.id} className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                    checked={searchParams
                      .get("level")
                      ?.split(",")
                      .includes(level.params)}
                    onChange={(e) => handleLevelFilter(e, level.params)}
                  />
                  <span className="label-text ml-3 ">{level?.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="card-actions w-full px-5">
          <button
            onClick={handleRemoveFilter}
            className="btn btn-ghost w-full mb-4 text-red-500 font-medium"
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
Filter.propTypes = {
  page: PropTypes.number,
  onPageChange: PropTypes.func,
};
