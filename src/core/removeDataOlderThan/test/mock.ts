import { dateImp } from 'adapters';

const date = dateImp();

const tenMinutesLess = date().subtract(10, 'minute').valueOf();
const fiveMinutesLess = date().subtract(5, 'minute').valueOf();
const threeMinutesLess = date().subtract(3, 'minute').valueOf();
const oneMinutesLess = date().subtract(1, 'minute').valueOf();

export const chartData = [
  {
  },
  {
  },
  {
    1: 9,
    2: 4,
    timestamp: tenMinutesLess,
  },
  {
    1: 9,
    2: 4,
    timestamp: fiveMinutesLess,
  },
  {
    1: 2,
    2: 58,
    timestamp: threeMinutesLess,
  },
  {
    1: 2,
    2: 53,
    timestamp: threeMinutesLess,
  },
  {
    1: 4,
    timestamp: oneMinutesLess,
  },
];

export const filteredArray = [
  {
    1: 2,
    2: 58,
    timestamp: threeMinutesLess,
  },
  {
    1: 2,
    2: 53,
    timestamp: threeMinutesLess,
  },
  {
    1: 4,
    timestamp: oneMinutesLess,
  },
];
