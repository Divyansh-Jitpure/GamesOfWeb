import React, { useRef, useState } from 'react';

function FullscreenComponent() {
  const elementRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if (elementRef.current.webkitRequestFullscreen) { /* Safari */
        elementRef.current.webkitRequestFullscreen();
      } else if (elementRef.current.msRequestFullscreen) { /* IE11 */
        elementRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          backgroundColor: 'lightblue',
          padding: '20px',
          height: '200px',
          width: '300px',
        }}
      >
        This is the content to be displayed in fullscreen.
      </div>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </button>
    </div>
  );
}

export default FullscreenComponent;