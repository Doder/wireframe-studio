import {
  SELECT_TOOL, 
  DRAW_ELEMENTS, 
  SELECT_ELEMENT,
  SET_TRANSFORMER_VISIBILITY, 
  CLEAN_BOARD, 
  REMOVE_ELEMENT, 
  REDRAW_ELEMENTS,
  UPDATE_DRAWN_ELEMENT
} from './actionTypes';

export const selectTool = (tool) => ({
  type: SELECT_TOOL,
  payload: tool
});

export const drawElements = (type, name, x, y) => ({
  type: DRAW_ELEMENTS,
  payload: {
    type,
    name,
    x,
    y
  }
});

export const redrawElements = (elements) => ({
  type: REDRAW_ELEMENTS,
  payload: elements
});

export const selectElement = (element) => ({
  type: SELECT_ELEMENT,
  payload: element
});

export const setTransformerVisibility = (isVisible) => ({
  type: SET_TRANSFORMER_VISIBILITY,
  payload: isVisible
});

export const cleanBoard = () => ({
  type: CLEAN_BOARD
});

export const removeElement = (element) => ({
  type: REMOVE_ELEMENT,
  payload: element
});

export const updateDrawnElement = (props) => ({
  type: UPDATE_DRAWN_ELEMENT,
  payload: props
});