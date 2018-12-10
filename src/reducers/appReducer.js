import SET_CATEGORY from '../constants';

const defaultState = {
  selectedCat: 'dev',
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        selectedCat: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
