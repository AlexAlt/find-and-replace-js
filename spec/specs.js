describe('findAndReplace', function() {
  it('replaces a word within a string', function() {
    expect(findAndReplace("I love dogs", "dogs", "cats")).to.equal("I love cats");
  });
});