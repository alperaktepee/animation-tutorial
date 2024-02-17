import React, { useState, useEffect } from 'react';
import Frame5 from '../../assets/images/Frame5.png';
import Frame5_1 from '../../assets/images/Frame5_1.png';
import Frame5_2 from '../../assets/images/Frame5_2.png';
import Frame5_3 from '../../assets/images/Frame5_3.png';
import Frame5_4 from '../../assets/images/Frame5_4.png';

const ExportAndShare: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);

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
    }, 450); // Adjust the delay as needed
    return () => clearTimeout(timer2); // Clear the timer on component unmount
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowImage3(true);
    }, 600); // Adjust the delay as needed
    return () => clearTimeout(timer3); // Clear the timer on component unmount
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowImage4(true);
    }, 750); // Adjust the delay as needed
    return () => clearTimeout(timer3); // Clear the timer on component unmount
  }, []);
  return (
    <div className="sign-and-stamps-container">
      <div className="box">
        <img src={Frame5} alt="Frame5" className="img-active-tab" />
        {showImage && (
          <img
            src={Frame5_1}
            alt="Frame5_1"
            className="box-frame5_1 frame5_1"
          />
        )}
        {showImage2 && (
          <img
            src={Frame5_2}
            alt="Frame5_2"
            className="box-frame5_2 frame5_2"
          />
        )}
        {showImage3 && (
          <img
            src={Frame5_3}
            alt="Frame5_3"
            className="box-frame5_3 frame5_3"
          />
        )}
        {showImage4 && (
          <img
            src={Frame5_4}
            alt="Frame5_4"
            className="box-frame5_4 frame5_4"
          />
        )}
      </div>
    </div>
  );
};

export default ExportAndShare;
