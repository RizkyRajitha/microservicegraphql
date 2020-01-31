import React, { useState } from "react";
import Login from "./login/login";
import { useSelector } from "react-redux";
import Account from "./account/account";
import Signup from "./signup/signup";
const AccountDetails = () => {
  const session = useSelector(state => state.session);

  const [signup, setsignup] = useState(false);

  const pushsignup = () => {
    console.log("push signup");
    setsignup(!signup);
  };

  if (session) {
    return <Account />;
  }

  return signup ? (
    <Signup switch={pushsignup} />
  ) : (
    <Login switch={pushsignup} />
  );
};
export default AccountDetails;
