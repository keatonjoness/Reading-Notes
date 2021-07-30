# Debugging


The JavaScript interpreter uses the concept of execution contexts. There is one global execution context; plus, each function creates a new new execution context. They correspond to variable scope.

## EXECUTION CONTEXT

Every statement in a script lives in one of three execution contexts:

**GLOBAL CONTEXT** - Code that is in the script, but not in a function. There is only one global context in any page.

**FUNCTION CONTEXT** - Code that is being run within a function.Each function has its own function context.

**EVAL CONTEXT (NOT SHOWN)** - Text is executed like code in an internal function called eval()

## VARIABLE SCOPE

* The first two execution contexts correspond with the notion of scope (which you met on p98):

**GLOBAL SCOPE** - If a variable is declared outside a function, it can be used anywhere because it has global scope. If you do not use the var keyword when creating a variable, it is placed in global scope.

**FUNCTION-LEVEL SCOPE** - When a variable is declared within a function,it can only be used within that function. This is because it has function-level scope.

## EXECUTION CONTEXT & HOISTING

* Each time a script enters a new execution context, there are two phases of activity:

Prepare: 
* The new scope is created

* Variables, functions, and arguments are created

* The value of the this keyword is determined

Execute:

* Now it can assign values to variables

* Reference functions and run their code

* Execute statements

* Each execution context also creates its own variab1es object. This object contains details of all of the variables, functions, and parameters for that execution context.


## ERROR OBJECTS

* Error objects can help you find where your mistakes are and browsers have tools to help you read them.


There are seven types of built-in error objects in JavaScript. You’ll see them on the next two pages:

Error- Generic error - the other errors are all based upon this error.
Syntax Error- Syntax has not been followed.
ReferenceError- Tried to reference a variable that is not declared/within scope.
TypeError- An unexpected data type that cannot be coerced.
Range Error- Numbers not in acceptable range.
URI Error- encodeURI ().decodeURI(),and similar methods used incorrectly.
EvalError- eval () function used incorrectly.


## HOW TO DEAL WITH ERRORS

Debug the script to fix errors : track down the source of the error, and fix it.

Handle Errors Gracefully :You can handle errors gracefully using try, catch, throw, and finally statements.

**CONSOLE METHODS**
console.info() can be used for general information
console.warn() can be used for warnings
console.error() can be used to hold errors
console.log

**Grouping Msgs** :

* If you want to write a set of related data to the console, you can use the console.group() method to group the messages together. You can then expand and contract the results.

* When you have finished writing out the results for the group, to indicate the end of the group the console.groupEnd() method is used.

**WRITING TABULAR DATA** :
console.table() method lets you output a table showing(objects, arrays that contain other objects or arrays)

**WRITING ON A CONDITION** :
console.assert() method, you can test if a condition is met, and write to the console only if the expression evaluates to false.