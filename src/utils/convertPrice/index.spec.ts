import { describe, it, expect } from "vitest";
import { convertPrice } from ".";

describe("convertPrice Unit Test Suite", () => {
  it("should return a string", () => {
    expect(typeof convertPrice(18562.25)).toBe("string");
  });

  it("should be return 512.2", () => {
    expect(convertPrice(512.2)).toBe("512.20");
  });

  it("should be return 12,485.45", () => {
    expect(convertPrice(12485.45)).toBe("12,485.45");
  });

  it("should be return 123,456,789.00", () => {
    expect(convertPrice(123456789.0)).toBe("123,456,789.00");
  });
});
