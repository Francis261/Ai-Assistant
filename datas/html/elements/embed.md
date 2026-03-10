# <embed>: The Embed External Content element

Source: https://devdocs.io/html/reference/elements/embed

The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.

## Try it

```
<embed
  type="image/jpeg"
  src="/shared-assets/images/examples/flowers.jpg"
  width="250"
  height="200" />
```

Note: This topic documents only the element that is defined as part of the HTML Living Standard. It does not address earlier, non-standardized implementation of the element.

Keep in mind that most modern browsers have deprecated and removed support for browser plug-ins, so relying upon <embed> is generally not wise if you want your site to be operable on the average user's browser.

## Attributes

This element's attributes include the global attributes.

The displayed height of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed.

The URL of the resource being embedded.

The MIME type to use to select the plug-in to instantiate.

The displayed width of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed.

## Usage notes

You can use the object-position property to adjust the positioning of the embedded object within the element's frame.

Note: The object-fit property has no effect on <embed> elements.

## Accessibility

Use the title attribute on an embed element to label its content so that people navigating with assistive technology such as a screen reader can understand what it contains. The title's value should concisely describe the embedded content. Without a title, they may not be able to determine what its embedded content is. This context shift can be confusing and time-consuming, especially if the embed element contains interactive content like video or audio.

## Examples

```
<embed
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Title of my video" />
```

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other elements that are used for embedding content of various types include <audio>, <canvas>, <iframe>, <img>, <math>, <object>, <svg>, and <video>.
- Positioning and sizing the embedded content within its frame: object-position and object-fit

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed
