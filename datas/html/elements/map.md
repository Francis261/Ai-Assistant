# <map>: The Image Map element

Source: https://devdocs.io/html/reference/elements/map

The <map> HTML element is used with <area> elements to define an image map (a clickable link area).

## Try it

```
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info2.png"
  alt="MDN infographic" />
```

```
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 232px;
}
```

## Attributes

This element includes the global attributes.

The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be equal to the value of the name attribute of another <map> element in the same document. If the id attribute is also specified, both attributes must have the same value.

## Examples

### Image map with two areas

Click the left-hand parrot for JavaScript, or the right-hand parrot for CSS.

#### HTML

```
<!-- Photo by Juliana e Mariana Amorim on Unsplash -->
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
  <area
    shape="circle"
    coords="275,75,75"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
</map>
<img
  usemap="#primary"
  src="parrots.jpg"
  alt="350 x 150 picture of two parrots" />
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <a>
- <area>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map
