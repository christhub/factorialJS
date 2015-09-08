// var factorial = function(number) {
//   var result = 1;
//     if (number > 0) {
//         result = number * result;
//         factorial(number - 1);
//       }
//     else if (number === 0) {
//       return result;
//     }
//     else {
//       return result;
//     }
// };


var factorials = function(number) {
  var result = 1;
  for (var i = 1; i <= number; i++) {
     if (number === 0) {
       result;
     }
     else if (number !== 0) {
       result = i * result;
     }
  }

  return result;
};


$(document).ready(function(){

  $("form#numbers").submit(function(event) {
    var number = parseInt($("input#factorial_number").val());

    var result = factorials(number);
    $("#result").show(); //css

    $("#number").text(result); //
    event.preventDefault();


  });
});
