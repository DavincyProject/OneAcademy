const VideoPlayer = () => {
    return (
        <div className="w-full h-[200px] md:h-[450px]">
            <iframe
                className="w-full h-full max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                src="https://www.youtube.com/embed/IUDG7ok7dVk"
                title="YouTube embed video"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPlayer;
