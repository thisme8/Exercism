export class Robot {
  private static usedNames: Set<string> = new Set()
  private _name: string | null = null

  constructor() {}

  public get name(): string {
    if (!this._name) {
      this._name = this.generateUniqueName()
      Robot.usedNames.add(this._name)
    }
    return this._name
  }

  public resetName(): void {
    this._name = null
  }

  public static releaseNames(): void {
    Robot.usedNames.clear()
  }

  private generateUniqueName(): string {
    let name: string
    do {
      name = this.randomLetters(2) + this.randomDigits(3)
    } while (Robot.usedNames.has(name))
    return name
  }

  private randomLetters(length: number): string {
    let result = ''
    for (let i = 0; i < length; i++) {
      const code = Math.floor(Math.random() * 26) + 65 // ASCII A-Z
      result += String.fromCharCode(code)
    }
    return result
  }

  private randomDigits(length: number): string {
    let result = ''
    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 10)
      result += digit.toString()
    }
    return result
  }
}
