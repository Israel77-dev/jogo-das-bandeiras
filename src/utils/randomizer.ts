import { ArgumentError } from './errors';

export const randomBetween = (
  min: number,
  max: number,
  onlyIntegers?: boolean
): number =>
  onlyIntegers ?? true
    ? Math.floor(randomBetween(min, max, false))
    : (min ?? 0) + (max - (min ?? 0)) * Math.random();

export const shuffle = (target: any[]): void => {
  // Fisher-Yates algorithm
  for (let i = target.length - 1; i >= 1; i--) {
    const j = randomBetween(0, i);
    [target[i], target[j]] = [target[j], target[i]]; // Swap elements randomly
  }
};

export const sample = <T>(population: Iterable<T>, k: number): T[] => {
  if (!Number.isInteger(k) || k <= 0)
    throw new ArgumentError('Sample size must be a positive integer');

  const pool = [...population];
  const len = pool.length;

  if (len < k) throw new ArgumentError('Sample size bigger than population');

  const result: T[] = [];
  const setSize = 21;

  if (len <= setSize) {
    for (let i = 0; i < k; i++) {
      const j = randomBetween(0, len - i);
      result[i] = pool[j];
      pool[j] = pool[len - i - 1];
    }
  } else {
    const selected = new Set();

    for (let i = 0; i < k; i++) {
      var j = randomBetween(0, len);
      while (selected.has(j)) {
        j = randomBetween(0, len);
      }
      selected.add(j);
      result[i] = pool.at(j);
    }
  }

  return result;
};
