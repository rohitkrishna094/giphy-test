import { combineReducers } from 'redux';
import giphyReducer from './giphyReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
  giphy: giphyReducer,
  history: historyReducer
});

export default rootReducer;
