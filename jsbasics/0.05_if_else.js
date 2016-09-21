var elevatorUp = true;
var elevatorBroke = true;
var elevatorDown = false;
var elevatorStop = true;

if (elevatorUp == true) {
	console.log("Going up.");
} else {
	console.log("Not going up.");
}

if (elevatorBroke != false) {
	console.log("Oh no, the elevator is broken!");
} else {
	console.log("Oh wait, we're good")
}

if (elevatorStop || elevatorBroke) {
	console.log("Something isn't right");
} else {
	console.log("We're all good");
}