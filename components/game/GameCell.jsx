import { GameSymbol } from './GameSymbol';
import styles from './game.module.css';

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button className={`${styles.cell} ${isWinner ? styles.cellWin : ''}`} onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
