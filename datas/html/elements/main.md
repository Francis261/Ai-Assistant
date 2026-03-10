# <main>: The Main element

Source: https://devdocs.io/html/reference/elements/main

The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

## Try it

```
<header>Gecko facts</header>

<main>
  <p>
    Geckos are a group of usually small, usually nocturnal lizards. They are
    found on every continent except Antarctica.
  </p>

  <p>
    Many species of gecko have adhesive toe pads which enable them to climb
    walls and even windows.
  </p>
</main>
```

```
header {
  font:
    bold 7vw Arial,
    sans-serif;
}
```

A document mustn't have more than one <main> element that doesn't have the hidden attribute specified.

## Attributes

This element only includes the global attributes.

## Usage notes

The content of a <main> element should be unique to the document. Content that is repeated across a set of documents or document sections such as sidebars, navigation links, copyright information, site logos, and search forms shouldn't be included unless the search form is the main function of the page.

<main> doesn't contribute to the document's outline; that is, unlike elements such as <body>, headings such as h2, and such, <main> doesn't affect the DOM's concept of the structure of the page. It's strictly informative.

## Accessibility

### Landmark

The <main> element behaves like a main landmark role. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. Prefer using the <main> element over declaring role="main", unless there are legacy browser support concerns.

### Skip navigation

Skip navigation, also known as "skipnav", is a technique that allows an assistive technology user to quickly bypass large sections of repeated content (main navigation, info banners, etc.). This lets the user access the main content of the page faster.

Adding an id attribute to the <main> element lets it be a target of a skip navigation link.

```
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- WebAIM: "Skip Navigation" Links

### Reader mode

Browser reader mode functionality looks for the presence of the <main> element, as well as heading and content sectioning elements when converting content into a specialized reader view.

- Building websites for Safari Reader Mode and other reading apps.

## Examples

```
<!-- other content -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>…</p>
    <p>…</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>…</p>
    <p>…</p>
  </article>
</main>

<!-- other content -->
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Basic structural elements: <html>, <head>, <body>
- Section-related elements: <article>, <aside>, <footer>, <header>, or <nav>
- ARIA: Main role

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main
