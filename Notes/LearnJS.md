# javascript

## introduction
- JS is a language that works with and manipulates webpages
- is scripting lanaguage
  - limited
  - only works in web browser as as host program
  - can't access local files
  - JS is a client side language
    - sent to the user's computer and it runs there

##  JS syntax
- JS is an interpreted language
- JS is case sensitive
- JS is whitespace insensitive

### statement
- typically written in one line and end with `;`

### comments
- one line comment
`// this is a comment`
- multiple line comment
``` javascript
/* This
is
a
comment `
*/
```

### Execution order
- runs at the first statement and move down, executing one by one

### creating variable
- a container to hold data
- creating variable by `var nameOfVariable;`
  - can use letter, numbers(cannot start), _ , and $
- to set data to the value `var nameOfVariable = whatever;`
- if creating multiple variables at the same time you can put them all on one line `var year, month, day;`
  - same can be done with initializing them with those values
  - you can set them  `var year = 2017, month = 3, day = 8;`
- JS is a weakly typed language
  - don't need to define what type of variable it is

### conditionals
- if statement
  - whatever is the parentheses must evaluate as true or false
  - code inside the curly braces is called a code block
    - code can be nested
- else statement
  - if is not true it will move to the else statement
- statement can be nested
``` js
if (/* Some condition */) {
    // Do something
} else if (/* Some other condition */) {
    // Do something else
} else {    // Otherwise
    // Do a third thing
}
```

- multiple if statements
  `else if ()` or
``` js
switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}
```

### return
- The return keyword simply gives the programmer back the value that comes out of the function. So the function runs, and when the return keyword is used, the function will immediately stop running and return the value.

### operators
- `+ - / *`
- a single equal sign `=` is used to set a value and assigning
- when variable are being used on both sides of the equal sign, you are using the variable to operate and storing the result back to the value
``` js
score = score + 10;
// this is same as
score += 10;
```
- short hand arithmetic operators (expression will be either true or false)
`+= -= *= /=`
- operators precedence
- comparison operators
  - equality: same value `==`
  - strict equality: same value and same type `===`
  - not `!`
  - not equal `!=`
  - not strictly equal `!==`
  - `<, >, <=, >=`
  - logical and/or `&&, ||`
  - modulus: gives the remainder `%`
  - increment/decrement by 1 `++, --`
    - can be used before or after variable name: prefix/postfix
      - although they ending up doing the same thing they do it in a different way and there is a impact to which one you choose e.g. `alert(++a)` vs `alert(a++)` the message is different but the resulted number is the same
  - ternary operators
    `condition ? true : false`
    - a mini if/else statement

### sending messages to console
- get messages out of js using Firebug `console.log()`
- can change log to debug, info, error and warn

### loops aka iteration
#### for loops
1. set up index variable before creating loops
2. check the condition
3. increment the index at the end `+=, -=`
- while loop `while (condition) {statement; increment/decrement;}`
- do.. while `do {statement; increment/decrement;} while (condition);`
  - will always happen at least once bc you are checking the condition after it runs through the statement
- for loop: brings all three points together `for (setup index; condition; increment) {statement}`
``` js
for (var k = 1; k < 10; k++) {}
for (i = 100; i > 0; i -= 5) {console.log(i);}
```

#### while loops
-  The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.
- As long as the condition evaluates to true, the loop will continue to run. As soon as it's false, it'll stop.
- When you use a number in a condition, JavaScript understands 1 to mean true and 0 to mean false

``` js
while(condition){
    // Do something!
}
```

- Sometimes you want to make sure your loop runs at least one time no matter what. When this is the case, you want a modified while loop called a do/while loop.
``` js
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);
```
-

#### with statements
- break: jump us out of loop
- continue: jump back up to check the condition again

### creating functions
- `function whateverName (parameters) {code block;};`
- to call the function `whateverName("parameters");` all the code in the function will be executed
  - will not work unless you call it
- define function before you call them
- parameters can be single or multiple `(x, z, y)`
  - parameter mismatch: if passed less the rest will be undefined, if more the extra will be ignored
- can return information by `return` to be used for something else
- variable scope: how its define and where you can use it
  - within the function it creates a variable as a local variable. only exists and relevant inside the function itself
    - only occurs in functions
  - if declaring variables outside of the function it becomes a global variable, no need to declare it again inside the function. just use it.
- creating variable of a function
`var whateverName = function(code...; code..;) {};``

## types and objects
### arrays
- single variable that holds multiple values
- are ordered so the position of each piece of data is fixed
- create arrays `var arrayname = ["a", "b", "c"]`
- to put values in by index `arrayname[0] = 50;`
- to get values from array `console.log(arrayname[0]);`
- arrays are objects and have properties : can make them do things `console.log(arrayname.length);`
  - array methods
    - methods are functions that belong to an objects by using dot operators
    `someobject.somemethod();`
- can iterate over an array
-  You can make a two-dimensional array by nesting arrays one layer deep
``` js
var twoDimensional = [[1, 1], [1, 1]];
```
  - This array is two-dimensional because it has two rows that each contain two items. If you were to put a new line between the two rows, you could log a 2D object—a square—to the console, like so:

[1, 1]
[1, 1]

### numbers
- addition vs concatenation
  - number vs string eg `5 + 5 = 10` `"5" + "5" = "55"`
- ask if it is a number `if isNaN() {};`
- math as an objects
  - `Math.round();` `Math.max();` `Math.min();` etc
- If you call isNaN on something, it checks to see if that thing is not a number.
  - `isNaN('berry'); // => true`

