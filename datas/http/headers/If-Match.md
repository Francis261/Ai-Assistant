# If-Match

Source: https://devdocs.io/http/headers/if-match

# If-Match

The If-Match HTTP request header makes a request conditional.

A server will only return requested resources for GET and HEAD methods, or upload resource for PUT and other non-safe methods, if the resource matches one of the listed ETag values. If the conditional does not match then the 412 (Precondition Failed) response is returned.

The comparison with the stored ETag uses the strong comparison algorithm, meaning two files are considered identical byte by byte only. If a listed ETag has the W/ prefix indicating a weak entity tag, this comparison algorithm will never match it.

There are two common use cases:

- For GET and HEAD methods, used in combination with a Range header, it can guarantee that the new ranges requested come from the same resource as the previous one.
- For other methods, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched.

## Syntax

```
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## Directives

Entity tags uniquely representing the requested resources. They are a string of ASCII characters placed between double quotes (like "675af34563dc-tr34"). They may be prefixed by W/ to indicate that they are "weak", i.e. that they represent the resource semantically but not byte-by-byte. However, in an If-Match header, weak entity tags will never match.

The asterisk is a special value representing any resource. Note that this must match as false if the origin server does not have a current representation for the target resource.

## Examples

```
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## Specifications

## Browser compatibility

## See also

- ETag
- If-Unmodified-Since
- If-Modified-Since
- If-None-Match
- 412 Precondition Failed
- 416 Range Not Satisfiable

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match
