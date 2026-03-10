# PUT

Source: https://devdocs.io/http/methods/put

# PUT

The PUT creates a new resource or replaces a representation of the target resource with the request payload.

The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), whereas successive identical POST requests may have additional effects, akin to placing an order several times.

## Syntax

```
PUT /new.html HTTP/1.1
```

## Example

### Request

```
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### Responses

If the target resource does not have a current representation and the PUT request successfully creates one, then the origin server must inform the user agent by sending a 201 (Created) response.

```
HTTP/1.1 201 Created
Content-Location: /new.html
```

If the target resource does have a current representation and that representation is successfully modified in accordance with the state of the enclosed representation, then the origin server must send either a 200 (OK) or a 204 (No Content) response to indicate successful completion of the request.

```
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Specifications

## Browser compatibility

## See also

- 201
- 204

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT
