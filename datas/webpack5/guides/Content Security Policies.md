# Content Security Policies

Source: https://devdocs.io/webpack~5/guides/csp

Webpack is capable of adding a nonce to all scripts that it loads. To activate this feature, set a __webpack_nonce__ variable and include it in your entry script. A unique hash-based nonce will then be generated and provided for each unique page view (this is why __webpack_nonce__ is specified in the entry file and not in the configuration). Please note that the __webpack_nonce__ should always be a base64-encoded string.

## Examples

In the entry file:

```
// ...
__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';
// ...
```

## Enabling CSP

Please note that CSPs are not enabled by default. A corresponding header Content-Security-Policy or meta tag <meta http-equiv="Content-Security-Policy" ...> needs to be sent with the document to instruct the browser to enable the CSP. Here's an example of what a CSP header including a CDN white-listed URL might look like:

```
Content-Security-Policy: default-src 'self'; script-src 'self'
https://trusted.cdn.com;
```

For more information on CSP and nonce attribute, please refer to Further Reading section at the bottom of this page.

## Trusted Types

Webpack is also capable of using Trusted Types to load dynamically constructed scripts, to adhere to CSP require-trusted-types-for directive restrictions. See output.trustedTypes configuration option.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/csp
