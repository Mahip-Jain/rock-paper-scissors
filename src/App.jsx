import { useState } from "react";
import "./App.css";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissors.png";

function App() {
	const [playerSelected, setplayerSelected] = useState(-1);
	const [computerSelected, setComputerSelected] = useState(-1);
	function imgClick(imgNum) {
		setplayerSelected(imgNum);
		setComputerSelected(Math.ceil(Math.random() * 3));
	}
	return (
		<div className="App">
			<div className="game">
				<div>{}</div>
				<div className="player">
					{(playerSelected == 1 || playerSelected == -1) && (
						<img
							src={rockImg}
							alt=""
							onClick={() => {
								imgClick(1);
							}}
						/>
					)}
					{(playerSelected == 2 || playerSelected == -1) && (
						<img
							src={paperImg}
							alt=""
							onClick={() => {
								imgClick(2);
							}}
						/>
					)}
					{(playerSelected == 3 || playerSelected == -1) && (
						<img
							src={scissorsImg}
							alt=""
							onClick={() => {
								imgClick(3);
							}}
						/>
					)}
				</div>
				<div className="computer">
					{computerSelected == -1 && <h1>waiting for player...</h1>}
					{computerSelected == 1 && <img src={rockImg} alt="" />}
					{computerSelected == 2 && <img src={paperImg} alt="" />}
					{computerSelected == 3 && <img src={scissorsImg} alt="" />}
				</div>
				<button
					className="button"
					onClick={() => {
						setComputerSelected(-1);
						setplayerSelected(-1);
					}}
				>
					Play Again
				</button>
			</div>
		</div>
	);
}

export default App;
