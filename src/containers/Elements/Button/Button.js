import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Group, Rect, Text} from 'react-konva';

import {selectElement, setTransformerVisibility} from '../../../actions/actions';

class Button extends Component{
  state = {
    text: 'Button'
  }

  elementClicked = (e) => {
    //this.setState({transformerVisible: true, clickedElement: e.target.parent.name()});
    this.props.selectElement(e.target.parent.name());
    this.props.setTransformerVisibility(true);
  }
  elementDblClicked = (e) => {
    this.setState({text: 'New text'});
  }

  render(){
    return(
      <Group 
        draggable 
        name={this.props.name}
        onClick={this.elementClicked}
        onDblClick={this.elementDblClicked}
      >
        <Rect 
          fill='white'
          stroke='black'
          strokeWidth={2}
          x={this.props.x-130}
          y={this.props.y-10}
          width={this.state.text.length * 8}
          height={20}
          shadowColor='black'
          shadowOffset={{x: 1, y: 1}}
        />
        <Text 
          text={this.state.text} 
          x={this.props.x-130+8}
          y={this.props.y-10+5}
        />
      </Group>
    );
    
  }
}

export default connect(null, {
  selectElement,
  setTransformerVisibility
})(Button);