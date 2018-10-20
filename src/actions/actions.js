import {SELECT_TOOL, DRAW_ELEMENTS, SELECT_ELEMENT, SET_TRANSFORMER_VISIBILITY, CLEAN_BOARD} from './actionTypes';

export const selectTool = (tool) => ({
  type: SELECT_TOOL,
  payload: tool
});

export const drawElements = (type, x, y) => ({
  type: DRAW_ELEMENTS,
  payload: {
    type,
    x,
    y
  }
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