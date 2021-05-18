import store from "./store";

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);
console.log(store);
console.log(store.getState());

store.dispatch({ type: "plus" });
store.dispatch({ type: "plus" });
store.dispatch({ type: "plus" });
store.dispatch({ type: "plus" });
console.log(store.getState());

unsubscribe()
store.dispatch({ type: "plus" });
