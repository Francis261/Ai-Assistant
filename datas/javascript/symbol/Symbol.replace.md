# Symbol.replace

Source: https://devdocs.io/javascript/global_objects/symbol/replace

The Symbol.replace static data property represents the well-known symbol Symbol.replace. The String.prototype.replace() and String.prototype.replaceAll() methods look up this symbol on their first argument for the method that replaces substrings matched by the current object.

For more information, see RegExp.prototype[Symbol.replace](), String.prototype.replace(), and String.prototype.replaceAll().

## Try it

```
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// Expected output: "s/foo/bar/g"
```

## Value

The well-known symbol Symbol.replace.

## Examples

### Using Symbol.replace

```
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo"))); // "#!@?tball"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Symbol.replace in core-js
- Symbol.match
- Symbol.matchAll
- Symbol.search
- Symbol.split
- String.prototype.replace()
- String.prototype.replaceAll()
- RegExp.prototype[Symbol.replace]()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace
