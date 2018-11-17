export const addNewLink = link => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_NEW_LINK', payload: link });
  };
};
