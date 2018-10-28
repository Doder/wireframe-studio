import React, {Component} from 'react';
import Board from '../../components/Board/Board';
import Sidebar from '../../components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Board 
          width={1000} 
          height={window.innerHeight - 100} 
        />
      </div>
    );
  }
}

export default App;