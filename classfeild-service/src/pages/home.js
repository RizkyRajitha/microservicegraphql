import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import graphqlClient from "../components/api/graphqlclient";
// import Login from "./accountdetails/login/login";
import AccountDetails from "./accountdetails/accountdetails";
import Listings from "./accountdetails/listings/listings";
import { useDispatch } from "react-redux";
import { setSession } from "../store/ducks/session";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        name
      }
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    graphqlClient
      .query({ query })
      .then(({ data }) => {
        console.log(data);
        if (data.userSession) {
          dispatch(setSession(data.userSession));
        }
        setloading(true);
      })
      .catch(err => {
        console.log(err);
        setloading(true);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Listings />
        </Content>
        {loading ? (
          <Sidebar>
            <AccountDetails />
          </Sidebar>
        ) : (
          "loading..."
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
