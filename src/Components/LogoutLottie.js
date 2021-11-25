import React from 'react';
import Lottie from 'react-lottie';
import animationData from './warning.json';

function LogoutLottie() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
            <Lottie 
	    options={defaultOptions}
        height={250}
       style={{width: "250px"}}
      />
        </div>
    )
}

export default LogoutLottie
