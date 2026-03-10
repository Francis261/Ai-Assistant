# <noframes>: The Frame Fallback element

Source: https://devdocs.io/html/reference/elements/noframes

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <noframes> HTML element provides content to be presented in browsers that don't support (or have disabled support for) the <frame> element. Although most commonly-used browsers support frames, there are exceptions, including certain special-use browsers including some mobile browsers, as well as text-mode browsers.

A <noframes> element can contain any HTML elements that are allowed within the body of an HTML document, except for the <frameset> and <frame> elements, since using frames when they aren't supported doesn't make sense.

<noframes> can be used to present a message explaining that the user's browser doesn't support frames, but ideally should be used to present an alternate form of the site that doesn't use frames but still offers the same or similar functionality.

Note: This element is obsolete and shouldn't be used, since the <frame> and <frameset> elements are also obsolete. When frames are needed at all, they should be presented using the <iframe> element.

## Attributes

Like all other HTML elements, this element supports the global attributes. It has no other attributes available.

## Example

In this example, we see a frameset with two frames. In addition, <noframes> is used to present an explanatory message if the user agent doesn't support frames.

```
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset rows="45%, 55%">
    <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
    <noframes>
      <p>
        It seems your browser does not support frames or is configured to not
        allow them.
      </p>
    </noframes>
  </frameset>
</html>
```

## Specifications

## Browser compatibility

## See also

- <frameset>
- <frame>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noframes
