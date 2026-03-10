# Sec-CH-UA

Source: https://devdocs.io/http/headers/sec-ch-ua

# Sec-CH-UA

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Sec-CH-UA user agent client hint request header provides the user-agent's branding and significant version information.

The Sec-CH-UA header provides the brand and significant version for each brand associated with the browser in a comma-separated list.

A brand is a commercial name for the user agent like: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox, and Safari. A user agent might have several associated brands. For example, Opera, Chrome, and Edge are all based on Chromium, and will provide both brands in the Sec-CH-UA header.

The significant version is the "marketing" version identifier that is used to distinguish between major releases of the brand. For example a Chromium build with full version number "96.0.4664.45" has a significant version number of "96".

The header therefore allows the server to customize its response based on both shared brands and on particular customizations in their respective versions.

Sec-CH-UA is a low entropy hint. Unless blocked by a user agent permission policy, it is sent by default, without the server opting in by sending Accept-CH.

The header may include "fake" brands in any position and with any name. This is a feature designed to prevent servers from rejecting unknown user agents outright, forcing user agents to lie about their brand identity.

Note: Sec-CH-UA-Full-Version-List is the same as Sec-CH-UA, but includes the full version number rather than the significant version number for each brand.

## Syntax

A comma separated list of brands in the user agent brand list, and their associated significant version number. The syntax for a single entry has the following format:

```
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### Directives

A brand associated with the user agent, like "Chromium", "Google Chrome", or an intentionally incorrect brand like "Not A;Brand".

The "marketing" version number associated with distinguishable web-exposed features.

## Examples

Sec-CH-UA is a low entropy hint. Unless explicitly blocked by a user agent policy, it will be sent in all requests (without the server having to opt in by sending Accept-CH).

Strings from Chromium, Chrome, Edge, and Opera desktop browsers are shown below. Note that they all share the "Chromium" brand, but have an additional brand indicating their origin. They also have an intentionally incorrect brand string, which may appear in any position and have different text.

```
Sec-CH-UA: "(Not(A:Brand";v="8", "Chromium";v="98"
```

```
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
```

```
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
```

```
Sec-CH-UA: "Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"
```

## Specifications

## Browser compatibility

## See also

- Client hints
- User-Agent Client Hints API
- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Accept-CH
- HTTP Caching > Varying responses and Vary

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA
