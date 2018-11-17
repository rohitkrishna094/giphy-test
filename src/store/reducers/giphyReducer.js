const initialState = { data: [] };

const giphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_GIFS':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default giphyReducer;
