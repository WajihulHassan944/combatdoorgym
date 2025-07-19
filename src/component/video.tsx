'use client';

import { useRef, useState, useEffect } from 'react';
import { FaPlayCircle, FaExpand } from 'react-icons/fa';

const videos = [
  '/videos/COMBAT DOOR GYM ONE.mp4',
  '/videos/COMBAT DOOR GYM TWO.mp4',
];
const Video = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto p-4 flex flex-wrap justify-center gap-6 pt-5"
      style={{ paddingBottom: '120px' }}
    >
      {videos.map((src, index) => (
        <div key={index} className="w-full sm:w-[48%]">
          <VideoPlayer src={src} />
        </div>
      ))}
    </div>
  );
};


interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if ((container as any).webkitRequestFullscreen) {
      (container as any).webkitRequestFullscreen();
    } else if ((container as any).mozRequestFullScreen) {
      (container as any).mozRequestFullScreen();
    } else if ((container as any).msRequestFullscreen) {
      (container as any).msRequestFullscreen();
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const onFullscreenChange = () => {
      const fsElement =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      setIsFullscreen(!!fsElement);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('mozfullscreenchange', onFullscreenChange);
    document.addEventListener('MSFullscreenChange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
      document.removeEventListener('mozfullscreenchange', onFullscreenChange);
      document.removeEventListener('MSFullscreenChange', onFullscreenChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isFullscreen ? 'aspect-[1/1]' : 'aspect-[4/5]'
      } bg-black rounded-xl overflow-hidden shadow-lg group`}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        preload="metadata"
       
        playsInline
      />

      {!isPlaying && (
        <FaPlayCircle className="text-white text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none" />
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFullscreen();
        }}
        className="absolute top-3 right-3 text-white text-xl bg-black/50 p-2 rounded-full hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100"
      >
        <FaExpand />
      </button>
    </div>
  );
};

export default Video;
