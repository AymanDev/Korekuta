import React from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/react-hooks";
import { GET_USERS, REGISTER_USER } from "../../utils/apollo/queries";

const IndexPage = () => {
  const [registerUser, mutationData] = useMutation(REGISTER_USER);

  const { loading, error, data, refetch } = useQuery(GET_USERS);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred</div>;
  }
  return (
    <div>
      <div>{data && JSON.stringify(data.getUsers, null, 2)}</div>
      <button onClick={() => refetch({ username: window["username"] })}>
        REFETCH
      </button>
    </div>
  );
};

export default IndexPage;
