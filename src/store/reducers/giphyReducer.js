const initialState = { data: [], pause: false };

const giphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_GIFS':
      return { ...state, data: action.payload };
    case 'PAUSE_GIFS':
      return { ...state, pause: action.payload };
    default:
      return state;
  }
};

export default giphyReducer;
