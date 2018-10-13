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
    if(this.state.selectedTool){
      const newElements = [...this.state.drawnElements, 
        {type: this.state.selectedTool, x: e.evt.x, y: e.evt.y}];
      this.setState({drawnElements: newElements});
    }
    
  }
  export = () => {
    const canvasElement = document.getElementsByTagName('canvas')[0];
    //window.location = canvas.toDataURL("image/png");
    const MIME_TYPE = "image/jpg";

    const imgURL = canvasElement.toDataURL(MIME_TYPE);

    const dlLink = document.createElement('a');
    dlLink.download = 'wireframe';
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  render() {
    return (
      <div>
        <Sidebar addButton={this.addButton} export={this.export}/>
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
