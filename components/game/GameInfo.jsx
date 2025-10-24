import { GameSymbol } from './GameSymbol';
import styles from './game.module.css';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className={styles.gameInfo}>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={styles.gameInfo}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={styles.gameInfo}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
