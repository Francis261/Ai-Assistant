# <hgroup>: The Heading Group element

Source: https://devdocs.io/html/reference/elements/hgroup

The <hgroup> HTML element represents a heading and related content. It groups a single <h1>–<h6> element with one or more <p>.

## Try it

```
<hgroup>
  <h1>Frankenstein</h1>
  <p>Or: The Modern Prometheus</p>
</hgroup>
<p>
  Victor Frankenstein, a Swiss scientist, has a great ambition: to create
  intelligent life. But when his creature first stirs, he realizes he has made a
  monster. A monster which, abandoned by his master and shunned by everyone who
  sees it, follows Dr Frankenstein to the very ends of the earth.
</p>
```

```
hgroup {
  text-align: right;
  padding-right: 16px;
  border-right: 10px solid #00c8d7;
}

hgroup h1 {
  margin-bottom: 0;
}

hgroup p {
  margin: 0;
  font-weight: bold;
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

The <hgroup> element allows the grouping of a heading with any secondary content, such as subheadings, an alternative title, or tagline. Each of these types of content represented as a <p> element within the <hgroup>.

The <hgroup> itself has no impact on the document outline of a web page. Rather, the single allowed heading within the <hgroup> contributes to the document outline.

## Examples

```
<!doctype html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML: Living Standard</h1>
    <p>Last Updated 12 July 2022</p>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id="toc">
    …
  </ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Others section-related elements: <body>, <article>, <section>, <aside>, h1, h2, h3, h4, h5, h6, <nav>, <header>, <footer>, <address>;
- Sections and outlines of an HTML document.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hgroup
