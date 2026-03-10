# <data>: The Data element

Source: https://devdocs.io/html/reference/elements/data

The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used.

## Try it

```
<p>New Products:</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

```
data:hover::after {
  content: " (ID " attr(value) ")";
  font-size: 0.7em;
}
```

## Attributes

This element's attributes include the global attributes.

This attribute specifies the machine-readable translation of the content of the element.

## Examples

The following example displays product names but also associates each name with a product number.

```
<p>New Products</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- The HTML <time> element.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/data
