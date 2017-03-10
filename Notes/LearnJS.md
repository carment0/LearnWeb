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
  if ( condition ) {
    code..;
  } else {
    code..;
    if ( condition ) {
      nestedifcode..;
    }
  }
```

### operators
- `+ - / *`
- a single equal sign `=` is used to set a value and assigning
- when variable are being used on both sides of the equal sign, you are using the variable to operate and storing the result back to the value
``` js
score = score + 10;
// this is same as
score += 10;
```
- short hand arithmetic operators
`+= -= *= /=`
- operators precedence
- comparison operators
  - equality: same value `==`
  - strict equality: same value and same type `===`
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
#### with statements
- break: jump us out of loop
- continue: jump back up to check the condition again

### creating functions
- `function whateverName (parameters) {code block}`
- to call the function `whateverName();` all the code in the function will be executed
  - will not work unless you call it
- define function before you call them
- parameters can be single or multiple `(x, z, y)`
  - parameter mismatch: if passed less the rest will be undefined, if more the extra will be ignored
- can return information by `return` to be used for something else
- variable scope: how its define and where you can use it
  - within the function it creates a variable as a local variable. only exists and relevant inside the function itself
    - only occurs in functions
  - if declaring variables outside of the function it becomes a global variable, no need to declare it again inside the function. just use it.
  -

## types and objects
### arrays
- single variable that holds multiple values
- create arrays `var arrayname = ["a", "b", "c"]`
- to put values in by index `arrayname[0] = 50;`
- to get values from array `console.log(arrayname[0]);`
- arrays are objects and have properties : can make them do things `console.log(arrayname.length);`
  - array methods
    - methods are functions that belong to an objects by using dot operators
    `someobject.somemethod();`

### numbers
- addition vs concatenation
  - number vs string eg `5 + 5 = 10` `"5" + "5" = "55"`
- ask if it is a number `if isNaN() {};`
- math as an objects
  - `Math.round();` `Math.max();` `Math.min();` etc

### strings
- can be double or single quotes
- one or more characters strung together
- if need quote in the string add backslash before the quotes
- string are objects
  - like array of characters
- string methods
  - look up references for all the methods

### objects
-

## document object model (DOM)
-

### nodes and elements
-

### accessing DOM elemets
-

### changing DOM elements
-

### creating DOM elements
-

## events and event listeners
-

### event handling
-

### onClick and onLoad events
-

### onBlur and onFocus events
-

### timers
-
