'use client';

import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';
import iconPlay from '@public/play-video-icon.png';

function Video({ url }) {
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    // Permet au click de lancer la video en plein ecran
    ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'].forEach(
      (fullscreenMethod) => {
        if (video[fullscreenMethod]) {
          video[fullscreenMethod]();
        }
      }
    );
  };

  useEffect(() => {
    const video = videoRef.current;

    // Quand on quitte le plein écran la video se met en pause
    const exitFullScreen = () => {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        video.pause();
      }
    };

    ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
      document.addEventListener(event, exitFullScreen);
    });

    return () => {
      ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
        document.removeEventListener(event, exitFullScreen);
      });
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={url}
        controls={false}
        className="block rounded-[0.6rem] shadow-[0px_4px_14px_rgba(0,0,0,0.4)]"
      />
      {/* <iframe
        className="block w-full rounded-[0.6rem] shadow-[0px_4px_14px_rgba(0,0,0,0.4)]"
        src={url}
        title="video player project"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      /> */}
      <button
        type="button"
        className="absolute left-2/4 top-2/4 w-10 -translate-x-2/4 -translate-y-2/4"
        onClick={togglePlay}
      >
        <Image src={iconPlay} alt="icon-play" className="active:translate-x-px active:translate-y-0.5" />
      </button>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
