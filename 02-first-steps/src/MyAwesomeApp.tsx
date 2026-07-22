import type { CSSProperties } from "react";

export const MyAwesomeApp =() =>{

    const firstName = 'Walter';
    const lastName = 'Valladares';

    const favoriteGames = ['Elder Ring', 'Smash'];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canada',
    };

    const myStyles: CSSProperties = {
        backgroundColor: '#ec6f6fff',
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
    };

    return(
        <div data-testid="div-app">
        <h1 data-testid="fist-name-title">{firstName}</h1>
        <h3>{lastName}</h3>

        <p>{favoriteGames.join(', ')}</p>
        <p>{2 + 3}</p>

        <h1>{isActive ? 'Activo' : 'No activo'}</h1>
        <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    );
};
