export interface Toki {
  strike: number;
  numeral: string;
  zodiacSymbol: string;
  zodiacEmoji: string;
}

export type Region = Array<Toki>

interface IUnfixedHours {
  day: Region;
  night: Region;
}

const UnfixedHours = {
  day: [
    {
      strike: 6,
      numeral: '六',
      zodiacSymbol: '卯',
      zodiacEmoji: '🐰',
    },
    {
      strike: 5,
      numeral: '五',
      zodiacSymbol: '辰',
      zodiacEmoji: '🐲',
    },
    {
      strike: 4,
      numeral: '四',
      zodiacSymbol: '巳',
      zodiacEmoji: '🐍',
    },
    {
      strike: 9,
      numeral: '九',
      zodiacSymbol: '午',
      zodiacEmoji: '🐴',
    },
    {
      strike: 8,
      numeral: '八',
      zodiacSymbol: '未',
      zodiacEmoji: '🐐',
    },
    {
      strike: 7,
      numeral: '七',
      zodiacSymbol: '申',
      zodiacEmoji: '🐵',
    },
  ],
  night: [
    {
      strike: 6,
      numeral: '六',
      zodiacSymbol: '酉',
      zodiacEmoji: '🐓',
    },
    {
      strike: 5,
      numeral: '五',
      zodiacSymbol: '戌',
      zodiacEmoji: '🐕',
    },
    {
      strike: 4,
      numeral: '四',
      zodiacSymbol: '亥',
      zodiacEmoji: '🐷',
    },
    {
      strike: 9,
      numeral: '九',
      zodiacSymbol: '子',
      zodiacEmoji: '🐀',
    },
    {
      strike: 8,
      numeral: '八',
      zodiacSymbol: '丑',
      zodiacEmoji: '🐂',
    },
    {
      strike: 7,
      numeral: '七',
      zodiacSymbol: '寅',
      zodiacEmoji: '🐅',
    },
  ],
} as IUnfixedHours;

export default UnfixedHours;
