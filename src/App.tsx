import React from 'react';
import './App.css';
import Game from "./features/game/Game";

function App() {
    return (<section className="App">
            <header className="flexible">
                <h1>Tic Tac Toe</h1>
            </header>
            <section className="flexible game-container">
                <Game/>
            </section>
        </section>

    );
}

export default App;
