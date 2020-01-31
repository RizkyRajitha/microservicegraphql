import React, { Component } from "react";
import Login from "./login/login";
import { useSelector } from "react-redux";
import Account from "./account/account";
const AccountDetails = () => {
  const session = useSelector(state => state.session);

  if (session) {
    return <Account />;
  }

  return <Login />;
};
export default AccountDetails;
