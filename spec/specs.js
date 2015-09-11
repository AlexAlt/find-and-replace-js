describe('findAndReplace', function() {
  it('replaces a word within a string', function() {
    expect(findAndReplace("I love dogs", "dogs", "cats")).to.equal("I love cats");
  });

  // it('handles special cases where replacement words are uppercase', function() {
  //   expect(findAndReplace("I love dogs", "Dogs", "Cats")).to.equal("I love cats");
  // });

  // it('handles special cases where replacement words are lowercase', function() {
  //   expect(findAndReplace("I love Seattle", "seattle", "portland")).to.equal("I love Portland");
  // });

  // it('handles special cases where words have mis-matched cases', function() {
  //   expect(findAndReplace("I love Seattle", "Seattle", "portland")).to.equal("I love Portland");
  //   expect(findAndReplace("I love dogs", "dogs", "Cats")).to.equal("I love cats");
  // });

  it('handles special cases where words have mis-matched cases', function() {
    expect(findAndReplace("I love Seattle", "SeaTTle", "Portland")).to.equal("I love Portland");
  });

  // it('handles special cases where words have mis-matched cases', function() {
  //   expect(findAndReplace("I love Seattle", "SeaTTle", "PortLAnd")).to.equal("I love Portland");
  // });

  //  it('handles special cases where words have mis-matched cases', function() {
  //   expect(findAndReplace("I love Portland", "I", "you")).to.equal("You love Portland");
  // });

  it('handles special cases where words have mis-matched cases', function() {
    expect(findAndReplace("I lOvE pOOp", "poop", "caRDboard")).to.equal("I lOvE caRDboard");
  });

});