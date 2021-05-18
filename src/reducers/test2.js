const initialState = {
  a: 3,
  b: 4,
};

// Use the initialState as a default value
export default function test2(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
