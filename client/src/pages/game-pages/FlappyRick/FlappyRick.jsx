import React from 'react'

const FlappyRick = () => {
    const gameUrl = "./FlappyRickGame/index.html";
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex' }}>
            <iframe
                src={gameUrl}
                title="Flappy Rick Original Game"
                width="100%"
                height="100%"
                frameBorder="0" // Removes the default iframe border
                scrolling="no" // Prevents scrollbars if content fits
                style={{ flexGrow: 1 }} // Ensures iframe takes available space
            ></iframe>
        </div>
    )
}

export default FlappyRick