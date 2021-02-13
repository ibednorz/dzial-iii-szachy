import { QueensAttack } from "../queensAttack";

describe("(5 points) - Initializing queens figures correctly", () => {
  [
    {
      queens: new QueensAttack({ white: [8, 8], black: [7, 7] }),
      expectedWhitePosition: [8, 8],
      expectedBlackPosition: [7, 7],
    },
    {
      queens: new QueensAttack({ white: [1, 2], black: [3, 5] }),
      expectedWhitePosition: [1, 2],
      expectedBlackPosition: [3, 5],
    },
    {
      queens: new QueensAttack({ white: [3, 2], black: [5, 7] }),
      expectedWhitePosition: [3, 2],
      expectedBlackPosition: [5, 7],
    },
    {
      queens: new QueensAttack({ white: [2, 7], black: [7, 2] }),
      expectedWhitePosition: [2, 7],
      expectedBlackPosition: [7, 2],
    },
    {
      queens: new QueensAttack({ white: [4, 1], black: [7, 1] }),
      expectedWhitePosition: [4, 1],
      expectedBlackPosition: [7, 1],
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] queens are initialized properly`, () => {
      expect(testCase.queens.white).toEqual(testCase.expectedWhitePosition);
      expect(testCase.queens.black).toEqual(testCase.expectedBlackPosition);
    });
  });
});
