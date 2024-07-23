/**
 * Toki are time intervals similar to hours. They contain the following:
 * strike: The number representing the interval, one from the set (4, 5, 6, 7, 8, 9)
 * numeral: The Japanese kanji for the strike
 * zodiacSymbol: The Japanese kanji for the corresponding zodiac sign
 * zodiacEmoji: An emoji representing the animal
 */
export interface Toki {
  strike: number;
  numeral: string;
  zodiacSymbol: string;
  zodiacEmoji: string;
}

/**
 * A Region represents either Day or Night, and is a series of "Toki"
 */
export type Region = Array<Toki>

/**
 * IUnfixedHours represents the "unfixed" time units of Japanese style clocks
 */
interface IUnfixedHours {
  day: Region;
  night: Region;
}

/**
 * An object representing the six day and six night "Toki"
 */
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
