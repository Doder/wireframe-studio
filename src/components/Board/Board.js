import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Stage, Layer, Rect, Transformer} from 'react-konva';
import keydown from 'react-keydown';
import Button from '../../containers/Elements/Button/Button';

import {selectTool, drawElements, setTransformerVisibility, removeElement, redrawElements} from '../../actions/actions';

import './boardStyles.css';

class Board extends Component {
  @keydown( 'backspace' ) 
  submit( event ) {
    this.props.removeElement(this.props.selectedElement);
  }
  //componentWill
  componentDidMount(){
    const lastElements = JSON.parse(localStorage.getItem('drawnElements'));
    if(lastElements && lastElements.length > 0){
      this.props.redrawElements(lastElements);
    }
    setInterval(() => {
      localStorage.setItem('drawnElements', JSON.stringify(this.props.drawnElements));
    }, 5000);
  }
  componentDidUpdate(){
    if(!this.transformer) return;
    const stage = this.transformer.getStage();
    const el = stage.findOne('.' + this.props.selectedElement);
    if(!el) return;
    this.transformer.attachTo(el);
    this.transformer.getLayer().batchDraw();
  }
  backgroundClicked = (e) => {
    this.props.setTransformerVisibility(false);
    if(this.props.selectedTool){
      this.props.drawElements(
        this.props.selectedTool, 
        'el-'+this.props.selectedTool+'-'+this.props.drawnElements.length,
        e.evt.layerX, 
        e.evt.layerY
      );
    }
  }
  renderElements = () => {
    return this.props.drawnElements.map((el, index) => {
      return (
          <Button x={el.x} y={el.y} key={el.name} name={el.name}/>
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
                resizeEnabled={this.props.transformerVisible}
                borderEnabled={this.props.transformerVisible}
                enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                padding={2}
                rotateEnabled={false}
                keepRatio={true}
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
  drawnElements: state.drawnElements,
  selectedElement: state.selectedElement,
  transformerVisible: state.transformerVisible
}), {
  selectTool,
  drawElements,
  removeElement,
  setTransformerVisibility,
  redrawElements
})(Board);