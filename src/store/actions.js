import store from '.';

export const replaceScaleAction = (scale) => {
  const replaceScale = { type: 'scale', payload: scale };
  store.dispatch(replaceScale);
};

export const replacePositionAction = (position) => {
  const replacePosition = { type: 'position', payload: position };
  store.dispatch(replacePosition);
};

export const replaceActiveAction = (active) => {
  const replaceActive = { type: 'active', payload: active };
  store.dispatch(replaceActive);
};
