export class Rational {
  numerator: number
  denominator: number

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) throw new Error('Denominator cannot be zero')
    this.numerator = numerator
    this.denominator = denominator
    this.reduce()
  }

  private static gcd(a: number, b: number): number {
    a = Math.abs(a)
    b = Math.abs(b)
    while (b !== 0) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  }

  private normalize(): void {
    if (this.denominator < 0) {
      this.numerator *= -1
      this.denominator *= -1
    }
  }

  public reduce(): Rational {
    if (this.numerator === 0) {
      this.denominator = 1
      return this
    }
    const divisor = Rational.gcd(this.numerator, this.denominator)
    this.numerator /= divisor
    this.denominator /= divisor
    this.normalize()
    return this
  }

  public add(other: Rational): Rational {
    const num = this.numerator * other.denominator + other.numerator * this.denominator
    const den = this.denominator * other.denominator
    return new Rational(num, den)
  }

  public sub(other: Rational): Rational {
    const num = this.numerator * other.denominator - other.numerator * this.denominator
    const den = this.denominator * other.denominator
    return new Rational(num, den)
  }

  public mul(other: Rational): Rational {
    const num = this.numerator * other.numerator
    const den = this.denominator * other.denominator
    return new Rational(num, den)
  }

  public div(other: Rational): Rational {
    if (other.numerator === 0) throw new Error('Division by zero')
    const num = this.numerator * other.denominator
    const den = this.denominator * other.numerator
    return new Rational(num, den)
  }

  public abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  public exprational(exp: number): Rational {
    if (exp === 0) return new Rational(1, 1)
    if (exp > 0) {
      return new Rational(
        Math.pow(this.numerator, exp),
        Math.pow(this.denominator, exp)
      ).reduce()
    } else {
      const m = Math.abs(exp)
      return new Rational(
        Math.pow(this.denominator, m),
        Math.pow(this.numerator, m)
      ).reduce()
    }
  }

  public expreal(base: number): number {
    return Math.pow(base, this.numerator / this.denominator)
  }
}
