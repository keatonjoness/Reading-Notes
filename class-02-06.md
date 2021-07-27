# HTML Tables; JS Constructor Functions

## Domain Modeling

Domain modeling is the process of :
<ol>
    <li>creating a conceptual model in code for a specific problem.</li>
    <li>describes the various entities, their attributes and behaviors, as well as the constraints that govern the problem domain. An entity that stores data in properties and encapsulates behaviors in methods is commonly referred to as an object-oriented model.</li>
</ol>


## Tables

* A table represents information in a grid format. Examples of tables include financial reports, TV schedules, and sports results.

* Grids allow us to understand complex data by referencing information on two axes
<ol>
    <li> <table> used to create a table. The contents of the table are written out row by row. </li>

<li> <tr> indicate the start of each row using the opening <tr> tag, At the end of the row you use a closing </tr>. </li>

<li> <td> represente Each cell of a table. </li>

<li> <th>used just like the <td> element but its purpose is to represent the heading for either a column or a row. </li>

<li> The colspan attribute can be used on a <th> or <td> element and indicates how many columns that cell should run across. </li>

<li> The rowspan attribute can be used on a <th> or <td> element to indicate how many rows a cell should span down the table. </li>

<li> The headings of the table should sit inside the <thead> element. </li>

<li> The body should sit inside the <tbody> element. </li>

<li> The footer belongs inside the <tfoot> element.</li>
</ol>

## JS Constructor Functions

* creating an object constructor notaion :

* create a new object using combimation of the new keyword and the object() constructor function
add proparties and methods to it using dot notation.

* to create an empty object using var varName ={}.

* to update property use dot notation or [] then enter the new value.

* to delete use delete keyword.

* The keyword this is commonly used inside functions and objects. Where the function is declared alters what this means. It always refers to one object, usually the object in which the function operates.

* When a function is created at the top level of a script (that is, not inside another object or function), then it is in the global scope or global context.

* All global variables also become properties of the window object. so when a function is in the global context, you can access global variables using the window object, as well as its other properties.

* Arrays are a special type of object .
