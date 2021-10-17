import React from 'react';
import Logo from '../../img/logo.png';
import {store} from '../../index'
const endHandler = function(a : any){
  store.dispatch({"displayState":{"timerState":{"totalTime":-1,"startTime":1634485030548,"timeLeft":-1},"windowName":"Wait"},"type":"NewDisplayState"});
}

export function Video(_: {}) {
    return (
            <div id="openVideo">
                <video loop={false} autoPlay={true} muted={true}
                onEnded={endHandler}>
                    <source src="/intro.mp4" type="video/mp4"></source>
                </video>
            </div>
    );
}

export default Video;
