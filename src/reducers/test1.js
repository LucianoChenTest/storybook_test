const initialState = {
  a: 1,
  b: 2,
};

// Use the initialState as a default value
export default function test(state = initialState, action) {
  switch (action.type) {
    case "plus": {
      return { ...state, a: state.a + 1 };
    }
    default:
      return state;
  }
}
