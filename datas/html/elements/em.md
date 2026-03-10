# <em>: The Emphasis element

Source: https://devdocs.io/html/reference/elements/em

The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.

## Try it

```
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```
em {
  /* Add your styles here */
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

The <em> element is for words that have a stressed emphasis compared to surrounding text, which is often limited to a word or words of a sentence and affects the meaning of the sentence itself.

Typically this element is displayed in italic type. However, it should not be used to apply italic styling; use the CSS font-style property for that purpose. Use the <cite> element to mark the title of a work (book, play, song, etc.). Use the <i> element to mark text that is in an alternate tone or mood, which covers many common situations for italics such as scientific names or words in other languages. Use the <strong> element to mark text that has greater importance than surrounding text.

### <i> vs. <em>

Some developers may be confused by how multiple elements seemingly produce similar visual results. <em> and <i> are a common example, since they both italicize text. What's the difference? Which should you use?

By default, the visual result is the same. However, the semantic meaning is different. The <em> element represents stress emphasis of its contents, while the <i> element represents text that is set off from the normal prose, such as a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. (The title of a work, such as the name of a book or movie, should use <cite>.)

This means the right one to use depends on the situation. Neither is for purely decorative purposes, that's what CSS styling is for.

Examples for <em> could be:

```
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

A person or software reading the text would pronounce the words in italics with an emphasis, using verbal stress.

Examples for <i> could be:

```
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

Here, there is no added emphasis or importance on the word "Queen Mary". It is merely indicated that the object in question is not a queen named Mary but a ship named "Queen Mary".

## Examples

In this example, the <em> element is used to highlight an implicit or explicit contrast between two ingredient lists:

```
<p>
  Ice cream is made with milk, sweetener, and cream. Frozen custard, on the
  other hand, is made of milk, cream, sweetener, and <em>egg yolks</em>.
</p>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <i>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em
