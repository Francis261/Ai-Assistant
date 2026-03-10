# DELETE

Source: https://devdocs.io/http/methods/delete

# DELETE

The DELETE deletes the specified resource.

## Syntax

```
DELETE /file.html HTTP/1.1
```

## Example

### Request

```
DELETE /file.html HTTP/1.1
Host: example.com
```

### Responses

If a DELETE method is successfully applied, there are several response status codes possible:

- A 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
- A 204 (No Content) status code if the action has been enacted and no further information is to be supplied.
- A 200 (OK) status code if the action has been enacted and the response message includes a representation describing the status.

```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## Specifications

## Browser compatibility

## See also

- HTTP status: 200, 202, 204

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE
