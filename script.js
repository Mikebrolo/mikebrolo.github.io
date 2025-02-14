const dialogues = [
	{
		question: "Hello, how is it going.",
		yes: "Would you like a tour of the pusheens (you)?",
		no: ["what do you mean no..", "You're going to say yes...", "Too bad I'm asking anyway"],
		imgSrc: "PusheenPictures/coolPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Would you like a tour of the pusheens (you)?",
		yes: "So first this is clearly you just sleeping",
		no: ["You don't want to see yourself?", "You better say yes.", "I'm starting to see red", "anyways"],
		imgSrc: "PusheenPictures/smugPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "So first this is clearly you just sleeping",
		yes: "Then this is literally you eating",
		no: ["erm, thats definetely you sleeping", "what do you mean", "you're just pressing no at this point", "you better stop", "watch it", "stop touching me...."],
		imgSrc: "PusheenPictures/sleepingPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Then this is literally you eating",
		yes: "Literally you doing school work",
		no: ["Cmon, you can't deny thats you eating", "like look at you", "destroying that cookie", "okay you better stop hitting no", "watch it", "stop touching me...."],
		imgSrc: "PusheenPictures/cookiePusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Literally you doing school work",
		yes: "This is you on the phone with me(only) ofc",
		no: ["I mean I guess you never do work anyway", "what do you mean no", "Do we need to bring up those grades of yours?", "Exactly so watch it", "just hit yes now...", "im touching you."],
		imgSrc: "PusheenPictures/schoolworkPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "This is you on the phone with me(only) ofc",
		yes: "This is you on the daily",
		no: ["Oh so you call other huzz?", "uh huh whatever you say", "Nope bc you're just a FAT lier", "Do i need to show proof of that?", "Okay then"],
		imgSrc: "PusheenPictures/phonePusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "This is you on the daily",
		yes: "You eating AGAIN",
		no: ["Wow surprised you said no", "yeah probably expecting something right", "TOO bad not getting anything"],
		imgSrc: "PusheenPictures/coolPusheen2.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "You eating AGAIN",
		yes: "Anyways this is you dancing",
		no: ["Yes thats you eating.", "BIGGIE stop hitting no", "hitting this button like the order button on mcdonalds huh", "Uh huhhhh i know youuuu", "okay youre hurting me now stop", "like actually", "Your cat is gone."],
		imgSrc: "PusheenPictures/snackingPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Anyways this is you dancing",
		yes: "You giving me your love !",
		no: ["Okay I've never seen you dance", "But this is how i assume you dance", "You're just hitting no for this convos huh", "stop", "I'm not gonna ask again", ".....", "Is this your cat?"],
		imgSrc: "PusheenPictures/dancingPusheen.png",
		interceptionCount: 6,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "You giving me your love !",
		yes: "You eating ice cream!!!",
		no: ["Oh so you dont even love me", "Nono i see how it is"],
		imgSrc: "PusheenPictures/kissPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "You eating ice cream!!!",
		yes: "You holding the letters I give you",
		no: ["You definetely eat ice cream don't lie", "I literally gave you ice cream twice the other day", "You're such a lier", "A BIG lier", "whatever im done arguing with you smh"],
		imgSrc: "PusheenPictures/iceCreamPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "You holding the letters I give you",
		yes: "This is you when we get sushi !",
		no: ["you", "are", "getting", "touched", "tonight..."],
		imgSrc: "PusheenPictures/letterPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "This is you when we get sushi !",
		yes: "And this is just the cutie patootie you are!",
		no: ["wdym no", "Yk, im getting tired of this no pressing", "Like is there even a purpose?", "like you're just hitting it for no reason", "just like you hit me at home...."],
		imgSrc: "PusheenPictures/sushiPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "And this is just the cutie patootie you are!",
		yes: "Anyways want to see something cool",
		no: ["wdym no", "You're literally the cutest thing on this planet smh", "Like I could literally squeeze you all day", "like ALLLL day", "we gotta move on..."],
		imgSrc: "PusheenPictures/lovingPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Anyways want to see something cool",
		yes: "THANK YOU JEEZ",
		no: ["why not?", "I worked hard on it though :(", "Pleaseeeeeee", "PLeaseeeeeee", "PLEASEEEEEEE", "Pretty please", "Pretty please with a cherry on top", "PRETTY PLEASE with a cherry on top", "PRETTY PLEASE WITH A CHERRY ON TOP"],
		imgSrc: "PusheenPictures/coolPusheen.png",
		interceptionCount: 10,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Do you like him....",
		yes: "Anyways guess what",
		no: ["Are you kidding me", "You're hurting his feelings", "I can't believe you", "omg you keep pressing it", "wow", "just wow", "thats it im taking him away", "nope too bad"],
		imgSrc: "PusheenPictures/smugPusheen.png",
		interceptionCount: 7,// number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Anyways guess what",
		yes: "Do you wanna be my valentine!!",
		no: ["You have to press yes", "Please its very important", "like actually", "hit yes please", "wow", "you must hate me", "then hit yes"],
		imgSrc: "PusheenPictures/lovingPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Do you wanna be my valentine!!",
		yes: "YAY",
		no: ["You missed", "Missed again", "Cmon can you press a button", "been doing that this whole time", "you suck", "now you have no choice hah"],
		imgSrc: "PusheenPictures/heartPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "YAY",
		yes: "Love you!!",
		no: ["You missed", "Missed again", "Cmon can you press a button", "been doing that this whole time", "you suck", "now you have no choice hah",],
		imgSrc: "PusheenPictures/letterPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Love you!!",
		yes: "Want to see a gallery?",
		no: ["You missed", "Missed again", "Cmon can you press a button", "been doing that this whole time", "you suck", "now you have no choice hah",],
		imgSrc: "PusheenPictures/letterPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Want to see a gallery?",
		yes: "",
		no: ["Too bad you're seeing it"],
		imgSrc: "PusheenPictures/snackingPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
	{
		question: "Want to see a gallery?",
		yes: "",
		no: ["Too bad you're seeing it"],
		imgSrc: "PusheenPictures/snackingPusheen.png",
		interceptionCount: 10, // number to change based on what noCount you're on
		noCount: 0
	},
];


let currentIndex = 0;
let pos = 0;
let posY = window.innerHeight - document.getElementById("livePusheen").offsetHeight;
let speed = 1;
let direction = 1; // 1 = right, -1 = left
let directionY = 0; // 1 for down, -1 for up, 0 for standstill
let animationRunning = false;

document.querySelector(".buttonContainer").addEventListener("click", function(event) {
	if (event.target.tagName == "BUTTON") {
		let clickedValue = event.target.value;
		handleResponse(clickedValue);
	}
});

function displayDialogue(){
	document.getElementById("dialogText").innerText = dialogues[currentIndex].question
}

function handleResponse(response) {
	let dialogue = dialogues[currentIndex];

	if (response === "yes"){
		if(currentIndex == 17){
			hideDiv("noButton");
			showDiv("_noButton");
		}
		document.getElementById("dialogText").innerText = dialogue.yes;
		dialogue.noCount = 0; // reset the counter
		nextDialogue();
	} else {
		if (dialogue.noCount < dialogue.no.length) {
			document.getElementById("dialogText").innerText = dialogue.no[dialogue.noCount];
			dialogue.noCount++;
			if(dialogue.noCount == dialogue.interceptionCount){
				if(currentIndex == 15){
					setTimeout(hideDiv("livePusheen"), 1000);
				}
			}
		} else {
			document.getElementById("dialogText").innerText = "stop it...";
			nextDialogue();
		}
	}

}

function moveButton(){
	// each click move it to a random spot
	
	// random integer between 1 and 80
	let topValue = Math.floor(Math.random() * 80) + 1;
	let leftValue = Math.floor(Math.random() * 80) + 1;

	document.querySelector(".movableButton").style.top = topValue + "%"
	document.querySelector(".movableButton").style.left = leftValue + "%"
}

function nextDialogue() {
	if (currentIndex < dialogues.length - 1) {
		currentIndex++;
		document.getElementById("picture").src = dialogues[currentIndex].imgSrc;
		//displayDialogue();
		setTimeout(displayDialogue, 1000);
	} else {
		document.getElementById("dialogText").innerText = "Poop";
	}
	if (currentIndex == 15){
		showDiv("livePusheen");
		document.getElementById("dialogText").innerText = "Look at him!";
	} 
	if (currentIndex == 17) {
		showDiv("noButton");
		hideDiv("_noButton")
	}
	if(currentIndex == 21){
		window.location.href="./galleryPage.html"
	}
}

function showDiv(element){
	document.getElementById(element).style.display = "block";
	startAnimation();
}

function hideDiv(element){
	document.getElementById(element).style.display = "none";
}

function move() {
	let maxWidth = window.innerWidth - document.getElementById('livePusheen').offsetWidth; // Screen width minus image width
	let maxHeight = window.innerHeight - document.getElementById("livePusheen").offsetWidth; // Screen height minus image width

	pos += speed * direction;
	posY += speed * directionY;


	if(pos >= maxWidth && direction === 1) {
		console.log("Hit right edge");
		pos = maxWidth;
		direction = 0;
		directionY = -1;
		document.querySelector(".pusheenImage").style.transform = 'rotate(-90deg)';
	}
	else if(posY <= 0 && directionY === -1){
		console.log("hit top edge");
		posY = 0;
		directionY = 0;
		direction = -1;
		document.querySelector(".pusheenImage").style.transform = 'rotate(-180deg)';
	}
	else if(pos <= 0 && direction === -1) {
		console.log("hit left edge");
		pos = 0;
		direction = 0;
		directionY = 1;	
		document.querySelector(".pusheenImage").style.transform = 'rotate(90deg)';
	}
	else if(posY >= maxHeight && directionY === 1){
		console.log("hit bottom edge");
		posY = maxHeight;
		directionY = 0;
		direction = 1;
		document.querySelector(".pusheenImage").style.transform = 'rotate(0deg)';
	}

	document.querySelector(".livePusheen").style.top = posY + "px";
	document.querySelector(".livePusheen").style.left = pos + "px";

	//console.log("Updating styles → posY:", posY, "px");
	requestAnimationFrame(move);
}

function startAnimation(){
	if (!animationRunning) {
		animationRunning = true;
		requestAnimationFrame(move);
	}
}

document.getElementById("noButton").addEventListener("click", () => moveButton());

startAnimation()
