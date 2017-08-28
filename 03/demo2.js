/*
his code creates a timer that calls a move() function every 500 
milliseconds. Now we need to define the move() function, that changes 
the position of the box.
 */

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
	if (pos >= 150) {
		/*
		To stop the animation when the box reaches the end of the 
		container, we add a simple check to the move() function and 
		use the clearInterval() method to stop the timer.
		 */
		clearInterval(t);
	} else {
		pos += 1;
		box.style.left = pos+"px"; //px = pixels
	}
}

/*
To create an animation, we need to change the properties of an element
at small intervals of time. We can achieve this by using the
setInterval() method, which allows us to create a timer and call a
function to change properties repeatedly at defined intervals 
(in milliseconds).
 */

var t = setInterval(move, 100); 

/*
Event handler when clicks the moving box
 */
function myEventHandler() {
	box.style.backgroundColor="powderblue";
}


/*
The window.onload() event can be used to run code after the whole page
is loaded.
 */

window.onload = function() {
   //some code
}


/*
Event listener: When the mouse is over the moving box, changes the 
color of the container.
 */
box.addEventListener("mouseover",listenerHandler);

function listenerHandler() {
	box.parentNode.style.backgroundColor="DarkOliveGreen";
	console.log("Event Listener called");
	box.removeEventListener("mouseover", listenerHandler);
	console.log("Event Listener removed");
}

/*
Image slider example

The num variable holds the current image. The next and previous button
clicks are handled by their corresponding functions, which change the
source of the image to the next/previous image in the array.
 */
// Define in an array the images used
var images = [
	"media/1.jpg",
	"media/2.jpg",
	"media/3.jpg"
];

var num = 0;

function prev() {
	/*
	var slider = document.getElementById("slider");
	num--;
	if (num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
	*/
	document.getElementById("slider").src = images[
		--num < 0 ? num = images.length-1 : num
	];
}

function next() {
	/*
	var slider = document.getElementById("slider");
	num++;
	if (num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
	*/
	document.getElementById("slider").src = images[
		++num >= images.length ? num = 0 : num
	];
}

/*
Form validation
 */
 
function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
      return true;
    }
  }
  alert("The values should be equal and not blank");
  return false;
}