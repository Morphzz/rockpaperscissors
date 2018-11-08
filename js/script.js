// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("shoot").click(function() {
    $("#userchoice").text($("input").val());
});
$("shoot").click(function() {
    $("#computerChoice").text($("input").val());
});
$("shoot").click(function() {
    $("#winner").text($("input").val());
});