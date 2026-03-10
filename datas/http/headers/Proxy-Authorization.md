# Proxy-Authorization

Source: https://devdocs.io/http/headers/proxy-authorization

# Proxy-Authorization

The HTTP Proxy-Authorization request header contains the credentials to authenticate a user agent to a proxy server, usually after the server has responded with a 407 Proxy Authentication Required status and the Proxy-Authenticate header.

## Syntax

```
Proxy-Authorization: <type> <credentials>
```

## Directives

Authentication type. A common type is "Basic". See also the IANA registry of Authentication schemes.

The credentials are constructed like this:

- The username and the password are combined with a colon (aladdin:opensesame).
- The resulting string is base64 encoded (YWxhZGRpbjpvcGVuc2VzYW1l).

Note: Base64 encoding does not mean encryption or hashing! This method is as secure as sending the credentials in clear text (base64 is a reversible encoding). It is preferable to use HTTPS in conjunction with Basic Authentication.

## Examples

```
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

## Specifications

## See also

- HTTP authentication
- Proxy-Authenticate
- WWW-Authenticate
- Authorization
- 401, 403, 407

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization
