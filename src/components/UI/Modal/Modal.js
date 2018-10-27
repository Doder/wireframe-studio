import React, {Component} from 'react';
import {connect} from 'react-redux';
import './modalStyles.css';
import {toggleModal, rename} from '../../../actions/actions';

class Modal extends Component {
  state = {
    text: ''
  }
  overlayClicked = (e) => {
    e.preventDefault();
    this.props.toggleModal();
  }
  modalClicked = (e) => {
    e.stopPropagation();
  }
  renameClicked = (e) => {
    this.setState({text: ''});
    this.props.rename(this.props.selectedElement, this.state.text);
    this.props.toggleModal();
  }
  textChanged = (e) => {
    e.preventDefault();
    this.setState({text: e.target.value});
  }
  keyTyped = (e) => {
    //enter
    if(e.keyCode === 13){
      this.renameClicked(e);
    }
  }
  render(){
    return(
      this.props.showModal ? 
      <div className='overlay' onClick={this.overlayClicked}>
        <div className='modal' onClick={this.modalClicked}>
          <input type='text' width='200px' value={this.state.text} onChange={this.textChanged}
          onKeyDown={this.keyTyped}/>
          <button onClick={this.renameClicked}>Rename</button>
        </div>
      </div>
      : null
    );
  }
  
};

export default connect(state => ({
  showModal: state.showModal,
  selectedElement: state.selectedElement
}), {toggleModal, rename})(Modal);