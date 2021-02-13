import { QueensAttack } from "../queensAttack";

describe("(5 points) - Returning possibility of a diagonal attack by queens", () => {
  [
    {
      queens: new QueensAttack({ white: [0, 2], black: [5, 7] }),
    },
    {
      queens: new QueensAttack({ white: [1, 4], black: [4, 1] }),
    },
    {
      queens: new QueensAttack({ white: [4, 0], black: [7, 3] }),
    },
    {
      queens: new QueensAttack({ white: [5, 6], black: [4, 7] }),
    },
    {
      queens: new QueensAttack({ white: [7, 5], black: [2, 0] }),
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] queens can attack each other diagonally`, () => {
      expect(testCase.queens.queenCanAttack()).toEqual(true);
    });
  });
});
