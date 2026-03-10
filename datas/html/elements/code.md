# <code>: The Inline Code element

Source: https://devdocs.io/html/reference/elements/code

The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.

## Try it

```
<p>
  The <code>push()</code> method adds one or more elements to the end of an
  array and returns the new length of the array.
</p>
```

```
code {
  background-color: #eeeeee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
}
```

## Attributes

This element only includes the global attributes.

## Examples

A paragraph of text that includes <code>:

```
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

### Result

## Notes

To represent multiple lines of code, wrap the <code> element within a <pre> element. The <code> element by itself only represents a single phrase of code or line of code.

A CSS rule can be defined for the code selector to override the browser's default font face. Preferences set by the user might take precedence over the specified CSS.

## Technical summary

## Specifications

## Browser compatibility

## See also

- <samp>
- <kbd>
- <var>
- <pre>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code
