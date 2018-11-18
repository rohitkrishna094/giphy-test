const initialState = { links: [] };

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_LINK':
      const obj = { text: action.payload.text, id: action.payload.id };
      return { ...state, links: [obj, ...state.links] };
    case 'DELETE_LINK':
      let links = [...state.links].filter(e => e.id !== action.payload.id);
      return { ...state, links };
    default:
      return state;
  }
};

export default historyReducer;
