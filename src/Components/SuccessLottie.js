import React from 'react';
import Lottie from 'react-lottie';
import animationData from './carttt.json';

function SuccessLottie() {
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
        height={200}
       
      />
        </div>
    )
}

export default SuccessLottie
