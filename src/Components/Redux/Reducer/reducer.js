const initialState = {
  carts: [],
};
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddToCart": {
      let itemIndex = state.carts.findIndex((e) => {
        return e.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      }
      else{
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp]
        };
      };
    };

    case "DecreaseCount": {
      const lessIndex = state.carts.findIndex(
        (items) => items.id === action.payload.id
        );
      if (state.carts[lessIndex].qnty >= 1){
        const delItems = (state.carts[lessIndex].qnty -= 1);
      }
      else if (state.carts[lessIndex].qnty === 1) {
        const lessData = state.carts.filter(
          (items) => items.id !== action.payload
        );

        return {
          ...state,
          carts: lessData
        };
      }
    }

    case "RemoveCart":
      let newArr = state.carts.filter((items, index) => {
        return action.payload !== index;
      });
      return {
        carts: newArr,
      };
    default:
      return state;
  }
};
