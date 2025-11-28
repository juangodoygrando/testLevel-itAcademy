import { expect, describe, test } from "@jest/globals";
import { lottery } from "../scripts/lotteryLogic.js";

describe("lottery feature tests", () => {
  test("returns win when user number equals random number", () => {
    // Arrange
    let userInput = 7;
    let expected = {
      message: "Win",
      data: {
        userNumber: 7,
        randomNumber: 7,
      },
    };

    // Act
    let result = lottery(userInput, 7);

    // Assert
    expect(typeof result.data.userNumber).toBe("number");
    expect(result).toEqual(expected);
    expect(result.data.userNumber).toEqual(expected.data.randomNumber);
    expect(result.message).toBe("Win");
  });

  test("returns lose when user number is different from random number", () => {
    // Arrange
    let userInput = 4;
    let expected = {
      message: "Lost",
      data: {
        userNumber: userInput,
        randomNumber: 2,
      },
    };

    // Act
    let result = lottery(userInput, 2);

    // Assert
    expect(typeof result.data.userNumber).toBe("number");
    expect(result).toEqual(expected);
    expect(result.data.userNumber).not.toEqual(expected.data.randomNumber);
    expect(result.message).toBe("Lost");
  });

  test("returns error when input is not a number", () => {
    // Arrange
    let userInput = "Hola";
    let expected = { message: "error" };

    // Act
    let result = lottery(userInput);

    // Assert
    expect(typeof result).not.toBe("number");
    expect(result).toEqual(expected);
    expect(result).not.toHaveProperty("data");
    expect(result.message).toBe("error");
  });

  test("returns error when number is outside valid range", () => {
    let userInput = 20;
    let expected = { message: "error" };

    // Act
    let result = lottery(userInput);

    // Assert
    expect(result).not.toBeNull();
    expect(typeof result).toBe("object");
    expect(result).toEqual(expected);
    expect(result).not.toHaveProperty("data");
  });
});
