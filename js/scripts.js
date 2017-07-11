// function does the work of counting and displaying to a certain number.
// variable i acts as an index that gets displayed as the counting number.
var countingUpDisplay = function(by, upto) {
  for (i = by, i < upto, i += by) {
    
  }
};

$(function() {
  $("count-up-form").submit(function(event) {
    var countByNumber = $("countBy").val();
    var countUpToNumber = $("countUp").val();

    countingUpDisplay(countByNumber, countUpToNumber);
  });
});
