# <output>: The Output element

Source: https://devdocs.io/html/reference/elements/output

The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.

## Attributes

This element includes the global attributes.

A space-separated list of other elements' ids, indicating that those elements contributed input values to (or otherwise affected) the calculation.

The <form> element to associate the output with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <output> is associated with its ancestor <form> element, if any.)

This attribute lets you associate <output> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. The <output> element's name and content are not submitted when the form is submitted.

The element's name. Used in the form.elements API.

The <output> value, name, and contents are NOT submitted during form submission.

## Accessibility

Many browsers implement this element as an aria-live region. Assistive technology will thereby announce the results of UI interactions posted inside it without requiring that focus is switched away from the controls that produce those results.

## Examples

In the following example, the form provides a slider whose value can range between 0 and 100, and an <input> element into which you can enter a second number. The two numbers are added together, and the result is displayed in the <output> element each time the value of any of the controls changes.

```
<form id="example-form">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

```
const form = document.getElementById("example-form");
const a = form.elements["a"];
const b = form.elements["b"];
const result = form.elements["result"];

function updateResult() {
  const aValue = a.valueAsNumber;
  const bValue = b.valueAsNumber;
  result.value = aValue + bValue;
}

form.addEventListener("input", updateResult);

updateResult();
```

### Result

## Technical summary

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output
