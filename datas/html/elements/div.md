# <div>: The Content Division element

Source: https://devdocs.io/html/reference/elements/div

The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).

## Try it

```
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```
.warning {
  border: 10px ridge red;
  background-color: yellow;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

As a "pure" container, the <div> element does not inherently represent anything. Instead, it's used to group content so it can be easily styled using the class or id attributes, marking a section of a document as being written in a different language (using the lang attribute), and so on.

## Attributes

This element includes the global attributes.

Note: The align attribute is obsolete; do not use it anymore. Instead, you should use CSS properties or techniques such as CSS Grid or CSS Flexbox to align and position <div> elements on the page.

## Usage notes

- The <div> element should be used only when no other semantic element (such as <article> or <nav>) is appropriate.

## Accessibility

The <div> element has an implicit role of generic, and not none. This may affect certain ARIA combination declarations that expect a direct descendant element with a certain role to function properly.

## Examples

### A basic example

```
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```

#### Result

### A styled example

This example creates a shadowed box by applying a style to the <div> using CSS. Note the use of the class attribute on the <div> to apply the style named "shadowbox" to the element.

#### HTML

```
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a lovely shadowed box.</p>
</div>
```

#### CSS

```
.shadowbox {
  width: 15em;
  border: 1px solid #333333;
  box-shadow: 8px 8px 5px #444444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, white, #dddddd 40%, #cccccc);
}
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Semantic sectioning elements: <section>, <article>, <nav>, <header>, <footer>
- <span> element for styling of phrasing content

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
