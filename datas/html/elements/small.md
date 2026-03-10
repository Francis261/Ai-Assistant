# <small>: The Side Comment element

Source: https://devdocs.io/html/reference/elements/small

The <small> HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.

## Try it

```
<p>
  MDN Web Docs is a learning platform for Web technologies and the software that
  powers the Web.
</p>

<hr />

<p>
  <small
    >The content is licensed under a Creative Commons Attribution-ShareAlike 2.5
    Generic License.</small
  >
</p>
```

```
small {
  font-size: 0.7em;
}
```

## Attributes

This element only includes the global attributes.

## Examples

### Basic usage

```
<p>
  This is the first sentence.
  <small>This whole sentence is in small letters.</small>
</p>
```

#### Result

### CSS alternative

```
<p>
  This is the first sentence.
  <span class="small">This whole sentence is in small letters.</span>
</p>
```

```
.small {
  font-size: 0.8em;
}
```

#### Result

## Notes

Although the <small> element, like the <b> and <i> elements, may be perceived to violate the principle of separation between structure and presentation, all three are valid in HTML. Authors are encouraged to use their best judgement when determining whether to use <small> or CSS.

## Technical summary

## Specifications

## Browser compatibility

## See also

- <b>
- <sub> and <sup>
- <font>
- <style>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/small
