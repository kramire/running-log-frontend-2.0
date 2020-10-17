import * as ActionTypes from "./actionTypes";
import { StateInterface, Action, Run, Runs } from "../base";

const initialState: StateInterface = {
  user: null,
  runs: {},
  // isFetching: true,
  // isPosting: false,
  // isDeleting: false,
};

export const reducer = (
  state = initialState,
  action: Action
): StateInterface => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.data,
      };
    case ActionTypes.SET_RUNS:
      const runArr: Run[] = action.data;
      const runs = runArr.reduce(
        (runs: Runs, el: Run) => ({ ...runs, [el.id]: el }),
        {}
      );
      return {
        ...state,
        runs,
      };

    default:
      return state;
  }
};
