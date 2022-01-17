import React, {useEffect, useState} from "react";
import "./game.css";
import Grid from "../grid/Grid";
import {CellRenderOptions} from "../cell/Cell";
import GameOver from "../gameover/GameOver";

export default function Game() {
    const rows: number = 3;
    const cols: number = 3;
    const initialGridState = Array(rows).fill(0)
        .map(_ => Array(cols).fill(0)
            .map(_ => CellRenderOptions.empty)
        );
    const [gridState, setGridState] = useState(initialGridState);
    const [turn, setTurn] = useState(CellRenderOptions.X);
    const [gameState, setGameState] = useState("running");

    function toggleTurn() {
        if (turn === CellRenderOptions.X) {
            setTurn(CellRenderOptions.O);
        } else {
            setTurn(CellRenderOptions.X);
        }
    }

    function isGameOver(array: CellRenderOptions[][]) {
        const row = (i: number) => [array[i][0], array[i][1], array[i][2]];
        const col = (i: number) => [array[0][i], array[1][i], array[2][i]];
        const diagonals = [[array[0][0], array[1][1], array[2][2]],
            [array[2][0], array[1][1], array[0][2]]];
        const values = [row(0), row(1), row(2), col(0), col(1), col(2), ...diagonals];
        return values.some(v => v.every(i => i === CellRenderOptions.X)) || values.some(v => v.every(i => i === CellRenderOptions.O));
    }

    useEffect(() => {
        // check game state
        const gameover = isGameOver(gridState);

        if (gameover) {
            setGameState("over");
        }
    }, [gridState]);

    function onEmptyCellClick(row: number, col: number) {
        // console.log(row, col, turn);

        if (gameState === "running") {
            // generate new state
            const newGridState = gridState.map((values, rowIndex) => values.map((value, colIndex) => {
                return row === rowIndex && col === colIndex ? turn : value;
            }));
            setGridState(newGridState);

            // finally toggle turn
            toggleTurn();
        }
    }

    function resetGame() {
        setGameState("running");
        setGridState(initialGridState);
    }

    return <div className={"game"}>
        <div className={"game-controls"}>
            <button type={"button"} onClick={() => resetGame()}>reset</button>
        </div>
        <Grid onEmptyCellClick={onEmptyCellClick} grid={gridState}/>
        {gameState === "over" && <GameOver turn={turn}/>}
    </div>;
}
