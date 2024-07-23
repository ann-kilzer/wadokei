import { FC } from 'react';

interface TickProps {
  symbol: string
  regionName?: string;
  width?: number;
  angle?: number;
  length?: number;
  emoji?: string;
  secondarySymbol?: string;
}

const Tick: FC<TickProps> = ({
  symbol,
  regionName = '',
  width = 3,
  angle = 0,
  length = 5,
  emoji = '',
  secondarySymbol = '',
}) => {
  return (
    <div
      className={`tokei_tick ${regionName}_tick`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      aria-label='tick'
    >
      <div
        className="tokei_tick_inner"
        style={{
          width: `${width}px`,
          top: 22,
          bottom: `${100 - length}%`,
        }}
      />
      {symbol && (
        <div
          className="tokei_tick_symbol"
        >
          {symbol}
        </div>
      )}
      {secondarySymbol && (
        <div
          className="tokei_tick_secondary_symbol"
        >
          {secondarySymbol}
        </div>
      )}
      {emoji && (
        <div
          className="tokei_tick_emoji"
        >
          {emoji}
        </div>
      )}
    </div>
  );
}

export default Tick
