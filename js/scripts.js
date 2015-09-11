var findAndReplace = function(theString, foundWord, replacementWord) {
  var lowerFoundWord = foundWord.toLowerCase();
  var lowerReplacementWord = replacementWord.toLowerCase();

  var upperFoundWord = foundWord.charAt(0).toUpperCase() + foundWord.slice(1);
  var upperReplacementWord = replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1);

  if (theString.search(lowerFoundWord) >= 0) {
    return theString.replace(lowerFoundWord, lowerReplacementWord);
  } else if (theString.search(upperFoundWord) >= 0) {
    return theString.replace(upperFoundWord, upperReplacementWord);
  }

};