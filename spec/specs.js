describe('findAndReplace', function() {
  it('replaces a word within a string', function() {
    expect(findAndReplace("I love dogs", "dogs", "cats")).to.equal("I love cats");
  });

  it('handles special cases where words have mis-matched cases', function() {
    expect(findAndReplace("I love Seattle", "SeaTTle", "Portland")).to.equal("I love Portland");
  });

  it('handles special cases where words have mis-matched cases', function() {
    expect(findAndReplace("I lOvE pOOp", "poop", "caRDboard")).to.equal("I lOvE caRDboard");
  });

});