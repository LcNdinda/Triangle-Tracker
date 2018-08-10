
var Tracker = function(sideA, sideB, sideC){
  var sideA = parseFloat(prompt("Enter the length of First side"));
  var sideB = parseFloat(prompt("Enter the length of Second side"));
  var sideC = parseFloat(prompt("Enter the length of Third side"));



   if (sideA<=0 || sideB<=0 || sideC<=0) {
     alert("Length of Triangles cannot be equal to or less than zero");

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

  else if ((sideA + sideB > sideC) || (sideA + sideC > sideB) || (sideB + sideC > sideA)) {
    alert("The triangle is a SCALENE")
  }

  else {
    alert("TRY AGAIN. EMPTY FIELDS OR WRONG INPUTS")
  }


}




var displayTriangle = function(){
  var arrayLengths = ["Triangle Tracker.", "CLICK ON TRIANGLE TRACKER TO USE THE PROGRAM"];
  arrayLengths.forEach(function(arrayLengths){
    alert(arrayLengths);
  })
}
