// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;


// DOCUMENT READY FUNCTION BELOW


    
$("#shoot").click(function() {
    userChoice = $("input").val();
    $("#userChoice").text(userChoice);
    
   randomNumber = Math.random()
   if(randomNumber < .333) {
        $("#computerChoice").text("nice try"); 
   }
   
  
    console.log()
});


