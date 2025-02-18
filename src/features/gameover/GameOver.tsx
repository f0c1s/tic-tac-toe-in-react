import React from "react";
import { CellRenderOptions } from "../cell/Cell";

interface GameOverProps {
    turn: CellRenderOptions;
}

export default function GameOver({ turn }: GameOverProps) {
    return <div>Game Over! {turn === CellRenderOptions.X ? "O" : "X"} won</div>
}
