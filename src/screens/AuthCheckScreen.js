import React, { useEffect, useContext } from "react";
import { navigate } from "../utils/NavigationRef";
import { Context as UserAccessContext } from "../context/userAccessContext";

const AuthCheckScreen = () => {
  const { onCheckLogin } = useContext(UserAccessContext);

  useEffect(() => {
    onCheckLogin();
  }, []);

  return null;
};

export default AuthCheckScreen;
