import { QueensAttack } from "../queensAttack";

describe("(5 points) - Returning possibility of a vertical attack by queens", () => {
  [
    {
      queens: new QueensAttack({ white: [1, 7], black: [4, 7] }),
    },
    {
      queens: new QueensAttack({ white: [1, 3], black: [3, 3] }),
    },
    {
      queens: new QueensAttack({ white: [3, 2], black: [5, 2] }),
    },
    {
      queens: new QueensAttack({ white: [2, 6], black: [7, 6] }),
    },
    {
      queens: new QueensAttack({ white: [4, 1], black: [7, 1] }),
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] queens can attack each other vertically`, () => {
      expect(testCase.queens.queenCanAttack()).toEqual(true);
    });
  });
});
