import { describe, it, expect } from "vitest";
import setRating from "./setRating";

describe("SetRating function", () => {
  it("should return an array of 5 elements", () => {
    const rating = 3;
    const result = setRating(rating);

    expect(result).toHaveLength(5);
  });

  it("should return correct array for given rating value", () => {
    for (let rating = 0; rating <= 5; rating++) {
      const result = setRating(rating);

      const activePart = result.slice(0, rating);
      expect(activePart).toEqual(Array(rating).fill("active"));

      const inactivePart = result.slice(rating);
      expect(inactivePart).toEqual(Array(5 - rating).fill(""));
    }
  });
});
