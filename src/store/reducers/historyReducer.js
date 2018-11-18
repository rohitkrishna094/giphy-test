const initialState = { links: [] };

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_LINK':
      return { ...state, links: [ action.payload, ...state.links] };
    default:
      return state;
  }
};

export default historyReducer;
