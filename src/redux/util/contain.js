export const contain = (callback, draftState) => {
    return (state = draftState, action) => {
      let mutableState = {...state};
      callback(mutableState, action);
      return mutableState;
    }
  }

  //se utiliza para prevenir las mutaciones de un estado de redux.