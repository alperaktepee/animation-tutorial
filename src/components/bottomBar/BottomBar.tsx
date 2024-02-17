import React, { useState } from 'react';
import './BottomBar.css';
import icon1 from '../../assets/icons/icons1.png';
import icon2 from '../../assets/icons/icons2.png';
import icon3 from '../../assets/icons/icons3.png';
import icon4 from '../../assets/icons/icons4.png';
import icon5 from '../../assets/icons/icons5.png';
import icon1fill from '../../assets/icons/icon1fill.png';
import icon2fill from '../../assets/icons/icon2fill.png';
import icon3fill from '../../assets/icons/icon3fill.png';
import icon4fill from '../../assets/icons/icon4fill.png';
import icon5fill from '../../assets/icons/icon5fill.png';

interface BottomBarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ activeItem, onItemClick }) => {
  const [isSpinning, setIsSpinning] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);

  const handleItemClick = (itemIndex: number, item: string) => {
    const updatedSpinningState = isSpinning.map(
      (value, index) => index === itemIndex,
    );
    setIsSpinning(updatedSpinningState);
    onItemClick(item);
  };

  const getIconSource = (index: number) => {
    return activeItem ===
      [
        'Document Scanner',
        'Sign & Stamp',
        'Batch Scanning',
        'Advanced Filters',
        'Export & Share',
      ][index]
      ? [icon1fill, icon2fill, icon3fill, icon4fill, icon5fill][index]
      : [icon1, icon2, icon3, icon4, icon5][index];
  };

  return (
    <div className="nav-container">
      <div className="element-container">
        {[
          'Document Scanner',
          'Sign & Stamp',
          'Batch Scanning',
          'Advanced Filters',
          'Export & Share',
        ].map((item, index) => (
          <div
            key={item}
            className={activeItem === item ? 'active' : 'list-element'}
            onClick={() => activeItem !== item && handleItemClick(index, item)}
          >
            <div className="icon-container">
              <img
                src={getIconSource(index)}
                className={`icon ${isSpinning[index] ? 'spin-circle' : 'spin-circle-back'}`}
              />
            </div>
            <span className="navbar-title">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
