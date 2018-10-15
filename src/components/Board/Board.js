import React from 'react';
import {connect} from 'react-redux';
import {Stage, Layer, Rect, Text, Group} from 'react-konva';
import {selectTool, drawElements} from '../../actions/actions';

import './boardStyles.css';

const Board = (props) => {
  const stageClicked = (e) => {
    if(props.selectedTool){
      props.drawElements(props.selectedTool, e.evt.x, e.evt.y);
    }
  };
  const renderElements = () => {
    return props.drawnElements.map((el, index) => {
      return (
        <Group draggable key={index} >
          <Text 
            text='Button' 
            x={el.x-130+10}
            y={el.y-10+5}
          />
          <Rect 
            cornerRadius={4}
            stroke='black'
            strokeWidth={2}
            x={el.x-130}
            y={el.y-10}
            width={60}
            height={20}
          />
        </Group>
      );
    })
  };
  return(
    <div className='Board'>
      <div className='canvas-container'>
        <Stage
            width={props.width} 
            height={props.height} 
            onClick={stageClicked}
          >
          <Layer>
            <Rect 
              x={0}
              y={0} 
              fill='white' 
              width={props.width} 
              height={props.height}
              stroke='grey'
              strokeWidth={2}
            />
            {renderElements()}
          </Layer>   
        </Stage>
      </div>
    </div>  
  );
}

export default connect(state => ({
  selectedTool: state.selectedTool,
  drawnElements: state.drawnElements
}), {
  selectTool,
  drawElements
})(Board);