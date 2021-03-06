/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import { createStore } from 'redux';

const initialState = {
  data: [
    {
      country: 'Brazil',
      imageUrl: require('../assets/countries/brazil.jpeg'),
      mapPosition: 'translate(16vw, -16.7vw)',
      trips: 5,
    },
    {
      country: 'South Africa',
      imageUrl: require('../assets/countries/africa.jpeg'),
      mapPosition: 'translate(-3.6vw, -21.7vw)',
      trips: 10,
    },
    {
      country: 'England',
      imageUrl: require('../assets/countries/england.jpeg'),
      mapPosition: 'translate(3.4vw, 4.2vw)',
      trips: 18,
    },
  ],
  active: true,
  position: 0,
  scale: 6,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'active':
      return {
        ...state,
        active: action.payload,
      };
    case 'position':
      return {
        ...state,
        position: action.payload,
      };
    case 'scale':
      return {
        ...state,
        scale: action.payload,
      };
    default:
      return state;
  }
};

export const replaceScaleAction = (dispatch, scale) => {
  dispatch({ type: 'scale', payload: scale });
};

export const replacePositionAction = (dispatch, position) => {
  dispatch({ type: 'position', payload: position });
};

export const replaceActiveAction = (dispatch, active) => {
  dispatch({ type: 'active', payload: active });
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
