# Number.NaN

Source: https://devdocs.io/javascript/global_objects/number/nan

The Number.NaN static data property represents Not-A-Number, which is equivalent to NaN. For more information about the behaviors of NaN, see the description for the global property.

## Try it

```
function clean(x) {
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

## Value

The number value NaN.

## Description

Because NaN is a static property of Number, you always use it as Number.NaN, rather than as a property of a number value.

## Examples

### Checking whether values are numeric

```
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## Specifications

## Browser compatibility

## See also

- NaN
- Number.isNaN()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
