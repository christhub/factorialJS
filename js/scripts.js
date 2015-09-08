

///this is done with recursion.
var factorials = function(number) {
var result = 1;
  if (number === 0) {
    result;
  } else if (number > 0) {
    result = number * factorials(number - 1);
  } else {
    return "not a number";
  }
  return result;
};



// This is a way to do it without recursion.
// var factorials = function(number) {
//   var result = 1;
//   for (var i = 1; i <= number; i++) {
//      if (number === 0) {
//        result;
//      }
//      else if (number !== 0) {
//        result = i * result;
//      }
//   }
//
//   return result;
// };


$(document).ready(function(){

  $("form#numbers").submit(function(event) {
    var number = parseInt($("input#factorial_number").val());

    var result = factorials(number);
    $("#result").show(); //css

    $("#number").text(result); //
    event.preventDefault();


  });
});
