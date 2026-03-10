# Symbol.matchAll

Source: https://devdocs.io/javascript/global_objects/symbol/matchall

The Symbol.matchAll static data property represents the well-known symbol Symbol.matchAll. The String.prototype.matchAll() method looks up this symbol on its first argument for the method that returns an iterator, that yields matches of the current object against a string.

For more information, see RegExp.prototype[Symbol.matchAll]() and String.prototype.matchAll().

## Try it

```
const re = /\d+/g;
const str = "2016-01-02|2019-03-07";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// Expected output: Array ["2016", "01", "02", "2019", "03", "07"]
```

## Value

The well-known symbol Symbol.matchAll.

## Examples

### Using Symbol.matchAll

```
const str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/\d+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
// ["2016", "01", "02", "2019", "03", "07"]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Symbol.matchAll in core-js
- es-shims polyfill of Symbol.matchAll
- Symbol.match
- Symbol.replace
- Symbol.search
- Symbol.split
- String.prototype.matchAll()
- RegExp.prototype[Symbol.matchAll]()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
