import React from "react";
import "./cell.css"

export enum CellRenderOptions {
    empty = 0,
    X = 1,
    O = 2
}

export interface CellProps {
    render: CellRenderOptions;
}

export default function Cell({render}: CellProps) {
    let toRender;
    switch (render) {
        case CellRenderOptions.empty:
            toRender = <div className={"cell cell-empty"}>&nbsp;</div>;
            break;
        case CellRenderOptions.X:
            toRender = <div className={"cell cell-X"}>X</div>;
            break;
        case CellRenderOptions.O:
            toRender = <div className={"cell cell-O"}>O</div>;
            break;
    }
    return toRender;
}