### strings
- can be double or single quotes
- one or more characters strung together
- if need quote in the string add backslash before the quotes
- string are objects
  - like array of characters
- string methods
  - look up references for all the methods

### objects
- Using objects, we can put our information and the functions that use that information in the same place.
  - You can also think of objects as combinations of key-value pairs (like arrays), only their keys don't have to be numbers like 0, 1, or 2
  - they can be strings and variables.
  - Each piece of information we include in an object is known as a property.
- is a container that gathers together some data and some behavior
- an object allows us to gather variable and functions that belong together and in enclose them into a larger object
- you can put objects into arrays and you can make keys into arrays
``` js
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

// OR

var myObj = {
    type: [fancy, cute],
    disposition: 'sunny'
};

var emptyObj = {};

// OR use constructor to create object

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

```

- accessing properties
``` js

var susan = {
  name: "Susan Jordan",
  age: 25
};

var name2 = susan.name;
var age2 = susan.age;

// OR

var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
```

## document object model (DOM)
- document refers to the webpage
  - browser view and the other one is source code. same doc but different representation
- objects refers to any element/components in the document
- model refers to the html represent as a tree structure
  - each pieces are nodes
  - can describe the relationship, parent and child
  - agreed upon set of terms that describe exactly how to interact with the pieces of a webpage
- the way to reach into the page from our script and the way our page reach into our script

### nodes and elements
- nodes
  - represented by elements, attributes, texts, comments, and so on
  - 12 node types in DOM
    - only interested in three of them Node.ELEMENT_NODE == 1, Node.ATTRIBUTE_NODE == 2, and Node.TEXT_NODE == 3
    - attribute node and text nodes belong to elements

### accessing DOM elemets
- retrieving an element by ID
  - element with unique ID in HTML can be grabbed by js `document.getElementById("someId");`
  - how to call it
    - create a variable and set it to the result of calling the elementbyid
    - the variable will be used to read the properties of the element and therefore you can call methods of the element
    - once you have an element, you can move to different nodes such as parent or child of that element
  - to get more than one element without ID
    - `getElementsByTagName("whatevertag");`
    - set it equal to a variable and it will store the elements as a array
  - methods : `.nodeType, .innerHTML, .childNode`

### changing DOM elements
1. get the element
2. change element
  - change attribute
    -`whateverelementvariable.getAttribute("whateverattribute");`
    - `whateverelementvariable.setAttribute("whateverattribute", "whatevervalue");`
      - value always a string

### creating DOM elements
1. create the element `var whatevervariable = document.createElement("whateverelement");`
  - not part of the page yet, this element is floating in space
2. add it to the document `getelementvariable.appendChild(whatevervariable);`

- creating text nodes
``` js
var myText = document.createTextNode("ksdjflasjdf");
myNewElement.appendChild(myText);
```

``` js
var newHeading = document.createElement("h1");
newHeading.innerHTML = "Did You Know?";
document.getElementById("trivia").appendChild(newHeading);

// or
var newHeading = document.createElement("h1");
var h1Text = document.createTextNode("Did You Know?");
newHeading.appendChild(h1Text);
document.getElementById("trivia").appendChild(newHeading);
```

- alternative to appendChild
  - add child into a certain location e.g. in a list
  ``` js
  var myNewElement = document.createElement("li");
  var secondIten = myElementsByTagName("li")[1];
  myElement.insertBefore(myNewElement, secondItem);
  ```

## events and event listeners
### event handling
- reacting with the user
- what is an event?
  - events are going on all the time, just have to choose which one you want to manipulate
  - event names `onload`, `onclick`, `onmouseover`, `onblur`, `onfocus`
  - you do not writing the event itself, you write the event handler or event listener
  - you write your function and you volunteer to handle or to listen out for one or more events so that you can respond when they happen
- multiple ways of handling events
  1. within HTML (not recommended)
  ``` html
  <button onclick="alert('Hello, world');">
    Run Some JS
  </button>
  ```
  2. this function does not need name because we're saying exactly when this gets executed. in this case, when they click on myelement. semicolon added here bc the whole thing is a statment
  ``` JS
  myelement.onclick = function() {
    // your event handler
  };
  ```
  3. Can call directly on the document object or any element you have. you give three pieces of information: event (without `on`), function  you want to run and false(rarely used). For each event you can add multiple listeners. You have a lot of flexibility to dynamically add and use its mirror image to remove event listeners `removeEventListerner` as your script is running.
  ``` JS
  document.addEventListener('click', myFunction, false);
  ```

### onClick and onLoad events
- code to respond to common events
- two events that are the most common, clicking and loading something
- onClick
  ```js
  // react to clicking anywhere in webpage
  document.onclick = function () {
    alert("You clicked somewhere!");
  }
  ```

  ``` js
  //react to clicking on certain thing
  var myImage = document.getElementById("mainImage");
  myImage.onclick = function() {
    alert "you clicked the image");
  }

  ```
- onLoad
``` js
window.onload = function() {}
```

### onBlur and onFocus events
- value on the text field to appear to disappear
``` js
var emailField = document.getElementById("email");

emailField.onfocus = function () {
  if (emailField.value == "your email") {
    emailField.value = " ";
  }
};

emailField.onblur = function () {
  if (emailField.value == " ") {
    emailField.value = "your email";
  }
};
```

### timers
- setTimeout and setInterval is in milliseconds
- `setTimeout(simpleMessage, 5000);`
- `setInterval(changeImage, 5000);`
