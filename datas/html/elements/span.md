# <span>: The Content Span element

Source: https://devdocs.io/html/reference/elements/span

The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline-level element.

## Try it

```
<p>
  Add the <span class="ingredient">basil</span>,
  <span class="ingredient">pine nuts</span> and
  <span class="ingredient">garlic</span> to a blender and blend into a paste.
</p>

<p>
  Gradually add the <span class="ingredient">olive oil</span> while running the
  blender slowly.
</p>
```

```
span.ingredient {
  color: red;
}
```

## Attributes

This element only includes the global attributes.

## Example

### Example 1

#### HTML

```
<p><span>Some text</span></p>
```

#### Result

### Example 2

#### HTML

```
<li>
  <span>
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span>
</li>
```

#### CSS

```
li span {
  background: gold;
}
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- HTML <div> element

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span
