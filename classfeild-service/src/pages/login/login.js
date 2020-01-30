import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
import styled from "styled-components";

import TextInput from "#root/components/shared/TextInput";
// import { setSession } from "#root/store/ducks/session";

const Label = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const LoginButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const OrSignUp = styled.span`
  font-size: 0.9rem;
`;

const mutation = gql`
mutation($email:String!,$password:String!){
  createUserSession(email:$email , password:$password){
    id
    user{
      email
      id
    }
  }
}
`

// const Login = ({ onChangeToSignUp: pushChangeToSignUp }) => {
const Login = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="email"
          type="email"
          ref={register}
        ></TextInput>
        <LabelText>Password</LabelText>

        <TextInput
          disabled={isSubmitting}
          name="password"
          type="password"
          ref={register}
        ></TextInput>
<LoginButton type='submit' disabled={isSubmitting} >Login</LoginButton>
      </Label>
    </form>
  );
};

export default Login;
