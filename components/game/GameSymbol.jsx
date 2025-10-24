import { SYMBOL_O, SYMBOL_X } from './constants';
import styles from './game.module.css';

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return styles.symbolO;
    if (symbol === SYMBOL_X) return styles.symbolX;
    return '';
  };
  return <span className={`${styles.symbol} ${getSymbolClassName(symbol)}`}>{symbol}</span>;
}
