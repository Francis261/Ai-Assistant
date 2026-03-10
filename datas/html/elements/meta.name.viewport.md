# <meta name="viewport">

Source: https://devdocs.io/html/reference/elements/meta/name/viewport

The viewport value for the name attribute of a <meta> element gives hints about the initial size of the viewport. If specified, you define viewport-related behaviors using a content attribute in the <meta> element as a comma-separated list of one or more values.

For example, to set the viewport to match the device's width and display content at 100% zoom:

```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Usage notes

A <meta name="viewport"> element has the following additional attributes:

The content attribute must be defined, and its value sets various viewport-related behaviors. Accepts one or more of the following keywords in a comma-separated list:

Defines the pixel width of the viewport that you want the website to be rendered at. It can be a positive whole number or the keyword device-width.

Defines the height of the viewport. It can be a positive whole number or the keyword device-height. This is not used by any browser.

Defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size. It can be a number between 0.0 and 10.0.

Defines the maximum amount to zoom in. It must be greater or equal to the minimum-scale or the behavior is undefined. Browser settings can ignore this rule, and iOS10+ ignores it by default. It can be a number between 0.0 and 10.0.

Defines the minimum zoom level. It must be smaller or equal to the maximum-scale or the behavior is undefined. Browser settings can ignore this rule, and iOS10+ ignores it by default. It can be a number between 0.0 and 10.0.

A boolean indicating if the user can zoom the web page. Browser settings can ignore this rule, and iOS10+ ignores it by default. It can be either yes or no, defaulting to yes.

Warning: Disabling zooming capabilities by setting user-scalable to a value of no prevents people experiencing low vision conditions from being able to read and understand page content.

- MDN Understanding WCAG, Guideline 1.4 explanations
- Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0

Specifies the effect that interactive UI widgets, such as virtual keyboards, have on a page's viewport. It can be the keyword resizes-visual, resizes-content, or overlays-content.

- resizes-visual: The visual viewport gets resized by the interactive widget. This is the default.
- resizes-content: The viewport gets resized by the interactive widget.
- overlays-content: Neither the viewport nor the visual viewport gets resized by the interactive widget.

Defines the viewable portions of the web page. It can be one of the keywords auto, contain, or cover.

- auto: Doesn't affect the initial layout viewport, and the whole web page is viewable.
- contain: The viewport is scaled to fit the largest rectangle inscribed within the display.
- cover: The viewport is scaled to fill the device display. It's highly recommended to use the safe area inset variables to ensure that important content doesn't end up outside the display.

## Examples

### Using a meta viewport size

The following example indicates to the browser that the page should be rendered at the device width:

```
<meta name="viewport" content="width=device-width" />
```

### Using a media query with a viewport meta

The following content value uses multiple keywords that hint to the browser to use fullscreen mode, along with viewport-fit, which helps avoid display cutouts such as mobile device notches:

```
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

## Specifications

## Browser compatibility

## See also

- viewport glossary term

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport
