export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.query };

    default:
      return state;
  }
};
