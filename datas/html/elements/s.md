# <s>: The Strikethrough element

Source: https://devdocs.io/html/reference/elements/s

The <s> HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate.

## Try it

```
<p><s>There will be a few tickets available at the box office tonight.</s></p>

<p>SOLD OUT!</p>
```

```
s {
  /* Add your styles here */
}
```

## Attributes

This element only includes the global attributes.

## Accessibility

The presence of the s element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS content property, along with the ::before and ::after pseudo-elements.

```
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [start of stricken text] ";
}

s::after {
  content: " [end of stricken text] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been struck out would adversely affect understanding.

- Short note on making your mark (more accessible) | The Paciello Group
- Tweaking Text Level Styles | Adrian Roselli

## Examples

```
.sold-out {
  text-decoration: line-through;
}
```

```
<s>Today's Special: Salmon</s> SOLD OUT<br />
<span class="sold-out">Today's Special: Salmon</span> SOLD OUT
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- The <strike> element, alter ego of the <s> element, is obsolete and should not be used on websites anymore.
- The <del> element is to be used instead if the data has been deleted.
- The CSS text-decoration-line property is to be used to achieve the former visual aspect of the <s> element.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/s
