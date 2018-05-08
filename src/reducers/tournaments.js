export const tournaments = (state = [], action) => {
  // (1)
  switch (action.type) { // (2)
    case "FETCH_TOURNAMENTS_SUCCESS":
      return [...action.tournaments];
    default:
      return state;
  }
};
