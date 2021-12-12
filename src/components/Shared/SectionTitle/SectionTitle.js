import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="row text-center">   
            <h5>{subTitle}</h5>
            <h3>{title}</h3>
            <div className="bottom-line shape-div">
            </div>
        </div>
    );
};

export default SectionTitle;