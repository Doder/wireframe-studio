import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Stage, Layer, Rect, Text, Group, Transformer} from 'react-konva';
import {selectTool, drawElements} from '../../actions/actions';

import './boardStyles.css';

class Board extends Component {
  componentDidUpdate(){
    if(!this.transformer) return;
    const stage = this.transformer.getStage();
    const rectangle = stage.findOne(".rectange-name");
    if(!rectangle) return;
    this.transformer.attachTo(rectangle);
    this.transformer.getLayer().batchDraw();
  }
  stageClicked = (e) => {
    if(this.props.selectedTool){
      this.props.drawElements(this.props.selectedTool, e.evt.x, e.evt.y);
    }
  }
  renderElements = () => {
    return this.props.drawnElements.map((el, index) => {
      return (
          <Group 
            draggable 
            key={index}
            name='rectange-name'
          >
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
              />
              <Transformer 
                resizeEnabled={false}
                borderEnabled={false}
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