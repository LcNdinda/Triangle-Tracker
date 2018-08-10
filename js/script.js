var Tracker = function(sideA, sideB, sideC){
  if (sideA == "" || sideB == "" || sideC == "") {
    alert("The side of a Triangle cannot be empty")
  }

  else if (sideA<=0 || sideB<=0 || sideC<=0) {
    alert("Length of sides cannot be equal to or less than zero");
  }
  else if (sideA == sideB && sideB == sideC && sideA == sideC) {
    alert("The Triangle is an EQUILATERAL")
  }

  else if ((sideA == sideB) || (sideB == sideC) || (sideC == sideA)) {
    alert("The Triangle is an ISOSCELES");
  }


  else if ((sideA + sideB < sideC) || (sideA + sideC < sideB) || (sideB + sideC < sideA) ) {
    alert("This NOT A TRIANGLE")
  }

  else {
    alert("The triangle is a SCALENE")
  }


}

var length1 = parseInt(prompt("Enter the length of First side"));
var length2 = parseInt(prompt("Enter the length of Second side"));
var length3 = parseInt(prompt("Enter the length of Third side"));

var result = Tracker(length1, length2, length3);


//SCALENE TRIANGLE
// else if (sideA !== sideB && sideB !== sideC && sideA !== sideC ) {
//   alert("The triangle is a SCALENE")
// }
