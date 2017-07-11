// function does the work of counting and displaying to a certain number.
// variable i acts as an index that gets displayed as the counting number.
var countingUpDisplay = function(by, upto) {
  $("#count").text("");
  $("#ourCount").show();
  for (var i = by; i <= upto; i += by) {
    $("p").append("   " + i + "   ");
  }
};

var numberValidation = function(number) {
  if (isNaN(number)) {
    $("p#errortext").text("");
    $("p#errortext").text("This is not a number.  Try again.");
    $(".error").show();
    return false;
  }
  else if (number == 0) {
    $("p#errortext").text("");
    $("p#errortext").text("I love zeros!  But that doesn't help us here.");
    $(".error").show();
    return false;
  }
  else if (number < 0) {
    $("p#errortext").text("");
    $("p#errortext").text("Let's try to be positive here.");
    $(".error").show();
    return false;
  }
  else {
    return true;
  }
};

$(function() {
  $("#count-up-form").submit(function(event) {
    $("#ourCount").hide();
    $(".error").hide();
    event.preventDefault();
    var countByNumber = parseInt($("#countBy").val());
    var countUpToNumber = parseInt($("#countUp").val());

    var countByValidation = numberValidation(countByNumber);
    var countUpToValidation = numberValidation(countUpToNumber);

    if (countByValidation && countUpToValidation) {
      if (countByNumber < countUpToNumber) {
        countingUpDisplay(countByNumber, countUpToNumber);
      }
      else {
        $("p#errortext").text("");
        $("p#errortext").text("This count by number must be smaller than the count up to number.");
        $(".error").show();
      }
    }
  });
});
