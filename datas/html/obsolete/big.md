# <big>: The Bigger Text element

Source: https://devdocs.io/html/reference/elements/big

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <big> HTML deprecated element renders the enclosed text at a font size one level larger than the surrounding text (medium becomes large, for example). The size is capped at the browser's maximum permitted font size.

Warning: This element has been removed from the specification and shouldn't be used anymore. Use the CSS font-size property to adjust the font size.

## Attributes

This element has no other attributes than the global attributes, common to all elements.

## Examples

Here we see examples showing the use of <big> followed by an example showing how to accomplish the same results using modern CSS syntax instead.

### Using big

This example uses the obsolete <big> element to increase the size of some text.

#### HTML

```
<p>
  This is the first sentence.
  <big>This whole sentence is in bigger letters.</big>
</p>
```

#### Result

### Using CSS font-size

This example uses the CSS font-size property to increase the font size by one level.

#### CSS

```
.bigger {
  font-size: larger;
}
```

#### HTML

```
<p>
  This is the first sentence.
  <span class="bigger">This whole sentence is in bigger letters.</span>
</p>
```

#### Result

## DOM interface

This element implements the HTMLElement interface.

## Specifications

## Browser compatibility

## See also

- CSS: font-size, font
- HTML: <small>, <font>, <style>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/big
