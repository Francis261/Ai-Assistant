# HTML contenteditable global attribute

Source: https://devdocs.io/html/reference/global_attributes/contenteditable

The contenteditable global attribute is an enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing.

## Try it

```
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>

<cite contenteditable="true">-- Write your own name here</cite>
```

```
blockquote {
  background: #eeeeee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}

cite {
  margin: 16px 32px;
  font-weight: bold;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

[contenteditable="true"] {
  caret-color: red;
}
```

## Value

The attribute must take one of the following values:

- true or an empty string, which indicates that the element is editable.
- false, which indicates that the element is not editable.
- plaintext-only, which indicates that the element's raw text is editable, but rich text formatting is disabled.

If the attribute is given without a value, like <label contenteditable>Example Label</label>, its value is treated as an empty string.

If this attribute is missing or its value is invalid, its value is inherited from its parent element: so the element is editable if its parent is editable.

Note that although its allowed values include true and false, this attribute is an enumerated one and not a Boolean one.

You can set the color used to draw the text insertion caret with the CSS caret-color property.

Elements that are made editable, and therefore interactive, by using the contenteditable attribute can be focused. They participate in sequential keyboard navigation. However, elements with the contenteditable attribute nested within other contenteditable elements are not added to the tabbing sequence by default. You can add the nested contenteditable elements to the keyboard navigation sequence by specifying the tabindex value (tabindex="0").

If content is pasted into an element with contenteditable="true", all formatting is retained. If content is pasted into an element with contenteditable="plaintext-only", all formatting is removed.

## Examples

### Pasting content into contenteditable

This example has two <div> elements with contenteditable, the first with the value true and the second with the value plaintext-only. Copy the content below and paste it into each div to see their effects.

#### HTML

```
<h2>Pasting areas</h2>
<section class="pasting">
  <div class="wrapper">
    <h3>contenteditable="true"</h3>
    <div contenteditable="true"></div>
  </div>
  <div class="wrapper">
    <h3>contenteditable="plaintext-only"</h3>
    <div contenteditable="plaintext-only"></div>
  </div>
</section>
```

## Specifications

## Browser compatibility

## See also

- All global attributes
- HTMLElement.contentEditable and HTMLElement.isContentEditable
- The CSS caret-color property
- HTMLElement input event

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable
