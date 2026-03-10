# Warning

Source: https://devdocs.io/http/headers/warning

# Warning

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The Warning HTTP header contains information about possible problems with the status of the message. More than one Warning header may appear in a response.

Warning header fields can, in general, be applied to any message. However, some warn-codes are specific to caches and can only be applied to response messages.

## Syntax

```
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Directives

A three-digit warning number. The first digit indicates whether the Warning is required to be deleted from a stored response after validation.

- 1xx warn-codes describe the freshness or validation status of the response and will be deleted by a cache after deletion.
- 2xx warn-codes describe some aspect of the representation that is not rectified by a validation and will not be deleted by a cache after validation unless a full response is sent.

The name or pseudonym of the server or software adding the Warning header (might be "-" when the agent is unknown).

An advisory text describing the error.

A date. This is optional. If more than one Warning header is sent, include a date that matches the Date header.

## Warning codes

The HTTP Warn Codes registry at iana.org defines the namespace for warning codes.

## Examples

```
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## Specifications

## Browser compatibility

## See also

- Date
- HTTP response status codes

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning
