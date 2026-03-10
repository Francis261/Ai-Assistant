# Using HTML form validation and the Constraint Validation API

Source: https://devdocs.io/html/guides/constraint_validation

The creation of web forms has always been a complex task. While marking up the form itself is easy, checking whether each field has a valid and coherent value is more difficult, and informing the user about the problem may become a headache. HTML5 introduced new mechanisms for forms: it added new semantic types for the <input> element and constraint validation to ease the work of checking the form content on the client side. Basic, usual constraints can be checked, without the need for JavaScript, by setting new attributes; more complex constraints can be tested using the Constraint Validation API.

For a basic introduction to these concepts, with examples, see the Form validation tutorial.

Note: HTML Constraint validation doesn't remove the need for validation on the server side. Even though far fewer invalid form requests are to be expected, invalid ones can still be sent in many ways:

- By modifying HTML via the browser's developer tools.
- By hand-crafting an HTTP request without using the form.
- By programmatically writing content into the form (certain constraint validations are only run for user input, and not if you set the value of a form field using JavaScript).

Therefore, you should always validate form data on the server side, consistent with what is done on the client side.

## Intrinsic and basic constraints

In HTML, basic constraints are declared in two ways:

- By choosing the most semantically appropriate value for the type attribute of the <input> element, e.g., choosing the email type automatically creates a constraint that checks whether the value is a valid email address.
- By setting values on validation-related attributes, allowing basic constraints to be described without the need for JavaScript.

### Semantic input types

The intrinsic constraints for the type attribute are:

For both of these input types, if the multiple attribute is set, several values can be set, as a comma-separated list. If any of these do not satisfy the condition described here, the Type mismatch constraint violation is triggered.

Note that most input types don't have intrinsic constraints, as some are barred from constraint validation or have a sanitization algorithm transforming incorrect values to a correct default.

### Validation-related attributes

In addition to the type attribute described above, the following attributes are used to describe basic constraints:

## Constraint validation process

Constraint validation is done through the Constraint Validation API either on a single form element or at the form level, on the <form> element itself. The constraint validation is done in the following ways:

- By a call to the checkValidity() or reportValidity() method of a form-associated DOM interface, (HTMLInputElement, HTMLSelectElement, HTMLButtonElement, HTMLOutputElement or HTMLTextAreaElement), which evaluates the constraints only on this element, allowing a script to get this information. The checkValidity() method returns a Boolean indicating whether the element's value passes its constraints. (This is typically done by the user-agent when determining which of the CSS pseudo-classes, :valid or :invalid, applies.) In contrast, the reportValidity() method reports any constraint failures to the user.
- By a call to the checkValidity() or reportValidity() method on the HTMLFormElement interface.
- By submitting the form itself.

Calling checkValidity() is called statically validating the constraints, while calling reportValidity() or submitting the form is called interactively validating the constraints.

Note:

- If the novalidate attribute is set on the <form> element, interactive validation of the constraints doesn't happen.
- Calling the submit() method on the HTMLFormElement interface doesn't trigger a constraint validation. In other words, this method sends the form data to the server even if it doesn't satisfy the constraints. Call the click() method on a submit button instead.
- The minlength and maxlength constraints are only checked on user-provided input. They are not checked if a value is set programmatically, even when explicitly calling checkValidity() or reportValidity().

## Complex constraints using the Constraint Validation API

Using JavaScript and the Constraint API, it is possible to implement more complex constraints, for example, constraints combining several fields, or constraints involving complex calculations.

Basically, the idea is to trigger JavaScript on some form field event (like onchange) to calculate whether the constraint is violated, and then to use the method field.setCustomValidity() to set the result of the validation: an empty string means the constraint is satisfied, and any other string means there is an error and this string is the error message to display to the user.

### Constraint combining several fields: Postal code validation

The postal code format varies from one country to another. Many countries allow an optional prefix with the country code (like D- in Germany, F- in France, and CH- in Switzerland). Some countries use only a fixed number of digits in postal codes, while others, like the UK, have more complex formats that allow letters at some specific positions.

