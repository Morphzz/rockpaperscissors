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
       computerChoice = "rock"
        $("#computerChoice").text("rock"); 
   } else if(randomNumber < .666){
        $("#computerChoice").text("paper");
          computerChoice = "paper"  
   } else{
        $("#computerChoice").text("scissors");
            computerChoice = "scissors"
   } 
   
   if(computerChoice === userChoice) {
       winner = "draw"
      $("#result").text("draw");
   } 
   else if(computerChoice === "rock" && userChoice === "paper"){
       winner = "user wins"
      $("#result").text("user wins")
   }
    
    if(userChoice === "rock" && computerChoice === "paper") {
     winner = "computer wins"
    $("#result").text("computer wins");
    
   } else if(computerChoice === "paper" && userChoice === "scissors") {
    winner = "user wins"
    $("#result").text("user wins");
   } 
   
   
  
    console.log()
   });
    
 