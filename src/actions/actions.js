import {SELECT_TOOL, DRAW_ELEMENTS} from './actionTypes';

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