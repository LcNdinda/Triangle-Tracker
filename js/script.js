var Tracker = function(sideA, sideB, sideC){

  if (sideA<=0 || sideB<=0 || sideC<=0) {
    alert("Length of sides cannot be equal to or less than zero");
  }
  else {
  alert("Enter another number");

  }


}

var length1 = prompt("Enter the length of First side");
var length2 = prompt("Enter the length of Second side");
var length3 = prompt("Enter the length of Third side");

var result = Tracker(length1, length2, length3);
