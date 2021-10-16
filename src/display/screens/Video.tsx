import React from 'react';
import Logo from '../../img/logo.png';

export function Video(_: {}) {

    return (
            <div id="openVideo">
                <iframe src="/silence.mp3" allow="autoplay" id="audio" style={{display: "none"}}></iframe>
                <video loop={false} autoPlay={true} muted={false}>
                    <source src="/intro.mp4" type="video/mp4"></source>
                </video>
            </div>
    );
}

export default Video;