# Cookie

Source: https://devdocs.io/http/headers/cookie

# Cookie

The Cookie HTTP request header contains stored HTTP cookies associated with the server (i.e. previously sent by the server with the Set-Cookie header or set in JavaScript using Document.cookie).

The Cookie header is optional and may be omitted if, for example, the browser's privacy settings block cookies.

## Syntax

```
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Directives

A list of name-value pairs in the form of <cookie-name>=<cookie-value>. Pairs in the list are separated by a semicolon and a space ('; ').

## Examples

```
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Specifications

## Browser compatibility

## See also

- Set-Cookie
- Document.cookie

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
