import { arrangeCoinsInRoll } from "../src/index"
import { coinsList, outputObj } from "../src/constants"

describe("Testing Arrange Coins", () => {
    test("it should return the result according to the outputObj", () => {
        // actual test
        expect(arrangeCoinsInRoll(coinsList)).toEqual(outputObj);
      });
});