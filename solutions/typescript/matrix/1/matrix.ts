export class Matrix {
  private _rows: number[][];

  constructor(input: string) {
    this._rows = input
      .split("\n")                          
      .map(row => row
        .trim()
        .split(/\s+/)                       
        .map(Number)                        
      );
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._rows[0].map((_, colIndex) =>
      this._rows.map(row => row[colIndex])
    );
  }
}
