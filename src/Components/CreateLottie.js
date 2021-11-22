import React from 'react';
import Lottie from 'react-lottie';
import animationData from './create.json';

function CreateLottie() {
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
        height={270}
       
      />
        </div>
    )
}

export default CreateLottie
