export function isPangram(sentence: string): boolean { 
  const lower = sentence.toLowerCase();
  const letters = new Set<string>();
  for (const char of lower) {
    if (char >= 'a' && char <= 'z') {
      letters.add(char);
    }
  }
  return letters.size === 26;
}
