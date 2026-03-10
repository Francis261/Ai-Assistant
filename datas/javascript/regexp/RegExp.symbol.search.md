# RegExp.prototype[Symbol.search]()

Source: https://devdocs.io/javascript/global_objects/regexp/symbol.search

The [Symbol.search]() method of RegExp instances specifies how String.prototype.search should behave.

## Try it

```
class RegExp1 extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

console.log("table football".search(new RegExp1("foo")));
// Expected output: 6
```

## Syntax

```
regexp[Symbol.search](str)
```

### Parameters

A String that is a target of the search.

### Return value

The index of the first match between the regular expression and the given string, or -1 if no match was found.

## Description

This method is called internally in String.prototype.search(). For example, the following two examples return the same result.

```
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

This method does not copy the regular expression, unlike [Symbol.split]() or [Symbol.matchAll](). However, unlike [Symbol.match]() or [Symbol.replace](), it will set lastIndex to 0 when execution starts and restore it to the previous value when it exits, therefore generally avoiding side effects. This means that the g flag has no effect with this method, and it always returns the first match in the string even when lastIndex is non-zero. This also means sticky regexps will always search strictly at the beginning of the string.

```
const re = /[abc]/g;
re.lastIndex = 2;
console.log("abc".search(re)); // 0

const re2 = /[bc]/y;
re2.lastIndex = 1;
console.log("abc".search(re2)); // -1
console.log("abc".match(re2)); // [ 'b' ]
```

[Symbol.search]() always calls the regex's exec() method exactly once, and returns the index property of the result, or -1 if the result is null.

This method exists for customizing the search behavior in RegExp subclasses.

## Examples

### Direct call

This method can be used in almost the same way as String.prototype.search(), except for the different value of this and the different arguments order.

```
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.search](str);
console.log(result); // 4
```

### Using [Symbol.search]() in subclasses

Subclasses of RegExp can override [Symbol.search]() method to modify the behavior.

```
class MyRegExp extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

const re = new MyRegExp("a+b");
const str = "ab a+b";
const result = str.search(re); // String.prototype.search calls re[Symbol.search]().
console.log(result); // 3
```

## Specifications

## Browser compatibility

## See also

- Polyfill of RegExp.prototype[Symbol.search] in core-js
- String.prototype.search()
- RegExp.prototype[Symbol.match]()
- RegExp.prototype[Symbol.matchAll]()
- RegExp.prototype[Symbol.replace]()
- RegExp.prototype[Symbol.split]()
- RegExp.prototype.exec()
- RegExp.prototype.test()
- Symbol.search

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
