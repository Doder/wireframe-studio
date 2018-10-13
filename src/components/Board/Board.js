import React from 'react';
import {Stage, Layer, Rect, Text, Group} from 'react-konva';
import './boardStyles.css';

const Board = (props) => {
  const renderElements = () => {
    return props.elements.map((el, index) => {
      return (
        <Group>
          <Text 
            text='Button' 
            x={el.x-130+10}
            y={el.y-10+5}
          />
          <Rect 
            key={index} 
            cornerRadius={4}
            stroke='black'
            strokeWidth={2}
            x={el.x-130}
            y={el.y-10}
            width={60}
            height={20}
            draggable
          />
        </Group>
      );
    })
  };
  return(
    <div className='Board'>
      <Stage 
          width={props.width} 
          height={props.height} 
          onClick={props.stageClicked}
        >
        <Layer>
          {renderElements()}
        </Layer>   
      </Stage>
    </div>
      
  );
}

export default Board;