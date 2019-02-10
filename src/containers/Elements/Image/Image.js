import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Group, Rect, Line} from 'react-konva';

import {selectElement, setTransformerVisibility, updateDrawnElement, toggleModal} from '../../../actions/actions';

class Image extends Component{
  elementClicked = (e) => {
    this.props.selectElement(e.target.parent.name());
    this.props.setTransformerVisibility(true);
  }
  elementDragged = (e) => {
    this.props.updateDrawnElement({
      x: e.target.attrs.x,
      y: e.target.attrs.y,
      name: e.target.name()
    });
  }
  elementTransformed = (e) => {
    this.props.updateDrawnElement({
      name: e.target.name(),
      scaleX: e.target.attrs.scaleX,
      scaleY: e.target.attrs.scaleY,
      x: e.target.attrs.x,
      y: e.target.attrs.y,
    });
  }
  render(){
    return(
      <Group 
        draggable 
        onDragEnd={this.elementDragged}
        name={this.props.name}
        onClick={this.elementClicked}
        onTransformEnd={this.elementTransformed}
        x={this.props.x}
        y={this.props.y}
        scaleX={this.props.scaleX}
        scaleY={this.props.scaleY}
      >
        <Rect 
          fill='white'
          stroke='black'
          strokeWidth={2}
          width={100}
          height={100}
        />
        <Line 
          points={[0, 0, 100, 100]} 
          stroke="black" 
        />
        <Line   
          points={[0, 100, 100, 0]} 
          stroke="black" 
        />
      </Group>
    );
    
  }
}

export default connect(state => ({
  drawnElements: state.drawnElements
}), {
  selectElement,
  setTransformerVisibility,
  updateDrawnElement,
  toggleModal
})(Image);