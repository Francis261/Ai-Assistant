# Access-Control-Allow-Origin

Source: https://devdocs.io/http/headers/access-control-allow-origin

# Access-Control-Allow-Origin

The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.

## Syntax

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Directives

For requests without credentials, the literal value "*" can be specified as a wildcard; the value tells browsers to allow requesting code from any origin to access the resource. Attempting to use the wildcard with credentials results in an error.

Specifies an origin. Only a single origin can be specified. If the server supports clients from multiple origins, it must return the origin for the specific client making the request.

Specifies the origin "null".

Note: null should not be used: "It may seem safe to return Access-Control-Allow-Origin: "null", but the serialization of the Origin of any resource that uses a non-hierarchical scheme (such as data: or file:) and sandboxed documents is defined to be "null". Many User Agents will grant such documents access to a response with an Access-Control-Allow-Origin: "null" header, and any origin can create a hostile document with a "null" Origin. The "null" value for the ACAO header should therefore be avoided."

## Examples

A response that tells the browser to allow code from any origin to access a resource will include the following:

```
Access-Control-Allow-Origin: *
```

A response that tells the browser to allow requesting code from the origin https://developer.mozilla.org to access a resource will include the following:

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Limiting the possible Access-Control-Allow-Origin values to a set of allowed origins requires code on the server side to check the value of the Origin request header, compare that to a list of allowed origins, and then if the Origin value is in the list, set the Access-Control-Allow-Origin value to the same value as the Origin value.

### CORS and caching

Suppose the server sends a response with an Access-Control-Allow-Origin value with an explicit origin (rather than the "*" wildcard). In that case, the response should also include a Vary response header with the value Origin — to indicate to browsers that server responses can differ based on the value of the Origin request header.

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Specifications

## Browser compatibility

## See also

- Origin
- Vary
- Cross-Origin Resource Sharing (CORS)
- Cross-Origin-Resource-Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
