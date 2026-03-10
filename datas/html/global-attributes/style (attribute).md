# HTML style global attribute

Source: https://devdocs.io/html/reference/global_attributes/style

The style global attribute contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes.

## Try it

```
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

Note: This attribute must not be used to convey semantic information. Even if all styling is removed, a page should remain semantically correct. Typically it shouldn't be used to hide irrelevant information; this should be done using the hidden attribute.

## Specifications

## Browser compatibility

## See also

- Global attributes
- HTMLElement.style

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/style
