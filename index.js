import store from "./store/index.js";

import { addAction, subAction } from "./store/actionCreators.js";

store.subscribe(() => {
  console.log(store.getState().counter);
});

store.dispatch(addAction(10));
store.dispatch(subAction(3));
