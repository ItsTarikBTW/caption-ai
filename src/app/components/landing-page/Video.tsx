"use client"

import Image from "next/image";
import { useRef, useState } from "react";

const Video = ({ source, style, pauseAble }: { source: string, style?: string, pauseAble: boolean }) => {

    const [isPause, setIsPause] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const handleEndVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }

    const handleStopVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPause(!isPause);
        }
    }
    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPause(!isPause);
        }
    }

    return (
        <div className={`rounded-md overflow-hidden ${style}`}>
            <video
                autoPlay
                muted
                width={250}
                height={50}
                className="rounded-md"
                ref={videoRef}
                onEnded={handleEndVideo}
            // onPause={handleStopVideo}
            // onPlay={handlePlayVideo}
            >
                <source src={source} type="video/mp4" />
            </video>
            {pauseAble &&
                <div>
                    {!isPause &&
                        <Image
                            className="absolute right-5 bottom-5"
                            onClick={handleStopVideo}
                            src="./landing-page-assets/play.svg"
                            width={50}
                            height={50}
                            alt="play-pause-btn"
                        />
                    }
                    {isPause &&
                        <Image
                            className="absolute right-5 bottom-5"
                            onClick={handlePlayVideo}
                            src="./landing-page-assets/play.svg"
                            width={50}
                            height={50}
                            alt="play-pause-btn"
                        />
                    }
                </div>
            }
        </div>
    )
}

export default Video
