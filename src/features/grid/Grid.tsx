import React from "react";
import "./grid.css";
import Cell, {CellRenderOptions} from "../cell/Cell";

interface GridProps {
    onEmptyCellClick: Function;
    grid: any[]
}

export default function Grid({onEmptyCellClick, grid}: GridProps) {

    const renderGrid = grid
        .map((row, rowIndex) =>
            row.map((fillWith: CellRenderOptions, colIndex: number) => {
                        return <div className={"grid-cell"} key={`grid-cell-${rowIndex}-${colIndex}`}>
                            <Cell render={fillWith} onEmptyCellClick={() => onEmptyCellClick(rowIndex, colIndex)}/>
                        </div>;
                    }
                )
        );

    return (
        <div className={"grid-container"}>
            <div className={"grid"}>
                {renderGrid}
            </div>
        </div>
    );
}
