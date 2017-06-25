import MonoRepoError from "../src";

describe("MonoRepoError", () => {
  function throwError(msg, data) {
    throw new MonoRepoError(msg, data);
  }

  it("throws", async () => {
    expect(throwError).toThrowError(MonoRepoError);
  });
});
