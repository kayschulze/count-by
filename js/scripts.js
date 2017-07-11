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
    $("p").text("");
    $("p").append("<p class='text-danger'>This is not a number.  Try again.</p>");
    $(".error").show();
    return false;
  }
  else if (number == 0) {
    $("p").text("");
    $("p").append("<p class='text-danger'>I love zeros!  But that doesn't help us here.</p>");
    $(".error").show();
    return false;
  }
  else if (number < 0) {
    $("p").text("");
    $("p").append("<p class='text-danger'>Let's try to be positive here.</p>");
    $(".error").show();
    return false;
  }
  else {
    return true;
  }
};

$(function() {
  $("#count-up-form").submit(function(event) {
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
        $("p").text("");
        $("p").append("<p class='text-danger'>This count by number must be smaller than the count up to number.</p>");
        $(".error").show();
      }
    }
  });
});
