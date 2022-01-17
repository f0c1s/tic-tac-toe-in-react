import React, {useState} from "react";
import "./game.css";
import Grid from "../grid/Grid";
import {CellRenderOptions} from "../cell/Cell";

export default function Game() {
    const rows: number = 3;
    const cols: number = 3;
    const initialGridState = Array(rows).fill(0)
        .map(_ => Array(cols).fill(0)
            .map(_ => CellRenderOptions.empty)
        );
    const [gridState, setGridState] = useState(initialGridState);
    const [turn, setTurn] = useState(CellRenderOptions.X);

    function toggleTurn() {
        if (turn === CellRenderOptions.X) {
            setTurn(CellRenderOptions.O);
        } else {
            setTurn(CellRenderOptions.X);
        }
    }

    function onEmptyCellClick(row: number, col: number) {
        console.log(row, col, turn);
        // generate new state
        const newGridState = gridState.map((values, rowIndex) => values.map((value, colIndex) => {
            return row === rowIndex && col === colIndex ? turn : value
        }))
        setGridState(newGridState)
        // finally toggle turn
        toggleTurn();
    }

    return <div className={"game"}>
        <Grid onEmptyCellClick={onEmptyCellClick} grid={gridState}/>
    </div>;
}
