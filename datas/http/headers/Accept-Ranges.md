# Accept-Ranges

Source: https://devdocs.io/http/headers/accept-ranges

# Accept-Ranges

The Accept-Ranges HTTP response header is a marker used by the server to advertise its support for partial requests from the client for file downloads. The value of this field indicates the unit that can be used to define a range.

In the presence of an Accept-Ranges header, the browser may try to resume an interrupted download instead of trying to restart the download.

## Syntax

```
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Directives

Defines the range unit that the server supports. Though bytes is the only range unit formally defined by RFC 7233, additional range units may be registered in theHTTP Range Unit Registry.

Indicates that no range unit is supported. This makes the header equivalent of its own absence and is therefore, rarely used. Although in some browsers, like IE9, this setting is used to disable or remove the pause buttons in the download manager.

## Examples

```
Accept-Ranges: bytes
```

## Specifications

## Browser compatibility

## See also

- If-Range
- Range
- IANA HTTP Range Unit Registry

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges
