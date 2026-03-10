# Feature-Policy: payment

Source: https://devdocs.io/http/headers/feature-policy/payment

# Feature-Policy: payment

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header field's payment directive controls whether the current document is allowed to use the Payment Request API. When this policy is disabled, the PaymentRequest() constructor will throw a SyntaxError DOMException.

## Syntax

```
Feature-Policy: payment <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The payment feature's default allowlist value is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header field
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/payment
