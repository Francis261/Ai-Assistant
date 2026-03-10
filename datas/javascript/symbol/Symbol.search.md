# Symbol.search

Source: https://devdocs.io/javascript/global_objects/symbol/search

The Symbol.search static data property represents the well-known symbol Symbol.search. The String.prototype.search() method looks up this symbol on its first argument for the method that returns the index within a string that matches the current object.

For more information, see RegExp.prototype[Symbol.search]() and String.prototype.search().

## Try it

```
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log("foobar".search(new Search1("bar")));
// Expected output: 3
```

## Value

The well-known symbol Symbol.search.

## Examples

### Custom string search

```
class CaseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log("foobar".search(new CaseInsensitiveSearch("BaR"))); // 3
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Symbol.search in core-js
- Symbol.match
- Symbol.matchAll
- Symbol.replace
- Symbol.split
- String.prototype.search()
- RegExp.prototype[Symbol.search]()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search
