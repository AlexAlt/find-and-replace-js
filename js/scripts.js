var findAndReplace = function(theString, foundWord, replacementWord) {
  var foundPush = [];

  var foundLetters = foundWord.slice(1).split("");
  foundLetters.forEach(function(letter) {
    var lowLetter = letter.toLowerCase();
    foundPush.push(lowLetter);
  }); 
  var formattedFoundWord = foundWord.charAt(0) + foundPush.join("");

  var replacePush = [];

  var replaceLetters = replacementWord.slice(1).split("");
  replaceLetters.forEach(function(letter) {
    var lowReplace = letter.toLowerCase();
    replacePush.push(lowReplace);
  });
  var formattedReplaceWord = replacementWord.charAt(0) + replacePush.join("");
  

  var lowerFoundWord = formattedFoundWord.toLowerCase();
  var lowerReplacementWord = formattedReplaceWord.toLowerCase();

  var upperFoundWord = formattedFoundWord.charAt(0).toUpperCase() + formattedFoundWord.slice(1);
  var upperReplacementWord = formattedReplaceWord.charAt(0).toUpperCase() + formattedReplaceWord.slice(1);


  if (theString.search(lowerFoundWord) >= 0) {
    return theString.replace(lowerFoundWord, lowerReplacementWord);
  } else if (theString.search(upperFoundWord) >= 0) {
    return theString.replace(upperFoundWord, upperReplacementWord);
  }

};