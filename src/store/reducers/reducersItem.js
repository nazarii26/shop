import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case EDIT_ITEM:
      const updatedItem = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...state,
              title: action.payload.title,
				  amount: action.payload.amount,
				  cost: action.payload.price,
            }
          : item
      );
      return {
        ...state,
        items: updatedItem,
      };
    default:
      return state;
  }
};
