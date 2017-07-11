// function does the work of counting and displaying to a certain number.
// variable i acts as an index that gets displayed as the counting number.
var countingUpDisplay = function(by, upto) {
  $("#ourCount").show();
  
  for (i = by; i < upto; i += by) {
    $("p").append(" " + i + " ");
    alert(i);
  }
};

$(function() {
  $("#count-up-form").submit(function(event) {
    event.preventDefault();
    var countByNumber = $("#countBy").val();
    var countUpToNumber = $("#countUp").val();

    console.log(countByNumber, countUpToNumber);
    countingUpDisplay(countByNumber, countUpToNumber);
  });
});
