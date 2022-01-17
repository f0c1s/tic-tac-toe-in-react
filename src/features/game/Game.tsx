import React from "react";
import "./game.css";
import Grid from "../grid/Grid";
import {CellRenderOptions} from "../cell/Cell";

export default function Game() {
    return <div className={"game"}>
        <Grid rows={3} cols={3} fillWith={CellRenderOptions.empty}/>
        <Grid rows={3} cols={3} fillWith={CellRenderOptions.X}/>
        <Grid rows={3} cols={3} fillWith={CellRenderOptions.O}/>
    </div>;
}
