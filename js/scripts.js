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
    alert("This is not a number.  Try again.")
  }
  else if (number == 0) {
    alert("I love zeros!  But that doesn't help us here.")
  }
  else if (number < 0) {
    alert("Let's try to be positive here.")
  }
};

$(function() {
  $("#count-up-form").submit(function(event) {
    event.preventDefault();
    var countByNumber = parseInt($("#countBy").val());
    var countUpToNumber = parseInt($("#countUp").val());

    numberValidation(countByNumber);
    numberValidation(countUpToNumber);

    countingUpDisplay(countByNumber, countUpToNumber);
  });
});
