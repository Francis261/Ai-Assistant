# <body>: The Document Body element

Source: https://devdocs.io/html/reference/elements/body

The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document.

## Attributes

This element includes the global attributes, event attributes, and deprecated attributes:

### Event attributes

Note: Each of the below event attribute names is linked to its equivalent Window interface event. You can listen to these events using addEventListener() instead of adding the oneventname attribute to the <body> element.

Function to call after the user has printed the document.

Function to call when the user requests printing of the document.

Function to call when the document is about to be unloaded.

Function to call when the document loses focus.

Function to call when the document fails to load properly.

Function to call when the document receives focus.

Function to call when the fragment identifier part (starting with the hash ('#') character) of the document's current address has changed.

Function to call when the preferred languages changed.

Function to call when the document has finished loading.

Function to call when the document has received a message.

Function to call when the document has received a message that cannot be deserialized.

Function to call when network communication has failed.

Function to call when network communication has been restored.

Function to call when you navigate across documents, when the previous document is about to unload.

Function to call when the browser hides the current page in the process of presenting a different page from the session's history.

Function to call when a document is first rendered, either when loading a fresh document from the network or activating a document.

Function to call when the browser displays the window's document due to navigation.

Function to call when the user has navigated session history.

Function to call when the document has been resized.

Function to call when a JavaScript Promise is handled late.

Function to call when the storage area has changed.

Function to call when a JavaScript Promise that has no rejection handler is rejected.

Function to call when the document is going away.

### Deprecated attributes

Warning: Do not use these deprecated attributes; opt for the CSS alternatives listed with each deprecated attribute instead.

Color of text for hyperlinks when selected. Use the CSS color property in conjunction with the :active and :focus pseudo-classes instead.

URI of an image to use as a background. Use the CSS background-image property instead.

Background color for the document. Use the CSS background-color property instead.

The margin of the bottom of the body. Use the CSS margin-bottom property (or the logical margin-block-end property) instead.

The margin of the left of the body. Use the CSS margin-left property (or the logical margin-inline-start property) instead.

Color of text for unvisited hypertext links. Use the CSS color property in conjunction with the :link pseudo-class instead.

The margin of the right of the body. Use the CSS margin-right property or the logical margin-inline-end property) instead.

Foreground color of text. Use the CSS color property instead.

The margin of the top of the body. Use the CSS margin-top property (or the logical margin-block-start property) instead.

Color of text for visited hypertext links. Use the CSS color property in conjunction with the :visited pseudo-class instead.

## Examples

```
<html lang="en">
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>
      The <code>&lt;body&gt;</code> HTML element represents the content of an
      HTML document. There can be only one <code>&lt;body&gt;</code> element in
      a document.
    </p>
  </body>
</html>
```

### Result

## Technical summary

- The <body> element exposes the HTMLBodyElement interface.
- You can access the <body> element through the document.body property.

## Specifications

## Browser compatibility

## See also

- <html>
- <head>
- Event handling overview

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body
