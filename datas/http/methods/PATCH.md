# PATCH

Source: https://devdocs.io/http/methods/patch

# PATCH

The PATCH applies partial modifications to a resource.

PATCH is somewhat analogous to the "update" concept found in CRUD (in general, HTTP is different than CRUD, and the two should not be confused).

A PATCH request is considered a set of instructions on how to modify a resource. Contrast this with PUT; which is a complete representation of a resource.

A PATCH is not necessarily idempotent, although it can be. Contrast this with PUT; which is always idempotent. The word "idempotent" means that any number of repeated, identical requests will leave the resource in the same state. For example if an auto-incrementing counter field is an integral part of the resource, then a PUT will naturally overwrite it (since it overwrites everything), but not necessarily so for PATCH.

PATCH (like POST) may have side-effects on other resources.

To find out whether a server supports PATCH, a server can advertise its support by adding it to the list in the Allow or Access-Control-Allow-Methods (for CORS) response headers.

Another (implicit) indication that PATCH is allowed, is the presence of the Accept-Patch header, which specifies the patch document formats accepted by the server.

## Syntax

```
PATCH /file.txt HTTP/1.1
```

## Example

### Request

```
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### Response

A successful response is indicated by any 2xx status code.

In the example below a 204 response code is used, because the response does not carry a payload body. A 200 response could have contained a payload body.

```
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## Specifications

## See also

- 204
- Allow, Access-Control-Allow-Methods
- Accept-Patch – specifies the patch document formats accepted by the server.

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
