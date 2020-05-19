import { AsyncStorage } from "react-native";
import { navigate } from "../utils/NavigationRef";
import createAppContext from "./createAppContext";
import API from "../api/WebService";
import aType from "../utils/ActionTypes";
import userReducer from "./reducer";

/**
 * User Actions
 */

const onCheckAvailability = (dispatch) => async () => {
  try {
    const response = await API.get("/food");
    dispatch({ type: aType.ALL_FOODS, payload: response.data });
  } catch {
    dispatch({ type: aType.ERROR, payload: "Data Not found" });
  }
};

const fetchTopRestaurants = (dispatch) => async () => {
  try {
    const response = await API.get("/food/top/restaurants");
    dispatch({ type: aType.TOP_RESTAURANTS, payload: response.data });
  } catch {
    dispatch({ type: aType.ERROR, payload: "Data Not found" });
  }
};

const onViewCart = (dispatch) => () => {
  API.get("/user/cart")
    .then((response) => {
      dispatch({ type: aType.VIEW_CART, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: "Data Not found" });
    });
};

const onAddToCart = (dispatch) => (item, qty) => {
  console.log(item);

  if (qty !== undefined) {
    API.put(`/user/cart/${item._id}/${qty}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: aType.VIEW_CART, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: aType.ERROR, payload: "Data Not found" + err });
      });
  } else {
    API.post("/user/cart/" + item._id)
      .then((response) => {
        console.log(response);
        dispatch({ type: aType.VIEW_CART, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: aType.ERROR, payload: "Data Not found" + err });
      });
  }
};

const onCreateOrder = (dispatch) => () => {
  API.post("/user/add-order")
    .then((response) => {
      dispatch({ type: aType.CREATE_ORDER, payload: response.data });
      navigate("Order");
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: "Data Not found" });
    });
};

const onViewOrders = (dispatch) => () => {
  API.get("/user/order")
    .then((response) => {
      dispatch({ type: aType.VIEW_ORDER, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: "Data Not found" });
    });
};

const onViewOrderDetails = (dispatch) => ({ _id }) => {
  API.get("/user/order/" + _id)
    .then((response) => {
      dispatch({ type: aType.ORDER_DETAILS, payload: response.data });
      navigate("OrderDetails");
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: "Data Not found" });
    });
};

const onSignup = (dispatch) => async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  API.post("user/signup", {
    email,
    password,
    firstName,
    lastName,
  })
    .then((response) => {
      configureAPI({ token: `Bearer ${response.data}` });
      dispatch({ type: aType.LOGIN, payload: response.data });
      navigate("homeStack");
    })
    .catch((err) => {
      dispatch({
        type: aType.ERROR,
        payload: "Login Fail with provided Email ID and Password",
      });
    });
};

const onSignin = (dispatch) => async ({ email, password }) => {
  API.post("user/login", {
    email,
    password,
  })
    .then((response) => {
      configureAPI({ token: `Bearer ${response.data}` });
      dispatch({ type: aType.LOGIN, payload: response.data });
      navigate("homeStack");
    })
    .catch((err) => {
      dispatch({
        type: aType.ERROR,
        payload: "Login Fail with provided Email ID and Password",
      });
    });
};

const configureAPI = ({ token }) => {
  API.defaults.headers.common["Authorization"] = token;
};

const onCheckLogin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: aType.LOGIN, payload: token });
    navigate("homeStack");
    configureAPI({ token });
  } else {
    navigate("loginStack");
  }
};

const onGetProfile = (dispatch) => async () => {
  try {
  } catch {}
};

const onLogout = (dispatch) => () => {
  navigate("loginStack");
  dispatch({ type: aType.LOGOUT });
};
const onDissmiss = (dispatch) => () => {
  dispatch({ type: aType.DISSMISS });
};

/**
 * Export Methods with Create Context
 */
export const { Provider, Context } = createAppContext(
  userReducer,
  {
    onCheckAvailability,
    onCheckLogin,
    onSignup,
    onSignin,
    onLogout,
    fetchTopRestaurants,
    onAddToCart,
    onViewCart,
    onCreateOrder,
    onViewOrders,
    onViewOrderDetails,
    onDissmiss,
  },
  { accessToken: null, msg: null }
);
