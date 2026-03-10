# HTML attribute: readonly

Source: https://devdocs.io/html/reference/attributes/readonly

The Boolean readonly attribute, when present, makes the element not mutable, meaning the user can not edit the control.

## Try it

```
<label for="firstName">First Name:</label>
<input id="firstName" name="firstName" type="text" value="Adam" />

<label for="age">Age:</label>
<input id="age" name="age" type="number" value="42" readonly />

<label for="hobbies">Hobbies:</label>
<textarea id="hobbies" name="hobbies" readonly>Baseball</textarea>
```

```
label {
  display: block;
  margin-top: 1em;
}

input:read-only,
textarea:read-only {
  background-color: silver;
}
```

## Overview

If the readonly attribute is specified on an input element, because the user can not edit the input, the element does not participate in constraint validation.

The readonly attribute is supported by textual form controls, including:

- <input> elements of type:
  - text
  - search
  - tel
  - url
  - email
  - password
  - date
  - month
  - week
  - time
  - datetime-local
  - number
- <textarea>

- text
- search
- tel
- url
- email
- password
- date
- month
- week
- time
- datetime-local
- number

The attribute is not relevant to all other elements, including <select> and <button>. It also does not apply to non-textual input elements, including:

- hidden
- range
- color
- checkbox
- radio
- file
- submit
- image
- reset
- button

Inputs that support the readonly attribute but don't have the attribute set match the :read-write pseudo-class. All other elements match the :read-only pseudo-class.

### Attribute interactions

The difference between disabled and readonly is that read-only controls can still function and are still focusable, whereas disabled controls can not receive focus and are not submitted with the form and generally do not function as controls until they are enabled.

Because a read-only field cannot have its value changed by a user interaction, required does not have any effect on inputs with the readonly attribute also specified.

The only way to modify dynamically the value of the readonly attribute is through a script.

Note: The required attribute is not permitted on inputs with the readonly attribute specified.

### Usability

Browsers display the readonly attribute.

### Constraint validation

If the element is read-only, then the element's value can not be updated by the user, and does not participate in constraint validation.

## Example

### HTML

```
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text" />
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email" />
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd" />
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Message</label>
</div>
```

### Result

## Specifications

## Browser compatibility

### html.elements.input.readonly

### html.elements.textarea.readonly

## See also

- :read-only and :read-write
- <input>
- <select>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly
