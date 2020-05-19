import React, { useEffect, useContext } from "react";
import { Context as UserAccessContext } from "../dataStore/userAccessContext";

const AuthCheckScreen = () => {
  const { onCheckLogin } = useContext(UserAccessContext);

  useEffect(() => {
    onCheckLogin();
  }, []);

  return null;
};

export default AuthCheckScreen;
