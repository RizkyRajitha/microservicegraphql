import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { clearSession } from "../../../store/ducks/session";

const wrapper = styled.div`
  color: ${props => props.theme.motar};
  font-size: 0.9rem;
`;

const mutation = gql`
mutation($sessionId:ID!){
    deleteUserSession(sessionId:$sessionId) 
  }
`;

const Account = () => {
  const session = useSelector(state => state.session);
  const [deleteUserSession] = useMutation(mutation);
  const dispatch = useDispatch()

  const logout = () => {
     dispatch(clearSession()) 
    deleteUserSession({ variables: { sessionId: session.id } });
  };

  return (
    <wrapper>
      logged in as {session.user.name}{" "}
      <button onClick={() => logout()}> Logout </button>{" "}
    </wrapper>
  );
};

export default Account;
