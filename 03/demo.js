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