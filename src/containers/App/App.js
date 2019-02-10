import React, {Component} from 'react';
import Board from '../../components/Board/Board';
import Sidebar from '../../components/Sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAd, faTrashAlt, faFileExport, faMousePointer, faImage } from '@fortawesome/free-solid-svg-icons';

library.add(faAd, faTrashAlt, faFileExport, faMousePointer, faImage);

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