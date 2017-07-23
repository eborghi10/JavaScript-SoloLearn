/**
 * The DOM
 */

// The document object
// As body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property.
//document.body.innerHTML = "Some text";

// Accessing to HTML elements
if(confirm("Press Ok to modify by Id. Cancel by Class.")) {

	document.getElementById("demo").innerHTML = "Modifying the Demo element";
} else {
	// The getElementsByClassName() method finds all elements by class name and returns them as an array.
	var arr =  document.getElementsByClassName("demo");
	//accessing the first element
	arr[0].innerHTML = "Modifying the \"class\" element";
}

function fChange() {
	// The getElementsByTagName method returns all of the elements of the specified tag name as an array.
	var arr = document.getElementsByTagName("p");
	for (var x = 0; x < arr.length; x++) {
	  arr[x].innerHTML = "Hi by Tag [" + x + "]";
	}
}
setInterval(fChange, 1500);

// Modifying the child elements
var arr = document.getElementById("modifyingChild").childNodes;
for(var x=0;x<arr.length;x++) {
arr[x].innerHTML = "child text " + x;
}

// Modifying HTML image using "src"
document.getElementById("my_img").src = "media/apple.jpg";
// We can change the href attribute of a link
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";
// All style attributes can be accessed using the style object of the element.
// The code changes the text color and width of the div element.
document.getElementById("demo").style.color = "6600FF";
document.getElementById("demo").style.width = "100px";

// Creating elements
/*
 * This will create a new text node, but it will not appear in the document until you append it to an existing
 * element with one of the following methods:
 * - element.appendChild(newNode) adds a new child node to an element as the last child node.
 * - element.insertBefore(node1, node2) inserts node1 as a child before node2.
 */
// The following example creates a new paragraph and adds it to the existing div element on the page.
var node = document.createTextNode("Some new text");
//creating a new paragraph
var p = document.createElement("p");
//adding the text to the paragraph
p.appendChild(node);
//adding the paragraph to the div
var div = document.getElementById("another_div");
div.appendChild(p);
// Removing child
p.removeChild(node);