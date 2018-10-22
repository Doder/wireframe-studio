import {
  SELECT_TOOL, 
  DRAW_ELEMENTS, 
  SELECT_ELEMENT,
  SET_TRANSFORMER_VISIBILITY, 
  CLEAN_BOARD, 
  REMOVE_ELEMENT, 
  REDRAW_ELEMENTS,
  UPDATE_DRAWN_ELEMENT
} from '../actions/actionTypes';

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
    case REDRAW_ELEMENTS:
      return {...state, drawnElements: action.payload};
    case SELECT_ELEMENT:
      return {...state, selectedElement: action.payload};
    case REMOVE_ELEMENT:
      newElements = state.drawnElements.filter(el => el.name !== action.payload);
      return {...state, drawnElements: newElements, transformerVisible: false, selectedElement: null};
    case SET_TRANSFORMER_VISIBILITY:
      return {...state, transformerVisible: action.payload};
    case CLEAN_BOARD:
      return initialState;
    case UPDATE_DRAWN_ELEMENT: 
      newElements = state.drawnElements.map((el) => {
        if(el.name === action.payload.name){
          return {...el, x: action.payload.x, y: action.payload.y};
        }
        return el;
      });
      return {...state, drawnElements: newElements};
    default: 
      return state;
  }
};

export default reducer;