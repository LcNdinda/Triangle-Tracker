
# Project
Triangle Tracker

***
## Author Name
By KALEI ELSIE NDINDA

***

## Description 
A web page that allows the user to input the lengths of the sides of a triangle, and returns whether these sides 
form an equilateral, isosceles, or scalene triangle or if the sides cannot make a triangle at all. 

***
## Setup Instruction
* Clone the project from my repository by clicking on the clone button.
* Copy the link
* Open the terminal and write git clone then paste the link on the directory you want to place the project.
* Open the directory then open the index.html file on the browser to run the program.

***
## Behaviour Driven Development
 1. The Program recognizes length set to zero(0) or is less than zero

    **INPUT EXAMPLE** : sideA = 0 sideB = 60 sideC = 30

    **OUTPUT EXAMPLE** : Length of sides cannot be equal to or less than zero
 
 2. The Program recognizes lengths that are Equal
 
    **INPUT EXAMPLE** : sideA = 60 sideB = 60 sideC = 60

    **OUTPUT EXAMPLE**: The Triangle is an EQUILATERAL

 3. The Program recognizes  two lengths that are Equal
 
    **INPUT EXAMPLE** : sideA = 60 sideB = 60 sideC = 30
 
    **OUTPUT EXAMPLET**: The Triangle is an ISOSCELES
 
 4. The Program recognizes lengths that are unequal
 
    **INPUT EXAMPLE** : sideA = 30 sideB = 40 sideC = 60
 
    **OUTPUT EXAMPLE**: The triangle is a SCALENE
 
 5. The Program recognizes lengths that do not form a triangle
 
    **INPUT EXAMPLE** : sideA = 50 sideB = 30 sideC = 90
 
    **OUTPUT EXAMPLE**: This NOT A TRIANGLE
 
 6. The Program recognizes empty fields or invalid characters like text
 
    **INPUT EXAMPLE** : sideA = a  sideB = "" sideC = 90
 
    **OUTPUT EXAMPLE**: TRY AGAIN. EMPTY FIELDS OR WRONG INPUTS
 
 ***
 
 ## Live Website
  
  [Triangle Tracker](https://lcndinda.github.io/Triangle-Tracker/)

 ## Copyright and License Information
 This project is licensed under the terms of the **MIT** license.
 
