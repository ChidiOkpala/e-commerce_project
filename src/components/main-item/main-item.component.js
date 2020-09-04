import React from 'react';

import './main-item.styles.scss';

const MainItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 classname="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MainItem;