import React from 'react';
import Frame from '../../assets/images/Frame.png';

const DocumentScanner: React.FC = () => {
  return (
    <div className="box">
      <img src={Frame} className="img-active-tab" />
      <div className="hidden"></div>
    </div>
  );
};

export default DocumentScanner;
