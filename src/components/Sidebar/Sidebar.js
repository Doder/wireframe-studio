import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import './sidebarStyles.css';
import {selectTool, cleanBoard} from '../../actions/actions';
import {downloadImage} from '../../Utils/utils';


const Sidebar = (props) => {
  return (
    <div className='Sidebar'>
      <div className='element-btn'>
        <FontAwesomeIcon icon="mouse-pointer" className='fa-icon'/>
      </div>
      <div className='element-btn' onClick={() => props.selectTool('button')}>
        <FontAwesomeIcon icon="ad" className='fa-icon'/>
      </div>
      <div className='element-btn' onClick={() => props.selectTool('image')}>
        <FontAwesomeIcon icon="image" className='fa-icon'/>
      </div>
      <div className='element-btn' onClick={() => props.cleanBoard()}>
        <FontAwesomeIcon icon="trash-alt" className='fa-icon'/>
      </div>
      <div className='element-btn' onClick={() => downloadImage('image/jpg')}>
        <FontAwesomeIcon icon="file-export" className='fa-icon'/>
      </div>
    </div>
  );
}

export default connect(null, {selectTool, cleanBoard})(Sidebar);