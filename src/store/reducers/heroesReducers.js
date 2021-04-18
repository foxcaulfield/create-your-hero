
const initialState = {
  value:0,
};

function heroesReducer(state = initialState, action) {
  switch (action.type) {
  // case ACTION:
  //   return {
  //     ...state,
  //   };
  default: {
    return state;
  }
  }
}

export default heroesReducer;