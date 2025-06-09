import React, { useRef, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

const whiteKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Total 13 white keys

const blackKeyPositions = {
  1: 48,
  3: 117,
  5: 186,
  8: 320,
  10: 389,
  13: 525,
  15: 594,
  17: 662,
  20: 797,
  22: 865,
};

const Piano = () => {
  const elementRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if (elementRef.current.webkitRequestFullscreen) {
        /* Safari */
        elementRef.current.webkitRequestFullscreen();
      } else if (elementRef.current.msRequestFullscreen) {
        /* IE11 */
        elementRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };
  return (
    <div
      ref={elementRef}
      className={`flex h-screen items-center justify-center ${isFullscreen ? "rotate-90" : "scale-[0.7]"}`}
    >
      <div className="piano relative mt-10">
        <span className="absolute top-1/2 -left-18 -rotate-90 text-4xl">
          Games Of Web
        </span>
        <button
          className="absolute top-0 left-0 m-4 text-4xl"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </button>
        <div className="keys">
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
          <div className="key black-key"></div>
          <div className="key white-key"></div>
        </div>
      </div>
    </div>
  );
};

export default Piano;
