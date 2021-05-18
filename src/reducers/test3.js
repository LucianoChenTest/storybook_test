const initialState = {
  a: 5,
  b: 6,
};

// Use the initialState as a default value
export default function test2(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
