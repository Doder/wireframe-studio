import React from 'react';
import {connect} from 'react-redux';
import './sidebarStyles.css';
import {selectTool} from '../../actions/actions';
import {downloadImage} from '../../Utils/utils';

const Sidebar = (props) => {
  return (
    <div className='Sidebar'>
      <div className='element-btn' onClick={() => props.selectTool('button')}>
        <p>Button</p>
      </div>
      <div className='element-btn' onClick={() => downloadImage('image/jpg')}>
        <p>Export</p>
      </div>
    </div>
  );
}

export default connect(null, {selectTool})(Sidebar);