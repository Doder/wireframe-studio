import React from 'react';
import './sidebarStyles.css';

const Sidebar = (props) => {
  return (
    <div className='Sidebar'>
      <div className='element-btn' onClick={props.addButton}>
        <p>Button</p>
      </div>
      <div className='element-btn' onClick={props.export}>
        <p>Export</p>
      </div>
    </div>
  );
}

export default Sidebar;