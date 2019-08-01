const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("siam", (err, desc) => {
      
      assert.equal(err, null);
      
      const expectedDesc = "While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.";
      assert.equal(expectedDesc, desc);
      
      done();
    });
  });

  it("returns an error when the breed is invalid", (done) => {
    fetchBreedDescription("fail", (err, desc) => {

      assert.equal(err, null);
      
      const expectedDesc = "Breed fail not found.";
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});