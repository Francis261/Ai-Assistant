# <selectedcontent>: The selected option display element

Source: https://devdocs.io/html/reference/elements/selectedcontent

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The <selectedcontent> HTML is used inside a <select> element to display the contents of its currently selected <option> within its first child <button>. This enables you to style all parts of a <select> element, referred to as "customizable selects".

## Attributes

This element includes the global attributes.

## Description

You use the <selectedcontent> element as the only child of a <button> element, which must be the first child of the <select> element. Any <option> element, the only other valid child of <select>, must come after the <button> and nested <selectedcontent> pair.

```
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### How <selectedcontent> works behind the scenes

The <selectedcontent> element contains a clone of the content of the currently selected <option>. The browser renders this clone using cloneNode(). When the selected <option> changes, such as during a change event, the contents of <selectedcontent> are replaced with a clone of the newly selected <option>. Being aware of this behavior is important, especially when working with dynamic content.

Warning: Since the browser updates <selectedcontent> only when the selected <option> changes, any dynamic modifications to the content of the selected <option> after the <select> is rendered won't be cloned to <selectedcontent>. You'll need to update <selectedcontent> manually. Watch out if you're using any of the popular front-end JavaScript frameworks where <option> elements are updated dynamically after the initial render–the result may not match what you expect in <selectedcontent>.

### <selectedcontent> inertness

By default, any <button> inside a <select> element is inert. As a result, all content inside that button—including <selectedcontent>—is also inert. This means users can't interact with or focus on content inside <selectedcontent>.

### Styling the selected option's content with CSS

You can target the content of the currently selected <option> element and style how it appears inside the select button. Styling the button doesn't affect the styling of the content of the <option> that was cloned. This lets you customize how the selected option appears in the button, separately from how it appears in the drop-down list.

For example, your <option> elements may contain icons, images, or even videos that render nicely inside the drop-down, but could cause the select <button> to increase in size, look untidy, and affect the surrounding layout. By targeting the content inside <selectedcontent>, you can hide elements such as images in the button, without affecting how they appear in the drop-down, as shown in the following snippet:

```
selectedcontent img {
  display: none;
}
```

Note: If the <button> and/or <selectedcontent> elements are not included inside <select>, the browser creates an implicit <button> to display the contents of the selected <option>. This fallback button cannot be targeted with CSS using the button or selectedcontent type selector.

## Examples

You can see a full example that includes the <selectedcontent> element in our Customizable select elements guide.

## Technical summary

## Specifications

## Browser compatibility

## See also

- The <select> element
- The <option> element
- The <optgroup> element
- Customizable select elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/selectedcontent