Note: This is not a comprehensive postal code validation library, but rather a demonstration of the key concepts.

As an example, we will add a script checking the constraint validation for a form:

```
<form>
  <label for="postal-code">Postal Code: </label>
  <input type="text" id="postal-code" />
  <label for="country">Country: </label>
  <select id="country">
    <option value="ch">Switzerland</option>
    <option value="fr">France</option>
    <option value="de">Germany</option>
    <option value="nl">The Netherlands</option>
  </select>
  <input type="submit" value="Validate" />
</form>
```

This displays the following form:

First, we write a function checking the constraint itself:

```
const countrySelect = document.getElementById("country");
const postalCodeField = document.getElementById("postal-code");

function checkPostalCode() {
  // For each country, defines the pattern that the postal code has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Read the country id
  const country = countrySelect.value;

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Check it!
  if (constraint.test(postalCodeField.value)) {
    // The postal code follows the constraint, we use the ConstraintAPI to tell it
    postalCodeField.setCustomValidity("");
  } else {
    // The postal code doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    postalCodeField.setCustomValidity(constraints[country][1]);
  }
}
```

Then we link it to the change event for the <select> and the input event for the <input>:

```
countrySelect.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);
```

### Limiting the size of a file before its upload

Another common constraint is to limit the size of a file to be uploaded. Checking this on the client side before the file is transmitted to the server requires combining the Constraint Validation API, and especially the field.setCustomValidity() method, with another JavaScript API, here the File API.

Here is the HTML part:

```
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

This displays:

The JavaScript reads the file selected, uses the File.size() method to get its size, compares it to the (hard coded) limit, and calls the Constraint API to inform the browser if there is a violation:

```
const fs = document.getElementById("fs");

function checkFileSize() {
  const files = fs.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75 * 1000) {
      // Check the constraint
      fs.setCustomValidity("The selected file must not be larger than 75 kB");
      fs.reportValidity();
      return;
    }
  }
  // No custom constraint violation
  fs.setCustomValidity("");
}
```

Finally, we hook the method with the correct event:

```
fs.addEventListener("change", checkFileSize);
```

## Visual styling of constraint validation

Apart from setting constraints, web developers want to control what messages are displayed to the users and how they are styled.

### Controlling the look of elements

The look of elements can be controlled via CSS pseudo-classes.

#### :required and :optional CSS pseudo-classes

The :required and :optional pseudo-classes allow writing selectors that match form elements that have the required attribute, or that don't have it.

#### :placeholder-shown CSS pseudo-class

See :placeholder-shown.

#### :valid :invalid CSS pseudo-classes

The :valid and :invalid pseudo-classes are used to represent <input> elements whose content validates and fails to validate respectively according to the input's type setting. These classes allow the user to style valid or invalid form elements to make it easier to identify elements that are either formatted correctly or incorrectly.

### Controlling the text of constraint violation

The following items can help with controlling the text of a constraint violation:

- The setCustomValidity(message) method on the following elements:
  - <fieldset>. Note: Setting a custom validity message on fieldset elements will not prevent form submission in most browsers.
  - <input>
  - <output>
  - <select>
  - Submit buttons (created with either a <button> element with the submit type, or an input element with the submit type. Other types of buttons do not participate in constraint validation.
  - <textarea>
- The ValidityState interface describes the object returned by the validity property of the element types listed above. It represents various ways that an entered value can be invalid. Together, they help explain why an element's value fails to validate, if it's not valid.

The setCustomValidity(message) method on the following elements:

- <fieldset>. Note: Setting a custom validity message on fieldset elements will not prevent form submission in most browsers.
- <input>
- <output>
- <select>
- Submit buttons (created with either a <button> element with the submit type, or an input element with the submit type. Other types of buttons do not participate in constraint validation.
- <textarea>

The ValidityState interface describes the object returned by the validity property of the element types listed above. It represents various ways that an entered value can be invalid. Together, they help explain why an element's value fails to validate, if it's not valid.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation
