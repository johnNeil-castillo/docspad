import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistMiddlware } from "./middlewares/persist-middlware";
import { ActionType } from "./action-types";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddlware, thunk)
);

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: { id: null, type: "code" },
});
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: { id: null, type: "text", content: "# Test" },
});
