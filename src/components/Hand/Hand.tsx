import { FC } from 'react';

interface HandProps {
  name: string;
  angle?: number;
  length?: number;
  width?: number;
  oppositeLength?: number;
}

const Hand: FC<HandProps> = ({
  name,
  angle = 0,
  length = 95,
  width = 3,
  oppositeLength = 10,
})=> {
  return (
    <div
      className={`outer_hand ${name}_hand`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={`inner_hand ${name}_hand`}
        style={{
          width: `${width}px`,
          top: `${50 - (length / 2)}%`,
          bottom: `${50 - (oppositeLength / 2)}%`,
        }}
      />
    </div>
  );
}

export default Hand;