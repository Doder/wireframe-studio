import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Group, Rect, Text} from 'react-konva';

import {selectElement, setTransformerVisibility, updateDrawnElement, toggleModal} from '../../../actions/actions';

class Button extends Component{
  state = {
    rectWidth: 0
  }
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
  elementTransformed = (e) => {
    this.props.updateDrawnElement({
      name: e.target.name(),
      scaleX: e.target.attrs.scaleX,
      scaleY: e.target.attrs.scaleY,
      x: e.target.attrs.x,
      y: e.target.attrs.y,
    });
  }
  componentDidMount(){
    this.setState({rectWidth: this.textRef.getTextWidth()});
  }
  componentDidUpdate(){
    const newWidth = this.textRef.getTextWidth();
    if(this.state.rectWidth !== newWidth){
      this.setState({rectWidth: newWidth});
    }
    
  }
  render(){
    return(
      <Group 
        draggable 
        onDragEnd={this.elementDragged}
        name={this.props.name}
        onClick={this.elementClicked}
        onDblClick={this.elementDblClicked}
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
          width={this.state.rectWidth + 8}
          height={20}
          shadowColor='black'
          shadowOffset={{x: 1, y: 1}}
        />
        <Text 
          ref={node => (this.textRef = node)}
          text={this.props.text}
          x={4}
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