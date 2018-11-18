export const deleteWord = id => {
  return (dispatch, getState) => {
    dispatch({ type: 'DELETE_LINK', payload: { id } });
  };
};
