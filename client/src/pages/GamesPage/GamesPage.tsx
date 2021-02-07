import { useParams } from 'react-router-dom';
import React from 'react';

import Game from './Game';
import GameList from './GameList';

const GamesPage = () => {
    const { id } = useParams();

    if (!id) {
        return <GameList />;
    }
    return <Game id={id} />;
};

export default GamesPage;
