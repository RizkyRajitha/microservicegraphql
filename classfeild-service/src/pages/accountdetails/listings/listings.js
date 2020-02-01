import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Addlistings from "./addlisting/addlisting";

const query = gql`
  {
    listings {
      description
      id
      title
    }
  }
`;

const Listings = () => {
  const { data, loading, refetch } = useQuery(query);

  if (loading) {
    return <h1>loading...</h1>;
  }

  console.log(data);
  return (
    <div>
      <h1> Listings </h1>
      {data.listings.map((ele, index) => {
        return (
          <div>
            <h4>{ele.title}</h4>
            <p>{ele.description}</p>
          </div>
        );
      })}

      <div>
        <Addlistings onAdd={() => refetch()} />
      </div>
    </div>
  );
};
export default Listings;
