import { P1, P2 } from "~/utils/players";
import classes from "./Header.module.scss";
import { GameMode } from "~/utils/game-mode";

interface Props {
  currentPlayer: string;
  gameMode: GameMode;
}

export function Header({ currentPlayer, gameMode }: Props) {

  return (
    <>
      <div className={`${classes.player1} ${currentPlayer === P1 ? classes.current : ''}`}>
        <img src="static/images/current_1.svg" alt="Player 1 Turn" className={classes.currentImg} />
        <div className={classes.playerContainer}>
          <img src="static/images/player.svg" alt="Player 1" />
          <div className={classes.playerTitle}>{gameMode === GameMode.playerVsBot ? "You" : "player 1"}</div>
          <img src="static/images/player1.svg" alt="X" />
        </div>
      </div>

      <div className={classes.vs}>VS</div>

      <div className={`${classes.player2} ${currentPlayer === P2 ? classes.current : ''}`}>
        <img src="static/images/current_2.svg" alt="Player 2 Turn" className={classes.currentImg} />
        <div className={classes.playerContainer}>
          <img src={`static/images/${gameMode === GameMode.playerVsBot ? "botheader" : "player"}.svg`} alt="Player 2" />
          <div className={classes.playerTitle}>{gameMode === GameMode.playerVsBot ? "Bot" : "player 2"}</div>
          <img src="static/images/player2.svg" alt="O" />
        </div>
      </div>
    </>
  );
}
