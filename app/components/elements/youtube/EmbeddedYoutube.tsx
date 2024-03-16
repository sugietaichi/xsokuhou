"use client"

import React, { useState, useEffect, useCallback, useRef } from "react";

export const EmbeddedYoutube = ({
    id,
    autoPlay = false,
}: {
    id: string;
    autoPlay?: boolean;
}) => {
    const videoURL = `https://www.youtube.com/embed/${id}${autoPlay ? "?autoplay=1" : ""
        }`;
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const defaultHeight = 495;
    const [videoHeight, setVideoHeight] = useState<number>(
        iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
    );

    const handleChangeVideoWidth = useCallback(() => {
        const ratio =
            window.innerWidth > 990
                ? 1.0
                : window.innerWidth > 522
                    ? 1.2
                    : window.innerWidth > 400
                        ? 1.45
                        : 1.85;
        const height = iframeRef.current
            ? iframeRef.current.offsetWidth * 0.5625
            : defaultHeight;
        return setVideoHeight(Math.floor(height * ratio));
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleChangeVideoWidth);
        const ratio =
            window.innerWidth > 990
                ? 1.0
                : window.innerWidth > 522
                    ? 1.2
                    : window.innerWidth > 400
                        ? 1.45
                        : 1.85;
        const height = iframeRef.current
            ? iframeRef.current.offsetWidth * 0.5625
            : defaultHeight;
        setVideoHeight(Math.floor(height * ratio));
        return function cleanup() {
            window.removeEventListener("resize", handleChangeVideoWidth);
        };
    }, [videoHeight, handleChangeVideoWidth]);

    return (
        <iframe
            ref={iframeRef}
            width="100%"
            height={`${videoHeight}px`}
            src={videoURL}
            className="rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};