# Problem Domain, Objects, and the DOM

## Objects

Objects group together a set of variables and functions to create a model of a something you would recognize from the real world. In an object, variables and functions take on new names.

If a **variable** is part of an object, then it's a **property**. Properties tell us everything about the object.

If a **function** is part of an object, it is called a **method**. Methods represent tasks that are associated with the object

## Document Object Model

Document Object Model (DOM)- specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.

Application Programming Interface (API) - user interfaces let humans interact with programs; APls let programs (and scripts) talk to each other

The Document Nodes- it represents the entire page.

Element Nodes- HTML elements describe the structure of an HTML page. (The <h l > - <h6> elements describe what parts are headings; the <p> tags indicate where.

Attribute Nodes- The opening tags of HTML elements can carry attributes and these are represented by attribute nodes in the DOM tree. Attribute nodes are not children of the element that carries them; they are part of that element

Text Nodes- Once you have accessed an element node, you can then reach the text within that element. This is stored in its own text node.
