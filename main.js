// refrence classes
var BasicCard = require("./basic.js");
var ClozeCard = require("./clozeDeleted.js");


// var firstPresident = new BasicCard(
var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back);

// var firstPresidentCloze = new ClozeCard(
//var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");
var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "look");

//console.log(firstPresidentCloze.text);

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 
console.log(firstPresidentCloze.brokenCloze);