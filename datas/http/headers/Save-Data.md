# Save-Data

Source: https://devdocs.io/http/headers/save-data

# Save-Data

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Save-Data network client hint request header field is a boolean which indicates the client's preference for reduced data usage. This could be for reasons such as high transfer costs, slow connection speeds, etc.

Save-Data is a low entropy hint, and hence may be sent by the client even if not requested by the server using an Accept-CH response header. Further, it should be used to reduce data sent to the client irrespective of the values of other client hints that indicate network capability, like Downlink and RTT.

A value of On indicates explicit user opt-in into a reduced data usage mode on the client, and when communicated to origins allows them to deliver alternative content to reduce the data downloaded such as smaller image and video resources, different markup and styling, disabled polling and automatic updates, and so on.

Note: Disabling HTTP/2 Server Push (RFC 7540, section 8.2: Server Push) might be desirable too for reducing data downloads.

## Syntax

```
Save-Data: <sd-token>
```

## Directives

A value indicating whether the client wants to opt in to reduced data usage mode. on indicates yes, while off (the default) indicates no.

## Examples

The Vary header ensures that the content is cached properly (for instance ensuring that the user is not served a lower-quality image from the cache when Save-Data header is no longer present [e.g. after having switched from cellular to Wi-Fi]).

### With Save-Data: on

Request:

```
GET /image.jpg HTTP/1.0
Host: example.com
Save-Data: on
```

Response:

```
HTTP/1.0 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Without Save-Data

Request:

```
GET /image.jpg HTTP/1.0
Host: example.com
```

Response:

```
HTTP/1.0 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

## Specifications

## Browser compatibility

## See also

- Help Your Users Save-Data - CSS Tricks
- Delivering Fast and Light Applications with Save-Data - web.dev
- Vary header which indicates that the content served varies depending on the value of Save-Data (see HTTP Caching > Varying responses)
- CSS @media feature prefers-reduced-data Experimental
- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- NetworkInformation.saveData

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data
