# <meta name="theme-color">

Source: https://devdocs.io/html/reference/elements/meta/name/theme-color

The theme-color value for the name attribute of the <meta> element indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface. If specified, you define a theme color using a content attribute in the <meta> element as a CSS <color> value.

For example, to indicate that a document should use cornflowerblue as a theme color, set the <meta> as:

```
<meta name="theme-color" content="cornflowerblue" />
```

To set the media to which the theme color metadata applies, include the media attribute with a valid media query list (see the theme-color media query example).

## Usage notes

A <meta name="theme-color"> element has the following additional attributes:

A <meta> element with name=theme-color must have a content attribute that defines the theme color. The value of content attribute is as follows:

A valid color value, such as hexadecimal, RGB, named color, etc.

Any valid media type or query. If provided, the options for the document's theme color defined in the content attribute are suggested to the browser when the media query matches.

## Examples

### Setting a color value

Consider the following code that uses <meta> to set a theme color:

```
<meta name="theme-color" content="#4285f4" />
```

The following image shows the effect of this setting in Chrome on an Android mobile device:

Image credit: from Icons & Browser Colors, created and shared by Google and used according to terms described in the Creative Commons 4.0 Attribution License.

### Using a media query with theme-color

You can provide a media type or query inside the media attribute. The theme-color will then only be set if the media condition is true. For example:

```
<meta
  name="theme-color"
  content="cornflowerblue"
  media="(prefers-color-scheme: light)" />
<meta
  name="theme-color"
  content="dimgray"
  media="(prefers-color-scheme: dark)" />
```

## Specifications

## Browser compatibility

## See also

- <meta> name attribute color-scheme value
- color-scheme CSS property
- prefers-color-scheme media query

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color
