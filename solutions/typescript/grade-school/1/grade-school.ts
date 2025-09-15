export class GradeSchool {
  private _roster: { [grade: string]: string[] } = {}
  private _studentGrade: { [student: string]: string } = {}

  add(student: string, grade: number): void {
    const gradeStr = grade.toString()
    if (this._studentGrade[student]) {
      const prevGrade = this._studentGrade[student]
      this._roster[prevGrade] = this._roster[prevGrade].filter(s => s !== student)
    }
    if (!this._roster[gradeStr]) this._roster[gradeStr] = []
    if (!this._roster[gradeStr].includes(student)) {
      this._roster[gradeStr].push(student)
    }
    this._studentGrade[student] = gradeStr
  }

  grade(grade: number): string[] {
    const gradeStr = grade.toString()
    if (!this._roster[gradeStr]) return []
    return this._roster[gradeStr].slice().sort()
  }

  roster(): { [grade: string]: string[] } {
    const result: { [grade: string]: string[] } = {}
    Object.keys(this._roster)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach(g => {
        if (this._roster[g].length > 0) result[g] = this._roster[g].slice().sort()
      })
    return result
  }
}
