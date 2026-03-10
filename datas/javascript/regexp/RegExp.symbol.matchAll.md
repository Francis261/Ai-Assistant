# RegExp.prototype[Symbol.matchAll]()

Source: https://devdocs.io/javascript/global_objects/regexp/symbol.matchall

The [Symbol.matchAll]() method of RegExp instances specifies how String.prototype.matchAll should behave.

## Try it

```
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}

const re = new MyRegExp("-\\d+", "g");
console.log("2016-01-02|2019-03-07".matchAll(re));
// Expected output: Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]
```

## Syntax

```
regexp[Symbol.matchAll](str)
```

### Parameters

A String that is a target of the match.

### Return value

An iterable iterator object (which is not restartable) of matches. Each match is an array with the same shape as the return value of RegExp.prototype.exec().

## Description

This method is called internally in String.prototype.matchAll(). For example, the following two examples return the same result.

```
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Like [Symbol.split](), [Symbol.matchAll]() starts by using [Symbol.species] to construct a new regex, thus avoiding mutating the original regexp in any way. lastIndex starts as the original regex's value.

```
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

The validation that the input is a global regex happens in String.prototype.matchAll(). [Symbol.matchAll]() does not validate the input. If the regex is not global, the returned iterator yields the exec() result once and then returns undefined. If the regexp is global, each time the returned iterator's next() method is called, the regex's exec() is called and the result is yielded.

When the regex is sticky and global, it will still perform sticky matches — i.e., it will not match any occurrences beyond the lastIndex.

```
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

If the current match is an empty string, the lastIndex will still be advanced. If the regex has the u flag, it advances by one Unicode code point; otherwise, it advances by one UTF-16 code point.

```
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

This method exists for customizing the behavior of matchAll() in RegExp subclasses.

## Examples

### Direct call

This method can be used in almost the same way as String.prototype.matchAll(), except for the different value of this and the different order of arguments.

```
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Using [Symbol.matchAll]() in subclasses

Subclasses of RegExp can override the [Symbol.matchAll]() method to modify the default behavior.

For example, to return an Array instead of an iterator:

```
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    return result ? Array.from(result) : null;
  }
}

const re = new MyRegExp("(\\d+)-(\\d+)-(\\d+)", "g");
const str = "2016-01-02|2019-03-07";
const result = str.matchAll(re);

console.log(result[0]);
// [ "2016-01-02", "2016", "01", "02" ]

console.log(result[1]);
// [ "2019-03-07", "2019", "03", "07" ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of RegExp.prototype[Symbol.matchAll] in core-js
- es-shims polyfill of RegExp.prototype[Symbol.matchAll]
- String.prototype.matchAll()
- RegExp.prototype[Symbol.match]()
- RegExp.prototype[Symbol.replace]()
- RegExp.prototype[Symbol.search]()
- RegExp.prototype[Symbol.split]()
- Symbol.matchAll

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
