# <ins>: The Inserted Text element

Source: https://devdocs.io/html/reference/elements/ins

The <ins> HTML element represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document.

## Try it

```
<p>&ldquo;You're late!&rdquo;</p>
<del>
  <p>&ldquo;I apologize for the delay.&rdquo;</p>
</del>
<ins cite="../how-to-be-a-wizard.html" datetime="2018-05">
  <p>&ldquo;A wizard is never late &hellip;&rdquo;</p>
</ins>
```

```
del,
ins {
  display: block;
  text-decoration: none;
  position: relative;
}

del {
  background-color: #ffbbbb;
}

ins {
  background-color: #d4fcbc;
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
  font-family: monospace;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

p {
  margin: 0 1.8rem;
  font-family: Georgia, serif;
  font-size: 1rem;
}
```

## Attributes

This element includes the global attributes.

This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.

This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see Format of a valid date string. The format of the string if it includes both date and time is covered in Format of a valid local date and time string.

## Accessibility

The presence of the <ins> element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS content property, along with the ::before and ::after pseudo-elements.

```
ins::before,
ins::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

ins::before {
  content: " [insertion start] ";
}

ins::after {
  content: " [insertion end] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been inserted would adversely affect understanding.

- Short note on making your mark (more accessible) | The Paciello Group
- Tweaking Text Level Styles | Adrian Roselli

## Examples

```
<ins>This text has been inserted</ins>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <del> element for marking deletion into a document

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins
