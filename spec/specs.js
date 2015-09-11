describe('findAndReplace', function() {
  it('replaces a word within a string', function(){
    expect(findAndReplace("dogs", "cats").to.equal("cats"))
  });
});