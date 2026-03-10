# Link

Source: https://devdocs.io/http/headers/link

# Link

The HTTP Link entity-header field provides a means for serializing one or more links in HTTP headers. It is semantically equivalent to the HTML <link> element.

## Syntax

```
Link: <uri-reference>; param1=value1; param2="value2"
```

The URI reference, must be enclosed between < and > and percent encoded.

### Parameters

The link header contains parameters, which are separated with ; and are equivalent to attributes of the <link> element.

## Examples

The URI (absolute or relative) must be enclosed between < and >:

```
Link: <https://example.com>; rel="preconnect"
```

```
Link: https://bad.example; rel="preconnect"
```

### Encoding URLs

The URI (absolute or relative) must encode char codes greater than 255:

```
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```
Link: <https://example.com/苗条>; rel="preconnect"
```

### Specifying multiple links

You can specify multiple links separated by commas, for example:

```
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Specifications

No specification data found for http.headers.Link.Check for problems with this page or contribute a missing spec_url to mdn/browser-compat-data. Also make sure the specification is included in w3c/browser-specs.

## Browser compatibility

No compatibility data found for http.headers.Link.Check for problems with this page or contribute missing data to mdn/browser-compat-data.

## See also

- 103 Early Hints
- <link>

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link
