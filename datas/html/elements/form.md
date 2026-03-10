# <form>: The Form element

Source: https://devdocs.io/html/reference/elements/form

The <form> HTML element represents a document section containing interactive controls for submitting information.

## Try it

```
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

```
form.form-example {
  display: table;
}

div.form-example {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}
```

It is possible to use the :valid and :invalid CSS pseudo-classes to style a <form> element based on whether the elements inside the form are valid.

## Attributes

This element includes the global attributes.

Comma-separated content types the server accepts.

Note: This attribute has been deprecated and should not be used. Instead, use the accept attribute on <input type=file> elements.

The character encoding accepted by the server. The specification allows a single case-insensitive value of "UTF-8", reflecting the ubiquity of this encoding (historically multiple character encodings could be specified as a comma-separated or space-separated list).

Controls whether inputted text is automatically capitalized and, if so, in what manner. See the autocapitalize global attribute page for more information.

Indicates whether input elements can by default have their values automatically completed by the browser. autocomplete attributes on form elements override it on <form>. Possible values:

- off: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see Managing autofill for login fields.)
- on: The browser may automatically complete entries.

The name of the form. The value must not be the empty string, and must be unique among the form elements in the forms collection that it is in, if any. The name becomes a property of the Window, Document, and document.forms objects, containing a reference to the form element.

Controls the annotations and what kinds of links the form creates. Annotations include external, nofollow, opener, noopener, and noreferrer. Link types include help, prev, next, search, and license. The rel value is a space-separated list of these enumerated values.

### Attributes for form submission

The following attributes control behavior during form submission.

The URL that processes the form submission. This value can be overridden by a formaction attribute on a <button>, <input type="submit">, or <input type="image"> element. This attribute is ignored when method="dialog" is set.

If the value of the method attribute is post, enctype is the MIME type of the form submission. Possible values:

- application/x-www-form-urlencoded: The default value.
- multipart/form-data: Use this if the form contains <input> elements with type=file.
- text/plain: Useful for debugging purposes.

This value can be overridden by formenctype attributes on <button>, <input type="submit">, or <input type="image"> elements.

The HTTP method to submit the form with. The only allowed methods/values are (case insensitive):

- post: The POST method; form data sent as the request body.
- get (default): The GET; form data appended to the action URL with a ? separator. Use this method when the form has no side effects.
- dialog: When the form is inside a <dialog>, closes the dialog and causes a submit event to be fired on submission, without submitting data or clearing the form.

This value is overridden by formmethod attributes on <button>, <input type="submit">, or <input type="image"> elements.

This Boolean attribute indicates that the form shouldn't be validated when submitted. If this attribute is not set (and therefore the form is validated), it can be overridden by a formnovalidate attribute on a <button>, <input type="submit">, or <input type="image"> element belonging to the form.

Indicates where to display the response after submitting the form. It is a name/keyword for a browsing context (for example, tab, window, or iframe). The following keywords have special meanings:

- _self (default): Load into the same browsing context as the current one.
- _blank: Load into a new unnamed browsing context. This provides the same behavior as setting rel="noopener" which does not set window.opener.
- _parent: Load into the parent browsing context of the current one. If no parent, behaves the same as _self.
- _top: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as _self.
- _unfencedTop: Load the response from a form inside an embedded fenced frame into the top-level frame (i.e., traversing beyond the root of the fenced frame, unlike other reserved destinations). Only available inside fenced frames.

This value can be overridden by a formtarget attribute on a <button>, <input type="submit">, or <input type="image"> element.

## Examples

```
<!-- Form which will send a GET request to the current URL -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- HTML forms guide
- Other elements that are used when creating forms: <button>, <datalist>, <fieldset>, <input>, <label>, <legend>, <meter>, <optgroup>, <option>, <output>, <progress>, <select>, <textarea>.
- Getting a list of the elements in the form: HTMLFormElement.elements
- ARIA: Form role
- ARIA: Search role

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form
