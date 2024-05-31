import { describe, it, expect } from "vitest";
import { convertDate } from ".";

describe("convertDate Unit Test Suite", () => {
  it("should return a string", () => {
    expect(typeof convertDate("2021-02-10")).toBe("string");
  });

  it("should return 8 Jan 2024", () => {
    expect(convertDate("2024-01-08")).toBe("8 Jan 2024");
  });

  it("should return 8 Feb 2024", () => {
    expect(convertDate("2024-02-08")).toBe("8 Feb 2024");
  });

  it("should return 8 Mar 2024", () => {
    expect(convertDate("2024-03-08")).toBe("8 Mar 2024");
  });

  it("should return 8 Apr 2024", () => {
    expect(convertDate("2024-04-08")).toBe("8 Apr 2024");
  });

  it("should return 8 May 2024", () => {
    expect(convertDate("2024-05-08")).toBe("8 May 2024");
  });

  it("should return 8 Jun 2024", () => {
    expect(convertDate("2024-06-08")).toBe("8 Jun 2024");
  });

  it("should return 8 Jul 2024", () => {
    expect(convertDate("2024-07-08")).toBe("8 Jul 2024");
  });

  it("should return 8 Aug 2024", () => {
    expect(convertDate("2024-08-08")).toBe("8 Aug 2024");
  });

  it("should return 8 Sep 2024", () => {
    expect(convertDate("2024-09-08")).toBe("8 Sep 2024");
  });

  it("should return 8 Oct 2024", () => {
    expect(convertDate("2024-10-08")).toBe("8 Oct 2024");
  });

  it("should return 8 Nov 2024", () => {
    expect(convertDate("2024-11-08")).toBe("8 Nov 2024");
  });

  it("should return 8 Dec 2024", () => {
    expect(convertDate("2024-12-08")).toBe("8 Dec 2024");
  });
});
