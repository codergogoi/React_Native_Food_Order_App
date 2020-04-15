import { AsyncStorage } from "react-native";
import { navigate } from "../utils/NavigationRef";
import createAppContext from "../context/createAppContext";
import API from "../api/WebService";
import aType from "../utils/ActionTypes";

/**
 * User Actions
 */

const onCheckAvailability = (dispatch) => async () => {
  try {
    const response = await API.get("/shop");
    dispatch({ type: aType.ALL_PRODUCTS, payload: response.data });
  } catch {
    dispatch({ type: aType.ERROR, payload: "Data Not found" });
  }
};

const onSignup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await API.post("/signup", {
      email,
      password,
    });
    if (response.data.token) {
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: aType.LOGIN, payload: response.data.token });
      navigate("homeStack");
    } else {
      dispatch({ type: aType.ERROR, payload: "Error while signup" });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: aType.ERROR, payload: "Error while signup" });
  }
};

const onSignin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await API.post("/signin", {
      email,
      password,
    });
    if (response.data.token) {
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: aType.LOGIN, payload: response.data.token });
      navigate("homeStack");
    } else {
      dispatch({ type: aType.ERROR, payload: "Error while Signin" });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: aType.ERROR, payload: "Error while signup" });
  }
};

const onCheckLogin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: aType.LOGIN, payload: token });
    navigate("homeStack");
  } else {
    navigate("loginStack");
  }
};

const onGetProfile = (dispatch) => async () => {
  try {
  } catch {}
};

/**
 * Reducer
 */
const userReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case aType.LOGIN:
      return { ...state, token: action.payload };
    case aType.ALL_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

/**
 * Export Methods with Create Context
 */
export const { Provider, Context } = createAppContext(
  userReducer,
  { onCheckAvailability, onCheckLogin, onSignup, onSignin },
  { accessToken: null, msg: "" }
);
