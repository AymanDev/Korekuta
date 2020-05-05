import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../../utils/apollo/queries";

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.error("graphql", loading, error, data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred</div>;
  }
  return <div>{JSON.stringify(data.getUsers)}</div>;
};

export default IndexPage;
