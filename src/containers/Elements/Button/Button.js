import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Group, Rect, Text} from 'react-konva';

import {selectElement, setTransformerVisibility, updateDrawnElement} from '../../../actions/actions';

class Button extends Component{
  state = {
    text: 'Button'
  }

  elementClicked = (e) => {
    this.props.selectElement(e.target.parent.name());
    this.props.setTransformerVisibility(true);
  }
  elementDblClicked = (e) => {
    this.setState({text: 'New text'});
  }
  elementDragged = (e) => {
    const rectWidth = this.state.text.length * 8;
    this.props.updateDrawnElement({
      x: e.evt.layerX,
      y: e.evt.layerY,
      name: e.target.name()
    });
  }

  render(){
    const rectWidth = this.state.text.length * 8;
    return(
      <Group 
        draggable 
        onDragEnd={this.elementDragged}
        name={this.props.name}
        onClick={this.elementClicked}
        onDblClick={this.elementDblClicked}
        x={this.props.x-(rectWidth/2)}
        y={this.props.y-10}
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
          text={this.state.text} 
          x={8}
          y={5}
        />
      </Group>
    );
    
  }
}

export default connect(null, {
  selectElement,
  setTransformerVisibility,
  updateDrawnElement
})(Button);