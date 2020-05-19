import { AsyncStorage } from "react-native";
import aType from "../utils/ActionTypes";

/**
 * Reducer
 */
const userReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case aType.LOGIN:
      saveToken(action.payload);
      return { ...state, token: action.payload };
    case aType.LOGOUT:
      clearStorage();
      return { token: null, msg: null, state };
    case aType.ALL_FOODS:
      return { ...state, foods: action.payload };
    case aType.TOP_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case aType.VIEW_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case aType.VIEW_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case aType.ORDER_DETAILS:
      return {
        ...state,
        orderItems: action.payload,
      };
    case aType.CREATE_ORDER:
      return {
        ...state,
        cartItems: [],
        orders: action.payload,
      };

    case aType.ERROR:
      return {
        ...state,
        msg: action.payload,
      };
    case aType.DISSMISS:
      return {
        ...state,
        msg: null,
      };
    default:
      return state;
  }
};

const saveToken = async (token) => {
  await AsyncStorage.setItem("token", `Bearer ${token}`);
};

const clearStorage = async () => {
  await AsyncStorage.clear();
};

export default userReducer;
