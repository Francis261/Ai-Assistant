# CSP: Sources

Source: https://devdocs.io/http/headers/content-security-policy/sources

# CSP source values

HTTP Content-Security-Policy (CSP) header directives that specify a <source> from which resources may be loaded can use any one of the values listed below. Relevant directives include the fetch directives, along with others listed below.

## Sources

Internet host by name or IP address. The URL scheme, port number, and path are optional. Wildcards ('*') can be used for subdomains, host address, and port number, indicating that all legal values of each are valid. When matching schemes, secure upgrades are allowed (e.g. specifying http://example.com will match https://example.com). Examples:

- http://*.example.com: Matches all attempts to load from any subdomain of example.com. Also matches https resources.
- mail.example.com:443: Matches all attempts to load from port 443 on mail.example.com.
- https://store.example.com: Matches all attempts to access store.example.com using https:.
- *.example.com: Matches all attempts to load from any subdomain of example.com.
- https://*.example.com:12/path/to/file.js: Matches all attempts to load from any subdomain of example.com using https: on port 12, and only if the path is /path/to/file.js.
- ws://example.com: Matches all attempts to load from example.com using ws:. Also matches wss resources.

A scheme such as http: or https:. The colon is required. Unlike other values below, single quotes shouldn't be used. You can also specify data schemes (not recommended).

- data: Allows data: URLs to be used as a content source. This is insecure; an attacker can also inject arbitrary data: URLs. Use this sparingly and definitely not for scripts.
- mediastream: Allows mediastream: URIs to be used as a content source.
- blob: Allows blob: URIs to be used as a content source.
- filesystem: Allows filesystem: URIs to be used as a content source.

Note: if a scheme source is missing, the document origin's scheme is used. Secure upgrades are allowed, so if the document is loaded using https:, then example.com will match https://example.com but not http://example.com. For more information, see CSP Level 3.

Refers to the origin from which the protected document is being served, including the same URL scheme and port number. You must include the single quotes. Some browsers specifically exclude blob and filesystem from source directives. Sites needing to allow these content types can specify them using the Data attribute.

Allows the use of eval() and other unsafe methods for creating code from strings. You must include the single quotes.

Allows the loading and execution of WebAssembly modules without the need to also allow unsafe JavaScript execution via 'unsafe-eval'. The single quotes are required.

Allows enabling specific inline event handlers. If you only need to allow inline event handlers and not inline <script> elements or javascript: URLs, this is a safer method than using the unsafe-inline expression.

Allows the use of inline resources, such as inline <script> elements, javascript: URLs, inline event handlers, and inline <style> elements. The single quotes are required.

Refers to the empty set; that is, no URLs match. The single quotes are required.

An allow-list for specific inline scripts using a cryptographic nonce (number used once). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide an unguessable nonce, as bypassing a resource's policy is otherwise trivial. See unsafe inline script for an example. Specifying nonce makes a modern browser ignore 'unsafe-inline' which could still be set for older browsers without nonce support.

Note: The CSP nonce source can only be applied to nonceable elements (e.g., as the <img> element has no nonce attribute, there is no way to associate it with this CSP source).

A sha256, sha384 or sha512 hash of scripts or styles. This value consists of the algorithm used to create the hash followed by a hyphen and the base64-encoded hash of the script or style. When generating the hash, exclude <script> or <style> tags and note that capitalization and whitespace matter, including leading or trailing whitespace. In CSP 2.0, hash sources can be applied to inline scripts and styles. Hash source expressions are allowed in CSP 3.0 for external scripts in script-src directives. See the script-src and style-src pages for more information and examples.

The strict-dynamic source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any allow-list or source expressions such as 'self' or 'unsafe-inline' are ignored. See script-src for an example.

Requires a sample of the violating code to be included in the violation report.

## Relevant directives

Directives for which the above sources apply include:

- Fetch directives (all):
  - default-src
  - child-src
  - connect-src
  - font-src
  - frame-src
  - img-src
  - manifest-src
  - media-src
  - object-src
  - prefetch-src
  - script-src
  - script-src-elem
  - script-src-attr
  - style-src, style-src-elem
  - style-src-attr
  - worker-src
- Document directives:
  - base-uri
- Navigation directives:
  - navigate-to
  - form-action

- default-src
- child-src
- connect-src
- font-src
- frame-src
- img-src
- manifest-src
- media-src
- object-src
- prefetch-src
- script-src
- script-src-elem
- script-src-attr
- style-src, style-src-elem
- style-src-attr
- worker-src

- base-uri

- navigate-to
- form-action

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources
