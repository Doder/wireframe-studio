import {SELECT_TOOL, DRAW_ELEMENTS} from '../actions/actionTypes';

const initialState = {
  selectedTool: null,
  drawnElements: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SELECT_TOOL:
      return {...state, selectedTool: action.payload};
    case DRAW_ELEMENTS:
      const newElements = [...state.drawnElements, 
      {type: action.payload.type, x: action.payload.x, y: action.payload.y}];
      return {...state, drawnElements: newElements, selectedTool: null};
    default: 
      return state;
  }
};

export default reducer;