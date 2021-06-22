import { Mood } from '../enums/mood';

const AESTHETIC_OFFSET = 0.015;

export const getIndexForMood = (mood: Mood): number => {
  switch (mood) {
    case Mood.HAPPY:
      return 2 - AESTHETIC_OFFSET;
    case Mood.OKAY:
      return 1;
    case Mood.SAD:
      return 0 + AESTHETIC_OFFSET;
    default:
      return 0;
  }
};

export const getMoodFromIndex = (index: number): string => {
  switch (index) {
    case 2:
      return 'Happy';
    case 1:
      return 'Okay';
    case 0:
      return 'Sad';
    default:
      return '-';
  }
};
