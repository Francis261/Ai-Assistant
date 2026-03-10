# Feature-Policy: publickey-credentials-get

Source: https://devdocs.io/http/headers/feature-policy/publickey-credentials-get

# Feature-Policy: publickey-credentials-get

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header publickey-credentials-get directive controls whether the current document is allowed to access the Web Authentication API to retrieve public-key credentials; i.e., via navigator.credentials.get({publicKey: ..., ...}).

When this policy is enabled, any attempt to query public key credentials will result in an error.

## Syntax

```
Feature-Policy: publickey-credentials-get <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The default allowlist is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy
- Web Authentication API
- PublicKeyCredential interface

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/publickey-credentials-get
