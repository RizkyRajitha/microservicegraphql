import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../components/shared/TextInput";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useSelector } from "react-redux";

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

const mutation = gql`
  mutation($title: String!, $description: String!) {
    createListing(title: $title, description: $description) {
      id
    }
  }
`;

const Addlisting = props => {
  const session = useSelector(state => state.session);

  const [createListing] = useMutation(mutation);

  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();

  const onSubmit = handleSubmit(async ({ title, description }) => {
    console.log(title, description);

    var {
      data: { createListing: createdListing }
    } = await createListing({ variables: { title, description } });

    props.onAdd();
    console.log(createdListing);
  });

  if (!session) return <h1>Login to add Listing</h1>;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>
          <LabelText>title</LabelText>
          <TextInput
            disabled={isSubmitting}
            name="title"
            type="text"
            ref={register}
          ></TextInput>
          <LabelText>description</LabelText>

          <TextInput
            disabled={isSubmitting}
            name="description"
            type="text"
            ref={register}
          ></TextInput>
          <LoginButton type="submit" disabled={isSubmitting}>
            add
          </LoginButton>
        </Label>
      </form>
    </div>
  );
};
export default Addlisting;
