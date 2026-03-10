# <aside>: The Aside element

Source: https://devdocs.io/html/reference/elements/aside

The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.

## Try it

```
<p>
  Salamanders are a group of amphibians with a lizard-like appearance, including
  short legs and a tail in both larval and adult forms.
</p>

<aside>
  <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>
  Several species of salamander inhabit the temperate rainforest of the Pacific
  Northwest, including the Ensatina, the Northwestern Salamander and the
  Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects,
  worms and other small creatures.
</p>
```

```
aside {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
}

aside > p {
  margin: 0.5rem;
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

- Do not use the <aside> element to tag parenthesized text, as this kind of text is considered part of the main flow.

## Examples

### Using <aside>

This example uses <aside> to mark up a paragraph in an article. The paragraph is only indirectly related to the main article content:

```
<article>
  <p>
    The Disney movie <cite>The Little Mermaid</cite> was first released to
    theatres in 1989.
  </p>
  <aside>
    <p>The movie earned $87 million during its initial release.</p>
  </aside>
  <p>More info about the movie…</p>
</article>
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other section-related elements: <body>, <article>, <section>, <nav>, h1, h2, h3, h4, h5, h6, <hgroup>, <header>, <footer>, <address>;
- Using HTML sections and outlines
- ARIA: Complementary role

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside
