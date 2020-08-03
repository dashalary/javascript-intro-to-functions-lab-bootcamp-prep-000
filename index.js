function shout(string) {
  return
  string.toUpperCase()
}

function whisper(string) {
  return
  string.toLowerCase()
}

function logShout(string) {
  console.log()
  string.toUpperCase()
}

function logWhisper(string) {
  console.log()
  string.toLowerCase()
}

function sayHiToGrandma(string) {
 var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string) {

if (lowercase==="hello!") {
  console.log("I can't hear you!")
} else if (uppercase==="HELLO!") {
  console.log("YES INDEED!")
} else if (mixedCase==="Hi there!") {
  console.log("I love you, too.") }
  
}
 
say("I love you","Grandma.")