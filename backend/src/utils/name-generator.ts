const romanianFirstNames: string[] = [
  'Andrei',
  'Athina',
  'Darius',
  'Iasmina',
  'Vasile',
  'Roxana',
  'Vlad',
  'Doris',
  'Cristian',
  'Maria',
];
const brittishLastNames: string[] = [
  'Smith',
  'Jones',
  'Taylor',
  'Brown',
  'Williams',
  'Wilson',
  'Johnson',
  'Davies',
  'Wright',
  'Walker',
];

export const generateRandomFullName = (): string => {
  return `${
    romanianFirstNames[generateRandomInt(0, romanianFirstNames.length - 1)]
  } ${brittishLastNames[generateRandomInt(0, brittishLastNames.length - 1)]}`;
};

const generateRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
