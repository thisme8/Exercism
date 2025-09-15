export const count = (input: string): Map<string, number> => {
  const wordCounts = new Map<string, number>()

  const lower = input.toLowerCase()

 
  const words = lower.match(/\b[\w']+\b/g)
  if (!words) return wordCounts

  for (const word of words) {
    
    const cleanWord = word.replace(/^'+|'+$/g, '')
    if (!cleanWord) continue

    wordCounts.set(cleanWord, (wordCounts.get(cleanWord) ?? 0) + 1)
  }

  return wordCounts
}
