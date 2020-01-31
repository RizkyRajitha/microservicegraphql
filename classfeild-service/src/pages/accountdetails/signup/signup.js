import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as yup from "yup";

import TextInput from "#root/components/shared/TextInput";
import { setSession } from "#root/store/ducks/session";

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
  mutation($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      id
    }
  }
`;

const validation = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .test("samepass", "password not same", function() {
      return this.parent.password === this.parent.confirmpassword;
    })
});

// const Login = ({ onChangeToSignUp: pushChangeToSignUp }) => {
const Signup = props => {
  const dispatch = useDispatch();
  const [createUser] = useMutation(mutation);

  const {
    formState: { isValid, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm({ mode: "onChange", validationSchema: validation });

  const onSubmit = handleSubmit(async ({ email, password, name }) => {
    const res = await createUser({ variables: { email, password, name } });
    console.log(res);
    reset();
    props.switch();
    // dispatch(setSession(createdSession));
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="email"
          type="email"
          ref={register}
        ></TextInput>

        <LabelText>Name</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="name"
          type="name"
          ref={register}
        ></TextInput>
        <LabelText>Password</LabelText>

        <TextInput
          disabled={isSubmitting}
          name="password"
          type="password"
          ref={register}
        ></TextInput>
        <LabelText>confirm password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="confirmpassword"
          type="password"
          ref={register}
        ></TextInput>

        <LoginButton type="submit" disabled={isSubmitting || !isValid}>
          Signup
        </LoginButton>
      </Label>

      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          props.switch();
        }}
      >
        {" "}
        switch login
      </a>
    </form>
  );
};

export default Signup;
