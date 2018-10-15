import React, {Component} from 'react';
import Board from '../../components/Board/Board';
import Sidebar from '../../components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Board 
          width={window.innerWidth - 200} 
          height={window.innerHeight - 50} 
        />
      </div>
    );
  }
}

export default App;