import React from 'react';
import './ActiveTab.css';
import DocumentScanner from '../imageComponents/DocumentScanner';
import SignAndStamps from '../imageComponents/SignAndStamps';
import BatchScanning from '../imageComponents/BatchScanning';
import AdvancedFilters from '../imageComponents/AdvancedFilters';
import ExportAndShare from '../imageComponents/ExportAndShare';

type Props = {
  activeItem: string; // Define the prop type
  subHeader: string;
  description: string;
  image: string;
  showText: boolean;
};

const ActiveTab = (props: Props) => {
  return (
    <div key={props.image} className="active-tab-container">
      {props.activeItem === 'Document Scanner' ? (
        <DocumentScanner />
      ) : props.activeItem === 'Sign & Stamp' ? (
        <SignAndStamps />
      ) : props.activeItem === 'Batch Scanning' ? (
        <BatchScanning />
      ) : props.activeItem === 'Advanced Filters' ? (
        <AdvancedFilters />
      ) : props.activeItem === 'Export & Share' ? (
        <ExportAndShare />
      ) : null}
      <div
        key={props.activeItem}
        className={`text-container ${props.showText ? 'show' : ''}`}
      >
        <div>
          <div className="header-active-tab">
            {props.activeItem.toUpperCase()}
          </div>
        </div>
        <div>
          <div className="sub-header-active-tab">{props.subHeader}</div>
        </div>
        <div className="text-tab">{props.description}</div>
        <div>
          <button className="btn-active-tab">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveTab;
