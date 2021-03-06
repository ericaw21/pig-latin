var vowel = ["a","e","i","o","u"];
for (var index = 0; index < vowel.length; index += 1);

var latin = function(word) {
  var firstletter = word.charAt(0);
  var secondletter = word.charAt(1);
  var thirdletter = word.charAt(2);
  var restofword1 = word.substring(1, word.length);
  var restofword2 = word.substring(2, word.length);
  var restofword3 = word.substring(3, word.length);
  //first statement - adds ay with words starting with a vowel
  if (firstletter === vowel[0] || firstletter === vowel[1] || firstletter === vowel[2] || firstletter === vowel[3] || firstletter === vowel[4]) {
  return word + "ay";
  //if the word starts with squ it will place the squ at the end of the word but before ay
  } else if ((firstletter === "s") && (secondletter === "q") && (thirdletter === "u")) {
  return restofword3 + firstletter + secondletter + "u" + "ay";
  // if the first two letters are both consenents, places ay at the end
  } else if ((firstletter != vowel[0] || firstletter != vowel[1] || firstletter != vowel[2] || firstletter != vowel[3] || firstletter != vowel[4]) && !(secondletter == vowel[0] || secondletter == vowel[1] || secondletter == vowel[2] || secondletter == vowel[3] || secondletter == vowel[4])) {
  return restofword2 + firstletter + secondletter + "ay";
  // if the word starts with qu it will place qu at the end of the word, but before ay
  } else if ((firstletter === "q") && (secondletter === "u")) {
  return restofword2 + firstletter + secondletter + "ay";
  // if all other statements are not true, this happens! yay!
  } else {
  return restofword1 + firstletter + "ay";
  }
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = latin(word);
    $(".word").text(word);
    $(".latin").text(result);

    $("#result").show();

  });
});
