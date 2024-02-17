import React, { useState, useEffect } from 'react';
import Frame4 from '../../assets/images/Frame4.png';
import Frame4_1 from '../../assets/images/Frame4_1.png';
import Frame4_2 from '../../assets/images/Frame4_2.png';

const AdvancedFilters: React.FC = () => {
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
        <img src={Frame4} alt="Frame2" className="img-active-tab" />
        {showImage && (
          <img
            src={Frame4_1}
            alt="Frame2_1"
            className="box-frame4_1 frame4_1"
          />
        )}
        {showImage2 && (
          <img
            src={Frame4_2}
            alt="Frame2_2"
            className="box-frame4_2 frame4_2"
          />
        )}
      </div>
    </div>
  );
};

export default AdvancedFilters;
