import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Group, Rect, Text} from 'react-konva';

import {selectElement, setTransformerVisibility, updateDrawnElement, toggleModal} from '../../../actions/actions';

class Button extends Component{
  elementClicked = (e) => {
    this.props.selectElement(e.target.parent.name());
    this.props.setTransformerVisibility(true);
  }
  elementDblClicked = (e) => {
    this.props.toggleModal();
  }
  elementDragged = (e) => {
    this.props.updateDrawnElement({
      x: e.target.attrs.x,
      y: e.target.attrs.y,
      name: e.target.name()
    });
  }

  render(){
    const rectWidth = this.props.text.length * 9;
    return(
      <Group 
        draggable 
        onDragEnd={this.elementDragged}
        name={this.props.name}
        onClick={this.elementClicked}
        onDblClick={this.elementDblClicked}
        x={this.props.x}
        y={this.props.y}
      >
        <Rect 
          fill='white'
          stroke='black'
          strokeWidth={2}
          width={rectWidth}
          height={20}
          shadowColor='black'
          shadowOffset={{x: 1, y: 1}}
        />
        <Text 
          text={this.props.text}
          x={8}
          y={5}
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
})(Button);