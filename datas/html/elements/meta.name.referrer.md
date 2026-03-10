# <meta name="referrer">

Source: https://devdocs.io/html/reference/elements/meta/name/referrer

The referrer value for the name attribute of the <meta> element controls the HTTP Referer header of requests sent from the document. If specified, you define the referrer using a content attribute in the <meta> element as a keyword value.

For example, the following <meta> element sends the origin of the document as the referrer:

```
<meta name="referrer" content="origin" />
```

Warning: Dynamically inserting <meta name="referrer"> (with document.write() or appendChild()) makes the referrer behavior unpredictable. When several conflicting policies are defined, the no-referrer policy is applied.

## Usage notes

A <meta name="referrer"> element has the following additional attributes:

Sets the document referrer. You must define this attribute. Accepts one of the following values:

Does not send an HTTP Referer header.

Sends the origin of the document.

Sends the full URL when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but sends no referrer when it's less secure (HTTPS→HTTP). This is the default behavior.

Sends the full URL (stripped of parameters) for same-origin requests, but only sends the origin for other cases.

Sends the full URL (stripped of parameters) for same-origin requests. Cross-origin requests will contain no referrer header.

Sends the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but sends no referrer when it's less secure (HTTPS→HTTP).

Sends the full URL (stripped of parameters) for same-origin requests. Sends the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS). Otherwise, sends no referrer.

Sends the full URL (stripped of parameters) for same-origin or cross-origin requests.

## Examples

### Removing a referrer from requests

The following <meta> element specifies that the document shouldn't send a Referer header with HTTP requests from the document:

```
<meta name="referrer" content="no-referrer" />
```

## Specifications

## Browser compatibility

## See also

- HTTP Referer header

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/referrer
