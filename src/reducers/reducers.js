import {SELECT_TOOL, DRAW_ELEMENTS, SELECT_ELEMENT, SET_TRANSFORMER_VISIBILITY, CLEAN_BOARD, REMOVE_ELEMENT} from '../actions/actionTypes';

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
      let newElements = [...state.drawnElements, 
      {type: action.payload.type, name: action.payload.name, x: action.payload.x, y: action.payload.y}];
      return {...state, drawnElements: newElements, selectedTool: null};
    case SELECT_ELEMENT:
      return {...state, selectedElement: action.payload};
    case REMOVE_ELEMENT:
      console.log(action.payload);
      console.log(state.drawnElements);
      newElements = state.drawnElements.filter(el => el.name !== action.payload);
      return {...state, drawnElements: newElements, transformerVisible: false, selectedElement: null};
    case SET_TRANSFORMER_VISIBILITY:
      return {...state, transformerVisible: action.payload};
    case CLEAN_BOARD:
      return initialState;
    default: 
      return state;
  }
};

export default reducer;