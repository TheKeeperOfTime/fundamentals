var bankAccount = 500;
var appleWatch = 400;
var appleWatchGold = 10000;

if (bankAccount > appleWatch) {
	console.log("Make it rain boi");
} else if (bankAccount < appleWatchGold) {
	console.log("Start selling plasma to get this!!!");
} else {
	console.log("Get a job you hippie");
}

var personAge = 17;
var votingAge = 18;
var registeredVote = false;

if ((personAge >= 18) && (registeredVote === true)) {
	console.log("Yay, I can vote!")
} else if ((personAge >= votingAge) && (registeredVote === false)) {
	console.log("Damn, I can't vote")
} else {
	console.log("I need to be older")
}

//Modulus operator %, returns the remainder.
// console.log(10 % 5); //returns zero
// console.log(4 % 3); //returns a ramainder of 1

var numOne = 8;

if ((numOne % 2 === 0) && (numOne % 3 === 0)){
	console.log("Number is divisable by both");
} else if ((numOne % 2 === 0)) {
	console.log("Number is divisable by two");
} else if ((numOne % 3 === 0)) {
	console.log("Number is divisable by three");
} else {
	console.log("Number is not divisable by either")
}
