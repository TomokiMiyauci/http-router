import {
  assert as $assert,
  assertEquals,
  assertThrows,
  describe,
  it,
} from "./_dev_deps.ts";
import { assert, matchMethod } from "./utils.ts";

describe("assert", () => {
  it("should not throw error when the input is truthy", () => {
    assert(" ");
    assert("0");
  });

  it("should throw error when the input is falsy", () => {
    assertThrows(() => assert(0));
    assertThrows(() => assert(""));
  });
});

describe("matchMethod", () => {
  it("should match when the input is empty list", () => {
    $assert(matchMethod([], "GET"));
  });

  it("should match when the input includes method", () => {
    $assert(matchMethod(["POST", "GET"], "GET"));
  });

  it("should not match when the input does not include method", () => {
    assertEquals(matchMethod(["POST", "GET"], "ANY"), false);
  });

  it("should match when the input and method is same", () => {
    $assert(matchMethod("GET", "GET"));
  });

  it("should match when the input and method is not same", () => {
    assertEquals(matchMethod("get", "GET"), false);
  });
});
