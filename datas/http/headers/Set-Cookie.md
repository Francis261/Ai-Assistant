# Set-Cookie

Source: https://devdocs.io/http/headers/set-cookie

# Set-Cookie

The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so that the user agent can send it back to the server later. To send multiple cookies, multiple Set-Cookie headers should be sent in the same response.

Warning: Browsers block frontend JavaScript code from accessing the Set-Cookie header, as required by the Fetch spec, which defines Set-Cookie as a forbidden response-header name that must be filtered out from any response exposed to frontend code.

For more information, see the guide on Using HTTP cookies.

## Syntax

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Attributes

Defines the cookie name and its value. A cookie definition begins with a name-value pair.

A <cookie-name> can contain any US-ASCII characters except for: the control character, space, or a tab. It also must not contain separator characters like the following: ( ) < > @ , ; : \ " / [ ] ? = { }.

A <cookie-value> can optionally be wrapped in double quotes and include any US-ASCII character excluding a control character, Whitespace, double quotes, comma, semicolon, and backslash.

Encoding: Many implementations perform URL encoding on cookie values. However, this is not required by the RFC specification. The URL encoding does help to satisfy the requirements of the characters allowed for <cookie-value>.

Note: Some <cookie-name> have a specific semantic:

__Secure-: Cookies with names starting with __Secure- (dash is part of the prefix) must be set with the secure flag from a secure page (HTTPS).

__Host-: Cookies with names starting with __Host- must be set with the secure flag, must be from a secure page (HTTPS), must not have a domain specified (and therefore, are not sent to subdomains), and the path must be /.

Indicates the maximum lifetime of the cookie as an HTTP-date timestamp. See Date for the required formatting.

If unspecified, the cookie becomes a session cookie. A session finishes when the client shuts down, after which the session cookie is removed.

Warning: Many web browsers have a session restore feature that will save all tabs and restore them the next time the browser is used. Session cookies will also be restored, as if the browser was never closed.

When an Expires date is set, the deadline is relative to the client the cookie is being set on, not the server.

Indicates the number of seconds until the cookie expires. A zero or negative number will expire the cookie immediately. If both Expires and Max-Age are set, Max-Age has precedence.

Defines the host to which the cookie will be sent.

If omitted, this attribute defaults to the host of the current document URL, not including subdomains.

Contrary to earlier specifications, leading dots in domain names (.example.com) are ignored.

Multiple host/domain values are not allowed, but if a domain is specified, then subdomains are always included.

Indicates the path that must exist in the requested URL for the browser to send the Cookie header.

The forward slash (/) character is interpreted as a directory separator, and subdirectories are matched as well. For example, for Path=/docs,

- the request paths /docs, /docs/, /docs/Web/, and /docs/Web/HTTP will all match.
- the request paths /, /docsets, /fr/docs will not match.

Indicates that the cookie is sent to the server only when a request is made with the https: scheme (except on localhost), and therefore, is more resistant to man-in-the-middle attacks.

Note: Do not assume that Secure prevents all access to sensitive information in cookies (session keys, login details, etc.). Cookies with this attribute can still be read/modified either with access to the client's hard disk or from JavaScript if the HttpOnly cookie attribute is not set.

Insecure sites (http:) cannot set cookies with the Secure attribute (since Chrome 52 and Firefox 52). For Firefox, the https: requirements are ignored when the Secure attribute is set by localhost (since Firefox 75).

Forbids JavaScript from accessing the cookie, for example, through the Document.cookie property. Note that a cookie that has been created with HttpOnly will still be sent with JavaScript-initiated requests, for example, when calling XMLHttpRequest.send() or fetch(). This mitigates attacks against cross-site scripting (XSS).

Controls whether or not a cookie is sent with cross-site requests, providing some protection against cross-site request forgery attacks (CSRF).

The possible attribute values are:

means that the browser sends the cookie only for same-site requests, that is, requests originating from the same site that set the cookie. If a request originates from a different domain or scheme (even with the same domain), no cookies with the SameSite=Strict attribute are sent.

means that the cookie is not sent on cross-site requests, such as on requests to load images or frames, but is sent when a user is navigating to the origin site from an external site (for example, when following a link). This is the default behavior if the SameSite attribute is not specified.

means that the browser sends the cookie with both cross-site and same-site requests. The Secure attribute must also be set when setting this value, like so SameSite=None; Secure

Note: Standards related to the SameSite Cookies recently changed, such that:

1. The cookie-sending behavior if SameSite is not specified is SameSite=Lax. Previously, cookies were sent for all requests by default.
2. Cookies with SameSite=None must now also specify the Secure attribute (in other words, they require a secure context).
3. Cookies from the same domain are no longer considered to be from the same site if sent using a different scheme (http: or https:).

See the Browser compatibility table for information about specific browser implementation (rows: "SameSite: Defaults to Lax", "SameSite: Secure context required", and "SameSite: URL scheme-aware ("schemeful")").

## Examples

### Session cookie

Session cookies are removed when the client shuts down. Cookies are session cookies if they do not specify the Expires or Max-Age attribute.

```
Set-Cookie: sessionId=38afes7a8
```

### Permanent cookie

Permanent cookies are removed at a specific date (Expires) or after a specific length of time (Max-Age) and not when the client is closed.

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Invalid domains

A cookie for a domain that does not include the server that set it should be rejected by the user agent.

The following cookie will be rejected if set by a server hosted on originalcompany.com:

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

A cookie for a subdomain of the serving domain will be rejected.

The following cookie will be rejected if set by a server hosted on example.com:

```
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie prefixes

Cookie names prefixed with __Secure- or __Host- can be used only if they are set with the secure attribute from a secure (HTTPS) origin.

In addition, cookies with the __Host- prefix must have a path of / (meaning any path at the host) and must not have a Domain attribute.

Warning: For clients that don't implement cookie prefixes, you cannot count on these additional assurances, and prefixed cookies will always be accepted.

```
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure attribute
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ attribute
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a Domain
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

## Specifications

## Browser compatibility

### Compatibility notes

- Starting with Chrome 52 and Firefox 52, insecure sites (http:) can't set cookies with the Secure attribute anymore.

## See also

- HTTP cookies
- Cookie
- Document.cookie
- SameSite cookies

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
