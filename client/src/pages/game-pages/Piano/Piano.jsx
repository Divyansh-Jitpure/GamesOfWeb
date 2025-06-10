import React, { useRef, useState, useEffect } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

const Piano = () => {
  const elementRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function playSound(newUrl) {
    console.log(newUrl);
    new Audio(newUrl).play();
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        9: "key01",
        49: "key02",
        81: "key03",
        50: "key04",
        87: "key05",
        51: "key06",
        69: "key07",
        82: "key08",
        53: "key09",
        84: "key10",
        54: "key11",
        89: "key12",
        85: "key13",
        56: "key14",
        73: "key15",
        57: "key16",
        79: "key17",
        48: "key18",
        80: "key19",
        219: "key20",
        187: "key21",
        221: "key22",
        8: "key23",
        13: "key24",
      };

      const keyName = keyMap[e.keyCode];
      if (keyName) {
        playSound(`24-piano-keys/${keyName}.mp3`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if (elementRef.current.webkitRequestFullscreen) {
        elementRef.current.webkitRequestFullscreen();
      } else if (elementRef.current.msRequestFullscreen) {
        elementRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      ref={elementRef}
      className={`flex h-screen items-center justify-center ${isFullscreen ? "rotate-90" : "scale-[0.75]"}`}
    >
      <div className="relative rounded-xl bg-linear-to-b from-[#ff6666] to-[#ad2727] p-[30px_30px_30px_90px] shadow-lg">
        <span className="absolute top-1/2 -left-18 -rotate-90 text-4xl text-rose-200/70">
          Games Of Web
        </span>
        <button
          className="absolute top-0 left-0 m-4 text-4xl"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </button>

        <div className="relative flex flex-col">
          {[...Array(24)].map((_, i) => {
            const reversed = 24 - i;
            const number = reversed < 10 ? `0${reversed}` : reversed;
            const url = `24-piano-keys/key${number}.mp3`;
            const isBlack = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22].includes(i); // tweak if needed

            return (
              <div
                key={i}
                className={`key ${isBlack ? "black-key" : "white-key"}`}
                onClick={() => playSound(url)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Piano;
