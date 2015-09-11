var findAndReplace = function(theString, foundWord, replacementWord) {

  var stringWords = theString.split(" ");
  var result = [];
  
  stringWords.forEach(function(word) {
    if (word.toLowerCase() === foundWord.toLowerCase()) {
      result.push(replacementWord);
    } else {
      result.push(word);
    }
   });

  return result.join(" ");
};

  // var foundPush = [];
  // var foundLetters = foundWord.slice(1).split("");
  // foundLetters.forEach(function(letter) {
  //   var lowLetter = letter.toLowerCase();
  //   foundPush.push(lowLetter);
  // }); 
  // var formattedFoundWord = foundWord.charAt(0) + foundPush.join("");


  // var replacePush = [];
  // var replaceLetters = replacementWord.slice(1).split("");
  // replaceLetters.forEach(function(letter) {
  //   var lowReplace = letter.toLowerCase();
  //   replacePush.push(lowReplace);
  // });
  // var formattedReplaceWord = replacementWord.charAt(0) + replacePush.join("");
  

  // var lowerFoundWord = formattedFoundWord.toLowerCase();
  // var lowerReplacementWord = formattedReplaceWord.toLowerCase();

  // var upperFoundWord = formattedFoundWord.charAt(0).toUpperCase() + formattedFoundWord.slice(1);
  // var upperReplacementWord = formattedReplaceWord.charAt(0).toUpperCase() + formattedReplaceWord.slice(1);


  // if (theString.search(lowerFoundWord) >= 0) {
  //   return theString.replace(lowerFoundWord, lowerReplacementWord);
  // } else if (theString.search(upperFoundWord) >= 0) {
  //   return theString.replace(upperFoundWord, upperReplacementWord);
  // }

// };



$(document).ready(function(){
  $("form#find-replace").submit(function(event){
    $("#result").hide();
    var wordString= $("input#word-string").val();
    var foundWord = $("input#found-word").val();
    var replacementWord = $("input#replacement-word").val();
    var result = findAndReplace(wordString, foundWord, replacementWord);

   
    $(".new-string").text(result)
    $("#result").show();
   
    event.preventDefault();

  })
});



