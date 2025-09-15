export class Clock {
  private totalMinutes: number

  constructor(hour: number, minute = 0) {
    this.totalMinutes = ((hour * 60 + minute) % 1440 + 1440) % 1440
  }

  private format(): string {
    const h = Math.floor(this.totalMinutes / 60)
    const m = this.totalMinutes % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  }

  public toString(): string {
    return this.format()
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes - minutes)
  }

  public equals(other: Clock): boolean {
    return this.totalMinutes === other.totalMinutes
  }
}
