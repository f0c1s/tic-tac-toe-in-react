import React from "react";
import {CellRenderOptions} from "../cell/Cell";

interface GameOverProps {
    turn: CellRenderOptions;
}

export default function GameOver({turn}: GameOverProps) {
    return <div className={"game-over"}>
        <h2>Game over</h2>
        <h3>{turn === CellRenderOptions.X ? "O" : "X"} won</h3>
    </div>;
}