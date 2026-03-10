# RegExp.prototype[Symbol.match]()

Source: https://devdocs.io/javascript/global_objects/regexp/symbol.match

The [Symbol.match]() method of RegExp instances specifies how String.prototype.match() should behave. In addition, its presence (or absence) can influence whether an object is regarded as a regular expression.

## Try it

```
class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALID";
    }
    return "INVALID";
  }
}

console.log("2012-07-02".match(new RegExp1("(\\d+)-(\\d+)-(\\d+)")));
// Expected output: "VALID"
```

## Syntax

```
regexp[Symbol.match](str)
```

### Parameters

A String that is a target of the match.

### Return value

An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

- If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included.
- If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, match() will return the same result as RegExp.prototype.exec() (an array with some extra properties).

## Description

This method is called internally in String.prototype.match().

For example, the following two examples return same result.

```
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

If the regex is global (with the g flag), the regex's exec() method will be repeatedly called until exec() returns null. Otherwise, exec() would only be called once and its result becomes the return value of [Symbol.match]().

Because [Symbol.match]() would keep calling exec() until it returns null, and exec() would automatically reset the regex's lastIndex to 0 when the last match fails, [Symbol.match]() would typically not have side effects when it exits. However, when the regex is sticky but not global, lastIndex would not be reset. In this case, each call to match() may return a different result.

```
const re = /[abc]/y;
for (let i = 0; i < 5; i++) {
  console.log("abc".match(re), re.lastIndex);
}
// [ 'a' ] 1
// [ 'b' ] 2
// [ 'c' ] 3
// null 0
// [ 'a' ] 1
```

When the regex is sticky and global, it would still perform sticky matches — i.e., it would fail to match any occurrences beyond the lastIndex.

```
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

If the current match is an empty string, the lastIndex would still be advanced — if the regex is Unicode-aware, it would advance by one Unicode code point; otherwise, it advances by one UTF-16 code unit.

```
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

This method exists for customizing match behavior within RegExp subclasses.

In addition, the [Symbol.match] property is used to check whether an object is a regular expression.

## Examples

### Direct call

This method can be used in almost the same way as String.prototype.match(), except the different this and the different arguments order.

```
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### Using [Symbol.match]() in subclasses

Subclasses of RegExp can override the [Symbol.match]() method to modify the default behavior.

```
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      },
    };
  }
}

const re = new MyRegExp("(\\d+)-(\\d+)-(\\d+)");
const str = "2016-01-02";
const result = str.match(re); // String.prototype.match calls re[Symbol.match]().
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## Specifications

## Browser compatibility

## See also

- Polyfill of RegExp.prototype[Symbol.match] in core-js
- String.prototype.match()
- RegExp.prototype[Symbol.matchAll]()
- RegExp.prototype[Symbol.replace]()
- RegExp.prototype[Symbol.search]()
- RegExp.prototype[Symbol.split]()
- RegExp.prototype.exec()
- RegExp.prototype.test()
- Symbol.match

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
