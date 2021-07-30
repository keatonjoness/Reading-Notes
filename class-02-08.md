# Forms and Events


ADDING TEXT:
Text input (single-line) : <input type="text" name=" " maxlength = "" size="" > When the type attribute has a value of text, it creates a singleline , name When users enter information into a form, the server needs to know which form control each piece of data was entered into. maxlengthIts value is the number of characters they may enter. The size attribute should not be used on new forms. It was used in older forms to indicate the width of the text input

Password input : type="password"

Text area (multi-line): <textarea> Any text that appears between the opening <textarea> and closing </textarea> tags will appear in the text box when the page loads.

Making Choices:

Radio buttons : type="radio" The value attribute indicates the value that is sent to the server for the selected option, The checked attribute can be used to indicate which value

Checkboxes :type="checkbox"

Drop-down boxes :The <select> element is used to create a drop down list box. It contains two or more <option> elements. The selected attribute can be used to indicate the option that should be selected when the page loads.

* Submitting Forms:
<ol>
<li>Submit buttons :type="submit" The submit button is used to send a form to the server.</li>

<li>Image buttons :type="image"</li>
</ol>

* Uploading Files:

File upload : type="file" This type of input creates a box that looks like a text input followed by a browse button.


* Button and hidden

Button :The <button> element was introduced to allow users more control over how their buttons appear, and to allow other elements to appear inside the button.

hidden :type="hidden" This example also shows a hidden form control. These form controls are not shown on the page (although you can see them if you use 
the View Source option in the browser). They allow web page authors to add values to forms that users cannot see.

* Labelling Form Controls : element can be used in two ways. It can:

Wrap around both the text description and the form input.

Be kept separate from the form control and use the for attribute to indicate which form control it is a label for .
for The for attribute states which form control the label belongs.

* Grouping Form Elements

<fieldset> You can group related form controls together inside the <fieldset> element. This is particularly helpful for longer forms.

The <legend> element can come directly after the opening <fieldset> tag and contains a caption which helps identify the purpose of that group of form controls.