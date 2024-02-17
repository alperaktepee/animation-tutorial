import React, { useState, useEffect } from 'react';
import Frame2 from '../../assets/images/Frame2.png';
import Frame2_1 from '../../assets/images/Frame2_1.png';
import Frame2_2 from '../../assets/images/Frame2_2.png';

const SignAndStamps: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

  useEffect(() => {
    // Set showImages to true after a delay to initiate the animation
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 450); // Adjust the delay as needed
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowImage2(true);
    }, 750); // Adjust the delay as needed
    return () => clearTimeout(timer2); // Clear the timer on component unmount
  }, []);

  return (
    <div className="sign-and-stamps-container">
      <div className="box">
        <img src={Frame2} alt="Frame2" className="img-active-tab" />
        {showImage && (
          <img
            src={Frame2_1}
            alt="Frame2_1"
            className="box-frame2_1 frame2_1"
          />
        )}
        {showImage2 && (
          <img
            src={Frame2_2}
            alt="Frame2_2"
            className="box-frame2_2 frame2_2"
          />
        )}
      </div>
    </div>
  );
};

export default SignAndStamps;
