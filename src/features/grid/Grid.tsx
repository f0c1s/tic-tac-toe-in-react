import React from "react";
import "./grid.css";
import Cell, {CellRenderOptions} from "../cell/Cell";

interface GridProps {
    rows: number;
    cols: number;
    fillWith: CellRenderOptions;
}

export default function Grid({rows, cols, fillWith}: GridProps) {
    const grid = Array(rows)
        .fill(0)
        .map((_, r) =>
            Array(cols)
                .fill(0)
                .map((_, c) => {
                        return <div className={"grid-cell"} key={`grid-cell-${r}-${c}`}>
                            <Cell render={fillWith}/>
                        </div>;
                    }
                )
        );

    return (
        <div className={"grid-container"}>
            <div className={"grid"}>
                {grid}
            </div>
        </div>
    );
}
