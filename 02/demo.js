/*
 * Objects
 */

// Creating an object
var person = {
	// properties
	name: "John", 
	age: 31, 
	favColor: "green", 
	height: 183,
	// methods
	methodName : function(){
		document.write("This is a method");
	}
};
// Accessing to elements
document.write(person.name + "\t" + person['age'] + "</br>");
// Taking the length of strings
//document.write(person.name.length);

// Using methods
person.methodName();

// Creating a constructor
function fPerson(name, age, color) {
	// The this keyword refers to the current object.
	this.name = name;
	this.age = age;
	this.favColor = color;
	this.full = function() {
		return "</br>" + this.name + " " + this.age + " " + this.favColor;
	};
}

// Creating objects of the same type
var p1 = new fPerson("John", 42, "green");
var p2 = new fPerson("Amy", 21, "red");

document.write(p1.full());


document.write("</br>" + p1.age); // Outputs 42
document.write("\t" + p2.name); // Outputs "Amy"

// Creating single objects
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

/*
 * Math object
 */

document.write("</br>Euler's constant : " + Math.E);
document.write("</br>Pi : " + Math.PI);

// Asks for a number and alert its square root
var n = prompt("Enter a number", "");
alert("The square root of " + n + " is " + Math.sqrt(n));

/*
 * Date object
 */
// Calls the function myAlert() every 3 seconds (3000 ms)
//setInterval(myAlert, 3000);

// Current date and time
document.write("</br>" + new Date());
//Sat Jun 11 1988 11:42:00
// Date objects are static, rather than dynamic.
// The computer time is ticking, but date objects don't change, once created.
var d3 = new Date(88,5,11,11,42,0,0); // Year, Month, Day, Hour, Minutes, Seconds

// prints the current time to the browser once every second.
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);