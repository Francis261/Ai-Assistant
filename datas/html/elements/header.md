# <header>: The Header element

Source: https://devdocs.io/html/reference/elements/header

The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

## Try it

```
<header>
  <a class="logo" href="#">Cute Puppies Express!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snugly soft!
  </p>
</article>
```

```
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: black 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## Usage notes

When not nested within sectioning content, <main>, or an element with the same ARIA role as these elements' implicit ARIA role, then the <header> element has an identical meaning to the site-wide banner landmark role. It define a global site header, which usually includes a logo, company name, search feature, and possibly the global navigation or a slogan. It is generally located at the top of the page.

Otherwise, when nested within said elements, it loses its landmark status and represents a group of introductory or navigational aids for the surrounding section. It usually contains the surrounding section's heading (an h1 – h6 element) and optional subheading, but this is not required.

### Historical Usage

The <header> element originally existed at the very beginning of HTML for headings. It is seen in the very first website. At some point, headings became <h1> through <h6>, allowing <header> to be free to fill a different role.

## Attributes

This element only includes the global attributes.

## Accessibility

The <header> element defines a banner landmark when its context is the <body> element.

When placed inside an <article>, <main>, <section>, <nav>, <aside>, or an element with the same ARIA role as these elements' implicit ARIA role, the <header> element has the generic role instead, and is no longer considered a landmark. In this case, it cannot be labeled with aria-label or aria-labelledby.

## Examples

### Page Header

```
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### Result

### Article Header

```
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by
      Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Continue reading…</a></p>
</article>
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other section-related elements: <body>, <nav>, <article>, <aside>, h1, h2, h3, h4, h5, h6, <footer>, <section>, <address>.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header
