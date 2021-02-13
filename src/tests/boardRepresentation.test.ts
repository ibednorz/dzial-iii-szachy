import { QueensAttack } from "../queensAttack";

describe("(5 points) - Returning queens representation on the board", () => {
  [
    {
      queens: new QueensAttack({ white: [2, 4], black: [6, 6] }),
      board: [
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ W _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ B _",
        "_ _ _ _ _ _ _ _",
      ].join("\n"),
    },
    {
      queens: new QueensAttack({ white: [5, 2], black: [7, 6] }),
      board: [
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ W _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ B _",
      ].join("\n"),
    },
    {
      queens: new QueensAttack({ white: [1, 5], black: [6, 5] }),
      board: [
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ W _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ B _ _",
        "_ _ _ _ _ _ _ _",
      ].join("\n"),
    },
    {
      queens: new QueensAttack({ white: [4, 4], black: [4, 6] }),
      board: [
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ W _ B _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
      ].join("\n"),
    },
    {
      queens: new QueensAttack({ white: [2, 2], black: [6, 6] }),
      board: [
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ W _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ _ _",
        "_ _ _ _ _ _ B _",
        "_ _ _ _ _ _ _ _",
      ].join("\n"),
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] represented on board \n${testCase.board}`, () => {
      expect(testCase.queens.representBoardAsString()).toEqual(testCase.board);
    });
  });
});
