import React, { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Optional: for a pro look

const BottomVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); 
    const [isMuted, setIsMuted] = useState(true);
    const videoUrl='https://res.cloudinary.com/dxf93mjby/video/upload/v1779162624/video_zymf6m.mp4';

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            // Premium touch: Unmute automatically when they click play for the first time
            videoRef.current.muted = false;
            setIsMuted(false);
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation(); // Prevents pausing the video when clicking mute button
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <div className='mt-12 md:mt-15 flex justify-center w-full px-4 md:px-10 lg:px-20'>
            <div 
                onClick={handleVideoClick}
                className='relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-gray-900 cursor-pointer group border border-white/10'
            >
                {/* 1. Centered Play/Pause Icons */}
                <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 ${isPlaying ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
                    {!isPlaying && (
                        <div className='w-0 h-0 border-t-[30px] border-t-transparent border-l-[50px] border-l-white border-b-[30px] border-b-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] ml-4'></div>
                    )}
                </div>

                {/* 2. Premium Mute Toggle (Bottom Right) */}
                <button 
                    onClick={toggleMute}
                    className='absolute bottom-6 right-6 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all'
                >
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>

                {/* 3. Subtle Vignette Overlay (Top & Bottom) */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-10' />

                <video 
                    ref={videoRef} 
                    className='w-full h-auto max-h-[500px] md:max-h-[700px] object-cover transition-transform duration-700 group-hover:scale-[1.02]' 
                    autoPlay 
                    loop 
                    muted // Must stay muted for autoplay to work
                    playsInline
                    preload='metadata' //// Stops the browser from pre-downloading the whole file
                >
                    <source src={videoUrl} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute bottom-8 left-8 z-20 hidden md:block'>
                <h2 className='text-white text-xl font-bold opacity-80'>TopEnginner Solutions In Action</h2>
                 </div>
            </div>
        </div>
    );
}

export default BottomVideo;
