/* export default function reducer(state, action) {
  if (typeof state === "undefined") {
    state = { n: false };
  }

  if (action.type === "SAVE_SETTINGS") {
    let n = action.n;
    return { ...state, n };
  } else {
    return state;
  }
}
 */

const initialState = {
  notifications: {
    areActive: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_SETTINGS":
      return {
        ...state,
        notifications: { areActive: action.areNotificationsActive },
      };
    default:
      return state;
  }
}
