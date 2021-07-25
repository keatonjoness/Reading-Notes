 # HTML Links, JS Functions, and Intro to CSS Layout
 
 ##HTML Links 

 * A link defines a relationship between two resources on the web.


 Example of link:
  <li><a href="https://www.github.com">
      Github</a></li>


* Email Link: <a href="mailto:keaton@example.com">Email Keaton</a>
* Website Link: <a href="http://www.whatever-webpage-you-want-to-go-to.com">The text the user clicks on</a>
* Relative Url: <a href="look-at-me.html">look-at-me</a>
* Link to a new window: <a href="http://www.instagram.com" target="_blank">Instagram Profile</a>
* Linking To A Specific Part Of The Same Page: Make an id attribute (<h1 id="whats up">whats up</h1>) then it should look like this <br>
<a href="#whats up">Whats up</a>

* Linking To A Specific Part Of Another Page: <a href="http:/www.squarespace.com/#top">Square Space Top Section</a>


## CSS Layout

* Block-level elements start on a new line.

* Inline elements flow in between surrounding text.

* Controlling the Position of Elements CSS has the following positioning schemes that allow you to control the layout of a page.

* Normal flow Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one. Even if you      specify the width of the boxes and there is space for two elements to sit ide-byside, they will not appear next to each other. This is the default behavior (unless you tell the browser to do something else).

* Relative Positioning This moves an element from the position it would be in normal flow, shifting it to the op, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.

* Absolute positioning This positions the element in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page.

* Fixed Positioning This is a form of absolute positioning that positions the element in relation to the browser window.

* Floating Elements Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box. The floated element becomes a block-level element around which other content can flow.

* Clear property allows you to say that no element (within the same containing element) should touch the sides of a box. It can take the following values:left, right, both, none.

* Z-index property allows you to control which box appears on top.


## JavaScript Functions

**Functions** let you group a series of statements together to perform a specific task.

A function declaration creates a function that you can ca ll later in your code.

* Variable Scope- The location where you declare a variable will affect where it can be used within your code. If you declare it within a function, it can only be used within that function. This is known as the variable’s scope.

* Local Variables- When a variable is created inside a function using the var keyword, it can only be used in that function. It is called a local variable or function-level variable.

* Global Variables- If you create a variable outside of a function, then it can be used anywhere within the script. It is called a global variable and has global scope. In the example shown, wa 11 Size is a global variable.

