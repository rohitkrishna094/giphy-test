import { GIPHY_BASEURL } from '../../config/urls';
import { GIPHY_API_KEY } from '../../config/keys';

export const getGifs = word => {
  return (dispatch, getState) => {
    const url = `${GIPHY_BASEURL}/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${word}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'ADD_NEW_LINK', payload: { text: word } });
        dispatch({ type: 'SEARCH_GIFS', payload: data.data });
      });
  };
};

export const getTrendingGifs = () => {
  return (dispatch, getState) => {
    const url = `${GIPHY_BASEURL}/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SEARCH_GIFS', payload: data.data });
      });
  };
};
