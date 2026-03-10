# <del>: The Deleted Text element

Source: https://devdocs.io/html/reference/elements/del

The <del> HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document.

## Try it

```
<blockquote>
  There is <del>nothing</del> <ins>no code</ins> either good or bad, but
  <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

```
del {
  text-decoration: line-through;
  background-color: #ffbbbb;
  color: #555555;
}

ins {
  text-decoration: none;
  background-color: #d4fcbc;
}

blockquote {
  padding-left: 15px;
  border-left: 3px solid #d7d7db;
  font-size: 1rem;
}
```

This element is often (but need not be) rendered by applying a strike-through style to the text.

## Attributes

This element's attributes include the global attributes.

A URI for a resource that explains the change (for example, meeting minutes).

This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see Date strings. The format of the string if it includes both date and time is covered in Local date and time strings.

## Accessibility

The presence of the del element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS content property, along with the ::before and ::after pseudo-elements.

```
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [deletion start] ";
}

del::after {
  content: " [deletion end] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been deleted would adversely affect understanding.

- Short note on making your mark (more accessible) | The Paciello Group
- Tweaking Text Level Styles | Adrian Roselli

## Examples

```
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <ins> element for insertions into a text
- <s> element for strikethrough separate from representing deletion of text

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del
