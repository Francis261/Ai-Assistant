# rel="noopener"

Source: https://devdocs.io/html/reference/attributes/rel/noopener

The noopener keyword for the rel attribute of the <a>, <area>, and <form> elements instructs the browser to navigate to the target resource without granting the new browsing context access to the document that opened it — by not setting the Window.opener property on the opened window (it returns null).

This is especially useful when opening untrusted links, in order to ensure they cannot tamper with the originating document via the Window.opener property (see About rel=noopener for more details), while still providing the Referer HTTP header (unless noreferrer is used as well).

Note that when noopener is used, nonempty target names other than _top, _self, and _parent are all treated like _blank in terms of deciding whether to open a new window/tab.

Note: Setting target="_blank" on <a>, <area> and <form> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener.

## Specifications

## Browser compatibility

### html.elements.a.rel.noopener

### html.elements.area.rel.noopener

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener
