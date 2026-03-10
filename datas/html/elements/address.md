# <address>: The Contact Address element

Source: https://devdocs.io/html/reference/elements/address

The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

## Try it

```
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@example.com">jim@example.com</a><br />
  <a href="tel:+14155550132">+1 (415) 555‑0132</a>
</address>
```

```
a[href^="mailto"]::before {
  content: "📧 ";
}

a[href^="tel"]::before {
  content: "📞 ";
}
```

The contact information provided by an <address> element's contents can take whatever form is appropriate for the context, and may include any type of contact information that is needed, such as a physical address, URL, email address, phone number, social media handle, geographic coordinates, and so forth. The <address> element should include the name of the person, people, or organization to which the contact information refers.

<address> can be used in a variety of contexts, such as providing a business's contact information in the page header, or indicating the author of an article by including an <address> element within the <article>.

## Attributes

This element only includes the global attributes.

## Usage notes

- The <address> element can only be used to represent the contact information for its nearest <article> or <body> element ancestor.
- This element should not contain more information than the contact information, like a publication date (which belongs in a <time> element).
- Typically an <address> element can be placed inside the <footer> element of the current section, if any.

## Examples

This example demonstrates the use of <address> to demarcate the contact information for an article's author.

```
<address>
  You can contact author at
  <a href="http://www.example.com/contact">www.example.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@example.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### Result

Although it renders text with the same default styling as the <i> or <em> elements, it is more appropriate to use <address> when dealing with contact information, as it conveys additional semantic information.

## Technical summary

## Specifications

## Browser compatibility

## See also

- Others section-related elements: <body>, <nav>, <article>, <aside>, h1, h2, h3, h4, h5, h6, <hgroup>, <footer>, <section>, <header>;
- Sections and outlines of an HTML document.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address
