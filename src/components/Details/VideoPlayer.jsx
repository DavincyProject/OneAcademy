import PropTypes from "prop-types";

const VideoPlayer = ({ videoSrc }) => {
    return (
        <div className="w-full h-[30dvh] sm:h-[40dvh] lg:h-[60dvh]">
            <iframe
                className="w-full h-full max-w-full border border-gray-200 bg-[#000000D9] bg-opacity-[85%] rounded-lg dark:border-gray-700"
                src={videoSrc}
                title="YouTube embed video"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
    videoSrc: PropTypes.string,
};
