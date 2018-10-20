import {SELECT_TOOL, DRAW_ELEMENTS, SELECT_ELEMENT, SET_TRANSFORMER_VISIBILITY, CLEAN_BOARD} from '../actions/actionTypes';

const initialState = {
  selectedTool: null,
  drawnElements: [],
  selectedElement: null,
  transformerVisible: false
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SELECT_TOOL:
      return {...state, selectedTool: action.payload};
    case DRAW_ELEMENTS:
      const newElements = [...state.drawnElements, 
      {type: action.payload.type, x: action.payload.x, y: action.payload.y}];
      return {...state, drawnElements: newElements, selectedTool: null};
    case SELECT_ELEMENT:
      return {...state, selectedElement: action.payload};
    case SET_TRANSFORMER_VISIBILITY:
      return {...state, transformerVisible: action.payload};
    case CLEAN_BOARD:
      return initialState;
    default: 
      return state;
  }
};

export default reducer;