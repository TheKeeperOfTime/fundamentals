var isOn = true;
var isHot = true;

if (!isOn) {
	console.log("Start the party!");
} else {
	console.log("The party isn't happening...");
}

if (isOn === false) {
	console.log("Dude, that's sweet!");
} else {
	console.log("That's not very cool")
}

if (isOn && isHot) {
	console.log("Wow, it is so hot! Please kill the spotlights.")
}

if (isOn || isHot) {
	console.log("Someone needs to do something, dude.")
}