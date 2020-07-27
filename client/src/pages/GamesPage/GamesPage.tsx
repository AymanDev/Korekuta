import React from 'react';
import { useParams } from 'react-router-dom';
import GameList from './GameList';
import Game from './Game';

const GamesPage = () => {
    const { id } = useParams();

    if (!id) {
        return <GameList />;
    }
    return <Game id={id} />;
};

export default GamesPage;
