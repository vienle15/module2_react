import { log } from "console";

export const countReducer = (state: number = 0, action: any) => {
  console.log("Kiểm tra state", action, state);
  switch (action.type) {
    case "UP":
      return state + 1;

    case "DOWN":
      return state - 1;
    case "x10":
      return state * 10;
  }
  return state;
};

interface TodoAction {
  type: string;
  payload: string;
  index: number;
}

export const todoReducer = (state: string[] = [], action: TodoAction) => {
  console.log(11111111111111, action);

  switch (action.type) {
    case "Create":
      //   state.push(action.payload);

      return [...state, action.payload];
    case "Update":
      const newState = state.map((item, i) => {
        if (i === action.index) {
          return action.payload;
        }
        return item;
      });
      return newState;

    case "Delete":
      const stateDelete = state.filter((item, i) => i !== action.index);
      return stateDelete;
  }
  return state;
};
