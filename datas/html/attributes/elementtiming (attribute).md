# HTML attribute: elementtiming

Source: https://devdocs.io/html/reference/attributes/elementtiming

The elementtiming attribute is used to indicate that an element is flagged for tracking by PerformanceObserver objects using the "element" type. For more details, see the PerformanceElementTiming interface.

This attribute may be applied to <img>, <image> elements inside an <svg>, poster images of <video> elements, elements which have a background-image, and elements containing text nodes, such as a <p>.

In the DOM, this attribute is reflected as Element.elementTiming.

## Usage notes

The value given for elementtiming becomes an identifier for the observed element.

```
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

Good contenders for elements you might want to observe are:

- The main image for an article.
- A blog post title
- Images in a carousel for a shopping site.
- The poster image for the main video on a page.

## Examples

```
<img
  alt="Alt for a main blog post image"
  src="my-massive-image.jpg"
  elementtiming="Main image" />

<p elementtiming="important-text">Some very important information.</p>
```

## See also

- PerformanceElementTiming
- Element.elementTiming

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/elementtiming
