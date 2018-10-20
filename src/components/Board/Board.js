import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Stage, Layer, Rect, Text, Group, Transformer} from 'react-konva';
import {selectTool, drawElements} from '../../actions/actions';

import './boardStyles.css';

class Board extends Component {
  state = {
    transformerVisible: false,
    clickedElement: null
  }
  componentDidUpdate(){
    if(!this.transformer) return;
    const stage = this.transformer.getStage();
    const el = stage.findOne('.' + this.state.clickedElement);
    if(!el) return;
    this.transformer.attachTo(el);
    this.transformer.getLayer().batchDraw();
  }
  stageClicked = (e) => {
    if(this.props.selectedTool){
      this.props.drawElements(this.props.selectedTool, e.evt.x, e.evt.y);
    }
  }
  backgroundClicked = () => {
    this.setState({transformerVisible: false});
  }
  elementClicked = (e) => {
    this.setState({transformerVisible: true, clickedElement: e.target.parent.name()});
  }
  elementDblClicked = (e) => {

  }
  renderElements = () => {
    return this.props.drawnElements.map((el, index) => {
      return (
          <Group 
            draggable 
            key={index}
            name={'el-button-' + index}
            onClick={this.elementClicked}
            onDblClick={this.elementDblClicked}
          >
            <Rect 
              fill='white'
              stroke='black'
              strokeWidth={2}
              x={el.x-130}
              y={el.y-10}
              width={60}
              height={20}
              shadowColor='black'
              shadowOffset={{x: 1, y: 1}}
            />
            <Text 
              text='Button' 
              x={el.x-130+10}
              y={el.y-10+5}
            />
          </Group>
      );
    })
  }
  render(){
    return(
      <div className='Board'>
        <div className='canvas-container'>
          <Stage
              width={this.props.width} 
              height={this.props.height} 
              onClick={this.stageClicked}
            >
            <Layer>
              <Rect 
                x={0}
                y={0} 
                fill='white' 
                width={this.props.width} 
                height={this.props.height}
                stroke='grey'
                strokeWidth={2}
                onClick={this.backgroundClicked}
              />
              <Transformer 
                resizeEnabled={this.state.transformerVisible}
                borderEnabled={this.state.transformerVisible}
                enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                padding={2}
                rotateEnabled={false}
                keepRatio={true}
                centeredScaling={true}
                ref={node => {this.transformer = node} }
              />
              {this.renderElements()}
            </Layer>   
          </Stage>
        </div>
      </div>  
    );
  }
  
}

export default connect(state => ({
  selectedTool: state.selectedTool,
  drawnElements: state.drawnElements
}), {
  selectTool,
  drawElements
})(Board);