# <var>: The Variable element

Source: https://devdocs.io/html/reference/elements/var

The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.

## Try it

```
<p>
  The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where
  <var>l</var> represents the length, <var>w</var> the width and
  <var>h</var> the height of the box.
</p>
```

```
var {
  font-weight: bold;
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

### Related elements

Other elements that are used in contexts in which <var> is commonly used include:

- <code>: The HTML Code element
- <kbd>: The HTML Keyboard input element
- <samp>: The HTML Sample Output element

If you encounter code that is mistakenly using <var> for style purposes rather than semantic purposes, you should either use a <span> with appropriate CSS or, an appropriate semantic element among the following:

- <em>
- <i>
- <q>

### Default style

Most browsers apply font-style to "italic" when rendering <var>. This can be overridden in CSS, like this:

```
var {
  font-style: normal;
}
```

## Examples

### Basic example

Here's a basic example, using <var> to denote variable names in a mathematical equation.

```
<p>An algebraic equation: <var>x</var> = <var>y</var> + 2</p>
```

#### Result

### Overriding the default style

Using CSS, you can override the default style for the <var> element. In this example, variable names are rendered in bold, using Courier if it's available, otherwise it falls back to the default monospace font.

#### CSS

```
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```
<p>
  The variables <var>minSpeed</var> and <var>maxSpeed</var> control the minimum
  and maximum speed of the apparatus in revolutions per minute (RPM).
</p>
```

This HTML uses <var> to enclose the names of two variables.

#### Result

## Technical summary

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/var
