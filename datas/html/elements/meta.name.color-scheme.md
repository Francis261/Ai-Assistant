# <meta name="color-scheme">

Source: https://devdocs.io/html/reference/elements/meta/name/color-scheme

The color-scheme value for the name attribute of the <meta> element indicates a suggested color scheme that user agents should use for a page. If specified, you define the color scheme using a content attribute in the <meta> element with a valid CSS color-scheme value.

The theme color works at the document level in the same way that the CSS color-scheme property specifies the preferred and accepted color schemes of individual elements. The primary use for <meta name="color-scheme"> is to indicate compatibility and order of preference for light and dark color modes. For example, to indicate that a document prefers dark mode but also supports light mode:

```
<meta name="color-scheme" content="dark light" />
```

Your styles can adapt to the current color scheme using the prefers-color-scheme CSS media feature.

## Usage notes

A <meta name="color-scheme"> element has the following additional attributes:

A <meta> element with name=color-scheme must have a content attribute that defines the color scheme as a CSS color-scheme value. The content attribute may be one of the following:

The document is unaware of color schemes and should be rendered using the default color palette.

One or more color schemes supported by the document. Multiple color schemes indicates that the first scheme is preferred by the document, but that the second scheme is acceptable if the user prefers it. Specifying the same color scheme multiple times has the same effect as specifying it once.

Indicates that the document only supports light mode, with a light background and dark foreground colors. only dark is invalid, because forcing a document to render in dark mode when it isn't compatible can result in unreadable content and all major browsers default to light mode if not otherwise configured.

Any valid media type or query. If provided, the options for the document's color scheme defined in the content attribute are suggested to the browser when the media query matches. This is mostly useful for the prefers-color-scheme CSS media feature.

## Examples

### Using a color-scheme keyword

The following example indicates to the browser that the page supports both light and dark themes. Whether the light or dark color scheme is used depends on user preferences such as OS-level settings or the browser settings:

```
<meta name="color-scheme" content="light dark" />
```

## Specifications

## Browser compatibility

## See also

- color-scheme CSS property
- prefers-color-scheme media query

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/color-scheme
