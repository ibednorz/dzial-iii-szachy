import { QueensAttack } from "../queensAttack";
import { QueensPositions } from "../types/queensPositions";
import { SAME_POSITION_ERROR } from "../shared/errors";

describe("(5 points) - Throwing error while queens on the same position", () => {
  const expectedError = SAME_POSITION_ERROR;
  [
    {
      queens: { white: [4, 4], black: [4, 4] } as QueensPositions,
    },
    {
      queens: { white: [3, 2], black: [3, 2] } as QueensPositions,
    },
    {
      queens: { white: [7, 1], black: [7, 1] } as QueensPositions,
    },
    {
      queens: { white: [6, 5], black: [6, 5] } as QueensPositions,
    },
    {
      queens: { white: [4, 2], black: [4, 2] } as QueensPositions,
    },
  ].map((testCase) => {
    it(`[${testCase.queens.white}] / [${testCase.queens.black}] queens cannot be on the same position`, () => {
      expect(() => new QueensAttack(testCase.queens)).toThrowError(
        expectedError
      );
    });
  });
});
