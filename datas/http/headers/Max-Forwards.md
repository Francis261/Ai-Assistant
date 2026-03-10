# Max-Forwards

Source: https://devdocs.io/http/headers/max-forwards

# Max-Forwards

The Max-Forwards request HTTP header is used with the TRACE method to limit the number of nodes (usually proxies) that request goes through. Its value is an integer value indicating the maximum amount of nodes it must visit. At each node, the value is decremented and the TRACE request is forwarded to the next node, until the destination is reached, or the received value of Max-Forwards is zero. The request is then sent back, except for some headers, as the body of a 200 OK response.

If the Max-Forwards header is not present in a TRACE request, a node will assume that there is no maximum number of forwards.

## Syntax

```
Max-Forwards: <integer>
```

## Examples

```
Max-Forwards: 0
Max-Forwards: 10
```

## Specifications

## Browser compatibility

## See also

- The HTTP TRACE method

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards
