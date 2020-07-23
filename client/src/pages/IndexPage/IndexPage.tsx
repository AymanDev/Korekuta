import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../utils/apollo/queries';

const IndexPage = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error occurred</div>;
    }
    return (
        <div>
            <div>{data && JSON.stringify(data.getUsers, null, 2)}</div>
        </div>
    );
};

export default IndexPage;
