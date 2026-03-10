# <center>: The Centered Text element

Source: https://devdocs.io/html/reference/elements/center

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <center> HTML element is a block-level element that displays its block-level or inline contents centered horizontally within its containing element. The container is usually, but isn't required to be, <body>.

This tag has been deprecated in HTML 4 (and XHTML 1) in favor of the CSS text-align property, which can be applied to the <div> element or to an individual <p>. For centering blocks, use other CSS properties like margin-left and margin-right and set them to auto (or set margin to 0 auto).

## DOM interface

This element implements the HTMLElement interface.

## Example 1

```
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

### Result

## Example 2 (CSS alternative)

```
<div class="center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

```
.center {
  text-align: center;
}
```

### Result

## Example 3 (CSS alternative)

```
<p class="center">
  This line will be centered.<br />
  And so will this line.
</p>
```

```
.center {
  text-align: center;
}
```

### Result

Note: Applying text-align: center to a <div> or <p> element centers the contents of those elements while leaving their overall dimensions unchanged.

## Specifications

## Browser compatibility

## See also

- text-align
- display

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/center
