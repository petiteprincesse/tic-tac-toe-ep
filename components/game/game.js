import { GameCell } from './GameCell';
import { GameInfo } from './GameInfo';
import styles from './game.module.css';
import { useGameState } from './useGameState';

export function Game() {
  const { cells, currentStep, winnerSymbol, isDraw, resetGame, toggleCell, getWinnerCell } =
    useGameState();

  return (
    <div className={styles.game}>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
      <div className={styles.gameField}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <button className={styles.reset} onClick={resetGame}>
        Сбросить
      </button>
    </div>
  );
}
