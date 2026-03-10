# CSP: trusted-types

Source: https://devdocs.io/http/headers/content-security-policy/trusted-types

# CSP: trusted-types

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Content-Security-Policy (CSP) trusted-types Experimental directive instructs user agents to restrict the creation of Trusted Types policies - functions that build non-spoofable, typed values intended to be passed to DOM XSS sinks in place of strings.

Together with require-trusted-types-for directive, this allows authors to define rules guarding writing values to the DOM and thus reducing the DOM XSS attack surface to small, isolated parts of the web application codebase, facilitating their monitoring and code review. This directive declares an allow-list of trusted type policy names created with trustedTypes.createPolicy from Trusted Types API.

## Syntax

```
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

A valid policy name consists only of alphanumeric characters, or one of "-#=_/@.%". A star (*) as a policy name instructs the user agent to allow any unique policy name ('allow-duplicates' may relax that further).

Disallows creating any Trusted Type policy (same as not specifying any <policyName>).

Allows for creating policies with a name that was already used.

## Examples

```
// Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

if (typeof trustedTypes !== 'undefined') {
  const policyFoo = trustedTypes.createPolicy('foo', {});
  const policyFoo2 = trustedTypes.createPolicy('foo', {});
  const policyBaz = trustedTypes.createPolicy('baz', {}); // Throws and dispatches a SecurityPolicyViolationEvent.
}
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- Cross-Site Scripting (XSS)
- Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types
- Trusted Types with DOMPurify XSS sanitizer
- Trusted Types polyfill

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
