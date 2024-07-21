import { useState } from "react";
import "./App.css";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissors.png";

function App() {
	const [playerSelected, setplayerSelected] = useState(-1);
	const [computerSelected, setComputerSelected] = useState(-1);
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [winner, setWinner] = useState(-1);
	function imgClick(imgNum) {
		setplayerSelected(imgNum);
		var computer = Math.ceil(Math.random() * 3);
		setComputerSelected(computer);
		if (
			(computer == 1 && imgNum == 3) ||
			(computer == 2 && imgNum == 1) ||
			(computer == 3 && imgNum == 2)
		) {
			setComputerScore(computerScore + 1);
			setWinner(2);
		} else if (computer == imgNum) {
			setWinner(0);
		} else {
			setPlayerScore(playerScore + 1);
			setWinner(1);
		}
	}
	return (
		<div className="App">
			<div className="score">
				<h2>Player Score: {playerScore}</h2>
				<h2>Computer Score: {computerScore}</h2>
			</div>
			{winner == 0 && <h1>{"It's a tie"}</h1>}
			{winner == 1 && <h1>You win!</h1>}
			{winner == 2 && <h1>You lose!</h1>}
			<div className="game">
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
					{computerSelected == -1 && (
						<div className="lds-ripple">
							<div></div>
							<div></div>
						</div>
					)}
					{computerSelected == 1 && <img src={rockImg} alt="" />}
					{computerSelected == 2 && <img src={paperImg} alt="" />}
					{computerSelected == 3 && <img src={scissorsImg} alt="" />}
				</div>
				<button
					className="button"
					onClick={() => {
						setComputerSelected(-1);
						setplayerSelected(-1);
						setWinner(-1);
					}}
				>
					Play Again
				</button>
			</div>
		</div>
	);
}

export default App;
