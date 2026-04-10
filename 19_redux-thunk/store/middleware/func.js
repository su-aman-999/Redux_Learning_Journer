export const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action === "function") {
      action(dispatch, getState);
    } else {
      next(action);
    }
  };
