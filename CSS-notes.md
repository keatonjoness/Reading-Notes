# Design web pages with CSS

### CSS (Cascading Style Sheets)
<ul>
<li> Allows you to create great-looking web pages. </li>

#### What is CSS for?
* Is  language specifying how documents are presented to  <br>
users-- how they are styled, laid out, etc.

* A **document** is usually a text file  structured using a marlup language. <br>
  **HTML** is the most common markup langage, but you may come across <br>
  other markup languages like SVG or XML.

* Presenting a document to a user means coverting it into form usable by your audience.

* These browsers below are designed to present documents visually:
<ul>
  <li> Fire Fox </li>
  <li> Chrome </li>
  <li> Edge </li>
  </ul> 

  - CSS can be used for baisc styling, like color and size of heading nd links. <br>
    It's used to create layouts, like turning  single column of text into a layout. <br> 
    Also it can be used as animation.

#### Browser Defaults 
- The browser will style HTML documents sing an internal stylesheet. <br>
  This ensures that headings are larger than normal text, <br>
  links and highlighted and structures such as lists and tables are understandle

#### CSS Syntax 
* CSS is a rule-based language, you define the rules specifying groups 
  of stles applied to particular elements or groups of elements on your web.

### How to Add CSS
* The three wys to insert CSS
<ul>
 <li> External CSS </li>
 <li> Internal CSS </li>
 <li> Inline CSS </li>
 </ul>

 #### External CSS
  * With an external stylesheet, you can change the look <br>
    of an entire website by changing just one file.

  * It canbe written in any text editor, and must be saved with a .css extension. <br>
    The external .css file shold not contain any HTML tags.

  * **Example**: "mystyle.css" 

  #### Internal CSS
  * An intrenal style sheet may be used if one single HTML <br>
    page has a unique style.

 #### Inline CSS 
  * An inline style may be used to apply a unique style for a single element.

  ### Selectors

  * **Basic selectors** are fundamental selectors; these are the most basic <br>
    selectors that are frequently combined to create other, more complex selectors. 

  <ul>
   <li> Universal selector *, ns|*, *|*, |* </li>
   <li> Type selector elementname </li>
   <li> Class selector .classname </li>
   <li> ID selector #idname </li>
   <li> Attribute selector [attr=value] </li>
   </ul> 

   #### What is Color Property in CSS?
   * The color CSS property sets the foreground color value <br>
    of an element's text and text decorations, and sets the <currentcolor> value.
   
   * Currentcolor may be used as an indirect value on other properties and is the 
     default for other color properties, such as border-color. 
    
   
   ### Combinators
    * Combinators are selectors that establish a relationship between two <br>
      or more simple selectors, such as "A is a child of B" or "A is adjacent to B."

     
      #### Different Combinators
      <ul>
        <li> Adjacent sibling combinator A + B </li>
        <li> General sibling combinator A ~ B </li>
        <li> Child combinator A > B </li>
        <li> Descendant combinator A B </li>
        <li> Column combinator A || B </li>
        </ul> 


        ### Reset CSS 
        * A reset stylesheet is a collection of CSS rules <br>
          used to clear the formatting of HTML elements. 