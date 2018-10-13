import React, { Component } from 'react';
import Board from '../../components/Board/Board';
import Sidebar from '../../components/Sidebar/Sidebar';

class App extends Component {
  state = {
    selectedTool: null,
    drawnElements: []
  }
  addButton = () => {
    this.setState({selectedTool: 'button'});
  }
  stageClicked = (e) => {
    console.log(e.evt.x, e.evt.y);
    if(this.state.selectedTool){
      const newElements = [...this.state.drawnElements, 
        {type: this.state.selectedTool, x: e.evt.x, y: e.evt.y}];
      this.setState({drawnElements: newElements});
    }
    
  }
  render() {
    return (
      <div>
        <Sidebar addButton={this.addButton}/>
        <Board 
          width={window.innerWidth - 130} 
          height={window.innerHeight} 
          selectedTool={this.state.selectedTool}
          stageClicked={this.stageClicked}
          elements={this.state.drawnElements}
        />
      </div>
    );
  }
}

export default App;
