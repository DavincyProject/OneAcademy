import PropTypes from "prop-types";

const VideoPlayer = ({ videoSrc }) => {
    return (
        <div className="w-full h-[200px] md:h-[450px]">
            <iframe
                className="w-full h-full max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
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
