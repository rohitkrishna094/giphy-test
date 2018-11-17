import { combineReducers } from 'redux';
import giphyReducer from './giphyReducer';

const rootReducer = combineReducers({
  giphy: giphyReducer
});

export default rootReducer;
