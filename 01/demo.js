/*
 * Create an external JavaScript file has the following advantages:
 * - It separates HTML and code
 * - It makes HTML and JS easier to read and maintain
 * - Cached JS files can speed up page loads
 */
function my_function()
{
	// Use the "var" keyword to declare a variable
	// THE VARIABLE NAMES ARE CASE SENSITIVE!!
	var x = 10;
	document.write(x);
	var y;  // y = undefined

	/*
	Naming rules:
	- The first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be letters, digits, underscores, or dollar signs.
	- Numbers are not allowed as the first character.
	- Variable names cannot include a mathematical or logical operator in the name. For instance, 2*something or this+that;
	- JavaScript names must not contain spaces.
	 */

	// JavaScript numbers are always stored as double precision floating point numbers.
	var price = 55.55;
	var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
	document.write("<BR>" + sayHello);

	// The Boolean value of 0 (zero), null, undefined, empty string is false.
	// Everything with a "real" value is true.
	var isActive = true; 

	/*
	 * Math operators
	 */
	var y = x + 5 + 22 + 45 + 6548;
	document.write("<br />" + y%5);

	/*
	 * Logical operators
	 */
	// Ternary operator
	var isAdult = (x < 18) ? "Too young": "Old enough";

	var x = 0;
	while(x<6) {
	  x++;
	}
	document.write(x);


	/*
	 * Alert, prompt and confirm boxes
	 */

	//alert("This is an alert box!");
	
	var result = confirm("Do you really want to leave this page?");
	if (result == true) {
	  alert("Thanks for visiting");
	}
	else {
	  alert("Thanks for staying with us");
	}

	var user = prompt("Please enter your name");
	alert(user);

	// Return values
	return 0;
}

// Calling the function at the bottom
my_function();