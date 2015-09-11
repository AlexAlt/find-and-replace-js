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



