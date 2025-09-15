export function commands(n: number): string[] {
  const actions = ['wink', 'double blink', 'close your eyes', 'jump']
  const result: string[] = []

  for (let i = 0; i < 4; i++) {
    if ((n & (1 << i)) !== 0) {
      result.push(actions[i])
    }
  }

  if ((n & (1 << 4)) !== 0) {
    result.reverse()
  }

  return result
}
