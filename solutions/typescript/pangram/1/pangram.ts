export function isPangram(sentence: string): boolean {
  const lower = sentence.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every(letter => lower.includes(letter));
}


