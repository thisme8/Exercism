export function answer(question : string): number {
  if (!question.startsWith("What is") || !question.endsWith("?")) {
    throw new Error("Unknown operation")
  }

  const body = question.slice(8, -1).trim()
  if (!body) throw new Error("Syntax error")

  const tokens = body
    .replace(/multiplied by/g, "multiplied_by")
    .replace(/divided by/g, "divided_by")
    .split(/\s+/)

  const operators: Record<string, (a: number, b: number) => number> = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiplied_by: (a, b) => a * b,
    divided_by: (a, b) => {
      if (b === 0) throw new Error("Syntax error")
      return a / b
    },
  }

  let expectNumber = true
  let result: number | null = null
  let currentOp: ((a: number, b: number) => number) | null = null

  for (const token of tokens) {
    if (expectNumber) {
      const value = Number(token)
      if (Number.isNaN(value)) {
        throw new Error("Syntax error")
      }
      if (result === null) {
        result = value
      } else if (currentOp) {
        result = currentOp(result, value)
        currentOp = null
      }
      expectNumber = false
    } else {
      if (token in operators) {
        if (currentOp) throw new Error("Syntax error") 
        currentOp = operators[token]
        expectNumber = true
      } else if (!Number.isNaN(Number(token))) {
       
        throw new Error("Syntax error")
      } else {
        
        throw new Error("Unknown operation")
      }
    }
  }

  if (expectNumber) throw new Error("Syntax error")
  if (result === null) throw new Error("Syntax error")

  return result
}
