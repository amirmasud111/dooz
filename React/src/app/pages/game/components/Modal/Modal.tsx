import classes from "./Modal.module.scss";
import { P1 } from "~/utils/players";
import { GamePageButtons } from "../GamePageButtons";
import { GameMode } from "~/utils/game-mode";

interface Props {
    winner: string;
    onRefresh: () => void;
    gameMode: GameMode;
}

export function Modal({ winner, onRefresh, gameMode }: Props) {
    return (
        <div className={classes.backDrop}>
            <div className={classes.main} >
                <div className={classes.container}>
                    <div className={classes.imageContainer}>
                        <img src={gameMode === GameMode.playerVsBot ? `static/images/${winner === P1 ? 'smile' : 'sad'}.svg` : `static/images/${winner === P1 ? 'Xmodal' : 'Omodal'}.svg`} alt="x" />
                    </div>
                    <div className={classes.winText}>{gameMode === GameMode.playerVsBot ? winner === P1 ? "you Won" : "you Lost" : `Player ${winner === P1 ? 1 : 2} Won!`}</div>
                    <div className={classes.footer}>
                        <GamePageButtons winner={winner} onRefresh={onRefresh} />
                    </div>
                </div>
            </div>
        </div>
    )
}
