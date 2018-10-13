import React from 'react';
import './sidebarStyles.css';

const Sidebar = (props) => {
  return (
    <div className='Sidebar'>
      <div className='element-btn' onClick={props.addButton}>
        <p>Button</p>
      </div>
    </div>
  );
}

export default Sidebar;