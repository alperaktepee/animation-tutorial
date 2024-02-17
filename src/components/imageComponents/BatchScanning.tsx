import React, { useState, useEffect } from 'react';
import Frame3 from '../../assets/images/Frame3.png';
import Frame3_1 from '../../assets/images/Frame3_1.png';

const BatchScanning: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);

  useEffect(() => {
    // Set showImages to true after a delay to initiate the animation
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 300); // Adjust the delay as needed
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowImage2(true);
    }, 600); // Adjust the delay as needed
    return () => clearTimeout(timer2); // Clear the timer on component unmount
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowImage3(true);
    }, 900); // Adjust the delay as needed
    return () => clearTimeout(timer3); // Clear the timer on component unmount
  }, []);

  return (
    <div className="sign-and-stamps-container">
      <div className="box">
        <img src={Frame3} alt="Frame3" className="img-active-tab" />
        {showImage && (
          <img
            src={Frame3_1}
            alt="Frame3_1"
            className="box-frame3_1 frame3_1"
          />
        )}
        {showImage2 && (
          <img
            src={Frame3_1}
            alt="Frame3_1"
            className="box-frame3_2 frame3_2"
          />
        )}
        {showImage3 && (
          <img
            src={Frame3_1}
            alt="Frame3_3"
            className="box-frame3_3 frame3_3"
          />
        )}
      </div>
    </div>
  );
};

export default BatchScanning;
