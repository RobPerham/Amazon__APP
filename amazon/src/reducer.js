// This file contains the initial state of the application. The initial state is an object with two properties: basket and user. The basket property is an array that contains the items in the basket. The user property is an object that contains the user information. The initial state is exported so that it can be used in the reducer function.
export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
