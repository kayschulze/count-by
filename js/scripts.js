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
    alert("This is not a number.  Try again.");
    return false;
  }
  else if (number == 0) {
    alert("I love zeros!  But that doesn't help us here.");
    return false;
  }
  else if (number < 0) {
    alert("Let's try to be positive here.");
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
        alert("This count by number must be smaller than the count up to number.")
      }
    }
  });
});
