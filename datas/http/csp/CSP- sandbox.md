# CSP: sandbox

Source: https://devdocs.io/http/headers/content-security-policy/sandbox

# CSP: sandbox

The HTTP Content-Security-Policy (CSP) sandbox directive enables a sandbox for the requested resource similar to the <iframe> sandbox attribute. It applies restrictions to a page's actions including preventing popups, preventing the execution of plugins and scripts, and enforcing a same-origin policy.

## Syntax

```
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

where <value> can optionally be one of the following values:

Allows for downloads after the user clicks a button or link.

Allows for downloads to occur without a gesture from the user.

Allows the page to submit forms. If this keyword is not used, this operation is not allowed.

Allows the page to open modal windows.

Allows the page to disable the ability to lock the screen orientation.

Allows the page to use the Pointer Lock API.

Allows popups (like from window.open, target="_blank", showModalDialog). If this keyword is not used, that functionality will silently fail.

Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them. This will allow, for example, a third-party advertisement to be safely sandboxed without forcing the same restrictions upon the page the ad links to.

Allows embedders to have control over whether an iframe can start a presentation session.

Allows the content to be treated as being from its normal origin. If this keyword is not used, the embedded content is treated as being from a unique origin.

Allows the page to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed.

Lets the resource request access to the parent's storage capabilities with the Storage Access API.

Allows the page to navigate (load) content to the top-level browsing context. If this keyword is not used, this operation is not allowed.

Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.

Allows navigations toward non-fetch schemes to be handed off to external software.

## Examples

```
Content-Security-Policy: sandbox allow-scripts;
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- sandbox attribute on <iframe> elements

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox
