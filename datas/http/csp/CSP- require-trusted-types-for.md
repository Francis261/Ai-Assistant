# CSP: require-trusted-types-for

Source: https://devdocs.io/http/headers/content-security-policy/require-trusted-types-for

# CSP: require-trusted-types-for

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Content-Security-Policy (CSP) require-trusted-types-for Experimental directive instructs user agents to control the data passed to DOM XSS sink functions, like Element.innerHTML setter.

When used, those functions only accept non-spoofable, typed values created by Trusted Type policies, and reject strings. Together with trusted-types directive, which guards creation of Trusted Type policies, this allows authors to define rules guarding writing values to the DOM and thus reducing the DOM XSS attack surface to small, isolated parts of the web application codebase, facilitating their monitoring and code review.

## Syntax

```
Content-Security-Policy: require-trusted-types-for 'script';
```

Disallows using strings with DOM XSS injection sink functions, and requires matching types created by Trusted Type policies.

## Examples

```
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const attackerInput = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement('div');

if (typeof trustedTypes !== 'undefined') {
  // Create a policy that can create TrustedHTML values
  // after sanitizing the input strings with DOMPurify library.
  const sanitizer = trustedTypes.createPolicy('foo', {
    createHTML: (input) => DOMPurify.sanitize(input)
  });

  el.innerHTML = sanitizer.createHTML(attackerInput);  // Puts the sanitized value into the DOM.
  el.innerHTML = attackerInput;                        // Rejects a string value; throws a TypeError.
}
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- Cross-Site Scripting (XSS)
- DOM XSS injection sinks covered by Trusted Types
- Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types
- Trusted Types with DOMPurify XSS sanitizer
- Trusted Types polyfill

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
