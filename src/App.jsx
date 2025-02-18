
import "./App.css";
import Game from "./features/game/Game";

function App() {
    return (<div className="app flex vflex">
        <h1>Tic Tac Toe</h1>
        <div className="flex">
            <Game />
        </div>
    </div>);
}

export default App;
