import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_GAME } from '../../utils/apollo/queries';
import Loader from '../../components/Loader';

export interface GameProps {
    id: string;
}
const Game: React.FC<GameProps> = ({ id }) => {
    const { loading, error, data } = useQuery(GET_GAME, { variables: { id } });

    if (loading) {
        return <Loader loading={loading} />;
    }

    if (error) {
        return <div>error</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
};
export default Game;
