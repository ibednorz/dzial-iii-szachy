import { QueensAttack } from "../queensAttack";

describe("(5 points) - Returning information that queens cannot attack", () => {
  [
    {
      queens: new QueensAttack({ white: [1, 7], black: [4, 5] }),
    },
    {
      queens: new QueensAttack({ white: [1, 2], black: [3, 6] }),
    },
    {
      queens: new QueensAttack({ white: [3, 2], black: [5, 6] }),
    },
    {
      queens: new QueensAttack({ white: [2, 6], black: [7, 2] }),
    },
    {
      queens: new QueensAttack({ white: [4, 2], black: [7, 1] }),
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] queens cannot attack each other`, () => {
      expect(testCase.queens.queenCanAttack()).toEqual(false);
    });
  });
});
