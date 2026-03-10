# <head>: The Document Metadata (Header) element

Source: https://devdocs.io/html/reference/elements/head

The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets. There can be only one <head> element in an HTML document.

Note: <head> primarily holds information for machine processing, not human-readability. For human-visible information, like top-level headings and listed authors, see the <header> element.

## Attributes

This element includes the global attributes.

The URIs of one or more metadata profiles, separated by white space.

## Examples

```
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Document title</title>
  </head>
</html>
```

## Technical summary

If the document is an <iframe> srcdoc document, or if title information is available from a higher level protocol (like the subject line in HTML email), zero or more elements of metadata content.

Otherwise, one or more elements of metadata content where exactly one is a <title> element.

## Specifications

## Browser compatibility

## See also

- Elements that can be used inside the <head>:
  - <title>
  - <base>
  - <link>
  - <style>
  - <meta>
  - <script>
  - <noscript>
  - <template>

- <title>
- <base>
- <link>
- <style>
- <meta>
- <script>
- <noscript>
- <template>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head
