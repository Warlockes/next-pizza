import { Types } from "../types";

const initialState = {
  categoryIndex: null,
  sortType: "popular",
};

function filters(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SORT_BY: {
      return { ...state, sortType: action.payload };
    }
    case Types.SET_CATEGORY: {
      return { ...state, categoryIndex: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default filters;
