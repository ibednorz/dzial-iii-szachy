import { QueensAttack } from "../queensAttack";

describe("(5 points) - Returning possibility of a horizontal attack by queens", () => {
  [
    {
      queens: new QueensAttack({ white: [1, 7], black: [1, 5] }),
    },
    {
      queens: new QueensAttack({ white: [3, 2], black: [3, 6] }),
    },
    {
      queens: new QueensAttack({ white: [5, 2], black: [5, 6] }),
    },
    {
      queens: new QueensAttack({ white: [7, 6], black: [7, 2] }),
    },
    {
      queens: new QueensAttack({ white: [4, 2], black: [4, 1] }),
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] queens can attack each other horizontally`, () => {
      expect(testCase.queens.queenCanAttack()).toEqual(true);
    });
  });
});
