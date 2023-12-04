import PropTypes from "prop-types";

// This card for Filter pages
const CourseCard = ({ data }) => {
    return (
        <div className="shadow-sm bg-white flex flex-col flex-grow sm:flex-none items-stretch pb-2.5 rounded-2xl">
            <img
                loading="lazy"
                srcSet={data.image}
                className="aspect-[4.04] w-full overflow-hidden h-[85px] object-cover rounded-t-2xl"
            />
            <div className="flex w-full flex-col mt-1.5 px-2.5">
                <div className="items-stretch self-stretch flex w-full justify-between gap-5">
                    <div className="text-indigo-600 text-xs font-bold leading-4 flex-1">
                        {data.nama}
                    </div>
                    <div className="justify-between items-stretch flex gap-0 pl-20 max-md:pl-5">
                        <img loading="lazy" src="/icon/ic_round-star.svg" />
                        <div className="text-indigo-950 text-xs font-semibold leading-4 grow whitespace-nowrap">
                            {data.rating}
                        </div>
                    </div>
                </div>
                <div className="self-stretch text-black text-xs font-bold leading-4">
                    <span className="font-bold text-indigo-950">
                        {data.topic}
                        <br />
                    </span>
                    <span className=" text-black">{data.mentor}</span>
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-0">
                    <div className="flex gap-1 items-center">
                        <img
                            loading="lazy"
                            src="/icon/mdi_badge-outline.svg"
                            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-indigo-600 text-xs font-semibold leading-4 self-stretch">
                            {data.level}
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            loading="lazy"
                            src="/icon/clarity_book-line.svg"
                            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-black text-xs font-normal leading-4 self-stretch">
                            {data.modul}
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            loading="lazy"
                            src="/icon/ri_time-fill.svg"
                            className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-black text-xs font-normal leading-4 self-stretch">
                            {data.durasi}
                        </div>
                    </div>
                </div>
                <div className="badge badge-blue p-3 mt-2">
                    <div className="flex gap-1 items-center">
                        <img src="/icon/Diamond.svg" alt="diamond icon" />
                        <p className="font-bold text-xs">{data.harga}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
CourseCard.propTypes = {
    data: PropTypes.object,
};