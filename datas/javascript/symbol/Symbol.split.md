# Symbol.split

Source: https://devdocs.io/javascript/global_objects/symbol/split

The Symbol.split static data property represents the well-known symbol Symbol.split. The String.prototype.split() method looks up this symbol on its first argument for the method that splits a string at the indices that match the current object.

For more information, see RegExp.prototype[Symbol.split]() and String.prototype.split().

## Try it

```
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

## Value

The well-known symbol Symbol.split.

## Examples

### Custom reverse split

```
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Symbol.split in core-js
- Symbol.match
- Symbol.matchAll
- Symbol.replace
- Symbol.search
- String.prototype.split()
- RegExp.prototype[Symbol.split]()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split
