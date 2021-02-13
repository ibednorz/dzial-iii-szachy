import { QueensPositions } from "./types/queensPositions";
import { SAME_POSITION_ERROR } from './shared/errors'

export class QueensAttack {
  public white: [number, number];
  public black: [number, number];
  constructor({white, black}:QueensPositions) {
    this.white = white
    this.black = black
    if(this.white[0]===this.black[0] && this.white[1]===this.black[1]){
      throw Error(SAME_POSITION_ERROR)
    } 
  }

  public representBoardAsString() {
    let board = [
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
      "_ _ _ _ _ _ _ _",
    ]
    board[this.white[0]] = this.replaceChar(board[this.white[0]], 'W', this.white[1]*2)
    board[this.black[0]] = this.replaceChar(board[this.black[0]], 'B', this.black[1]*2)
    return board.join("\n")
  }

  public queenCanAttack(): boolean {
    return (
      this.white[0] === this.black[0] ||
      this.white[1] === this.black[1] ||
      Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1])
    );
  }

  replaceChar(origString:string, replaceChar: string, index: number) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}
}

