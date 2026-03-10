# Authorization

Source: https://devdocs.io/http/headers/authorization

# Authorization

The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to a protected resource.

The Authorization header is usually, but not always, sent after the user agent first attempts to request a protected resource without credentials. The server responds with a 401 Unauthorized message that includes at least one WWW-Authenticate header. This header indicates what authentication schemes can be used to access the resource (and any additional information needed by the client to use them). The user-agent should select the most secure authentication scheme that it supports from those offered, prompt the user for their credentials, and then re-request the resource (including the encoded credentials in the Authorization header).

Note: This header is part of the General HTTP authentication framework. It can be used with a number of authentication schemes.

## Syntax

```
Authorization: <auth-scheme> <authorization-parameters>
```

Basic authentication

```
Authorization: Basic <credentials>
```

Digest authentication

```
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## Directives

The Authentication scheme that defines how the credentials are encoded. Some of the more common types are (case-insensitive): Basic, Digest, Negotiate and AWS4-HMAC-SHA256.

Note: For more information/options see HTTP Authentication > Authentication schemes

Other than <auth-scheme> the remaining directives are specific to each authentication scheme. Generally you will need to check the relevant specifications for these (keys for a small subset of schemes are listed below).

### Basic

The credentials, encoded according to the specified scheme.

Note: For information about the encoding algorithm, see the examples: below, in WWW-Authenticate, in HTTP Authentication, and in the relevant specifications.

### Digest

A string of the hex digits that proves that the user knows a password. The algorithm encodes the username and password, realm, cnonce, qop, nc, and so on. It is described in detail in the specification.

A quoted string containing user's name for the specified realm in either plain text or the hash code in hexadecimal notation. If the name contains characters that aren't allowed in the field, then username* can be used instead (not "as well").

The user's name formatted using an extended notation defined in RFC5987. This should be used only if the name can't be encoded in username and if userhash is set "false".

The Effective Request URI. See the specification for more information.

Realm of the requested username/password (again, should match the value in the corresponding WWW-Authenticate response for the resource being requested).

The value in the corresponding WWW-Authenticate response for the resource being requested.

The algorithm used to calculate the digest. Must be a supported algorithm from the WWW-Authenticate response for the resource being requested.

A token indicating the quality of protection applied to the message. Must match the one value in the set specified in the WWW-Authenticate response for the resource being requested.

- "auth": Authentication
- "auth-int": Authentication with integrity protection

An quoted ASCII-only string value provided by the client. This is used by both the client and server to provide mutual authentication, provide some message integrity protection, and avoid "chosen plaintext attacks". See the specification for additional information.

Nonce count. The hexadecimal count of requests in which the client has sent the current cnonce value (including the current request). The server can use duplicate nc values to recognize replay requests.

"true" if the username has been hashed. "false" by default.

## Examples

### Basic authentication

For "Basic" authentication the credentials are constructed by first combining the username and the password with a colon (aladdin:opensesame), and then by encoding the resulting string in base64 (YWxhZGRpbjpvcGVuc2VzYW1l).

```
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Warning: Base64-encoding can easily be reversed to obtain the original name and password, so Basic authentication is completely insecure. HTTPS is always recommended when using authentication, but is even more so when using Basic authentication.

See also HTTP authentication for examples on how to configure Apache or Nginx servers to password protect your site with HTTP basic authentication.

## Specifications

## Browser compatibility

## See also

- HTTP authentication
- WWW-Authenticate
- Proxy-Authorization
- Proxy-Authenticate
- 401, 403, 407

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
