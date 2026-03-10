# <cite>: The Citation element

Source: https://devdocs.io/html/reference/elements/cite

The <cite> HTML element is used to mark up the title of a creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.

## Try it

```
<figure>
  <blockquote>
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
  </blockquote>
  <figcaption>
    First sentence in
    <cite
      ><a href="http://www.george-orwell.org/1984/0.html"
        >Nineteen Eighty-Four</a
      ></cite
    >
    by George Orwell (Part 1, Chapter 1).
  </figcaption>
</figure>
```

```
cite {
  /* Add your styles here */
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

In the context of the <cite> element, a creative work could be, for example, one of the following:

- A book
- A research paper
- An essay
- A poem
- A musical score
- A song
- A play or film script
- A film
- A television show
- A game
- A sculpture
- A painting
- A theatrical production
- A play
- An opera
- A musical
- An exhibition
- A legal case report
- A computer program
- A website
- A web page
- A blog post or comment
- A forum post or comment
- A tweet
- A Facebook post
- A written or oral statement
- And so forth.

To include a reference to the source of quoted material which is contained within a <blockquote> or <q> element, use the cite attribute on the element.

Typically, browsers style the contents of a <cite> element in italics by default. To avoid this, apply the CSS font-style property to the <cite> element.

## Examples

```
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- The element <blockquote> for long quotations.
- The element <q> for inline quotations and the cite attribute.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite
