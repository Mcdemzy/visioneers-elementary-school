import { useEffect, useRef, useState } from "react";
import { FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Video from "/video/OverlayVideo.mp4";

interface OverlayProps {
  onClose: () => void;
}

const Overlay = ({ onClose }: OverlayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Autoplay prevented:", err);
      }
    };

    const videoElement = videoRef.current;
    const handleEnded = () => {
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
      playVideo();
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        {" "}
        {/* Added mt-16 for navbar space */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          autoPlay
          playsInline
          loop={false}
          muted={isMuted}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Close video"
        >
          <FaTimes className="text-xl" />
        </button>
        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <FaVolumeMute className="text-xl" />
          ) : (
            <FaVolumeUp className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Overlay;
