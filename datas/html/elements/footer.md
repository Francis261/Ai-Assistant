# <footer>: The Footer element

Source: https://devdocs.io/html/reference/elements/footer

The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents.

## Try it

```
<article>
  <h1>How to be a wizard</h1>
  <ol>
    <li>Grow a long, majestic beard.</li>
    <li>Wear a tall, pointed hat.</li>
    <li>Have I mentioned the beard?</li>
  </ol>
  <footer>
    <p>© 2018 Gandalf</p>
  </footer>
</article>
```

```
article {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

footer {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #45a1ff;
  color: white;
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

- Enclose information about the author in an <address> element that can be included into the <footer> element.
- When the nearest ancestor sectioning content or sectioning root element is the body element the footer applies to the whole page.
- The <footer> element is not sectioning content and therefore doesn't introduce a new section in the outline.

## Accessibility

Prior to the release of Safari 13, the contentinfo landmark role was not properly exposed by VoiceOver. If needing to support legacy Safari browsers, add role="contentinfo" to the footer element to ensure the landmark will be properly exposed.

- Related: WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't

## Examples

```
<body>
  <h3>FIFA World Cup top goalscorers</h3>
  <ol>
    <li>Miroslav Klose, 16</li>
    <li>Ronaldo Nazário, 15</li>
    <li>Gerd Müller, 14</li>
  </ol>

  <footer>
    <small>
      Copyright © 2023 Football History Archives. All Rights Reserved.
    </small>
  </footer>
</body>
```

```
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: black;
}
```

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other section-related elements: <body>, <nav>, <article>, <aside>, h1, h2, h3, h4, h5, h6, <hgroup>, <header>, <section>, <address>;
- Using HTML sections and outlines
- ARIA: Contentinfo role

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer
