# RegExp.prototype[Symbol.replace]()

Source: https://devdocs.io/javascript/global_objects/regexp/symbol.replace

The [Symbol.replace]() method of RegExp instances specifies how String.prototype.replace() and String.prototype.replaceAll() should behave when the regular expression is passed in as the pattern.

## Try it

```
class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, "#!@?");
  }
}

console.log("football".replace(new RegExp1("foo")));
// Expected output: "#!@?tball"
```

## Syntax

```
regexp[Symbol.replace](str, replacement)
```

### Parameters

A String that is a target of the replacement.

Can be a string or a function.

- If it's a string, it will replace the substring matched by the current regexp. A number of special replacement patterns are supported; see the Specifying a string as the replacement section of String.prototype.replace.
- If it's a function, it will be invoked for every match and the return value is used as the replacement text. The arguments supplied to this function are described in the Specifying a function as the replacement section of String.prototype.replace.

### Return value

A new string, with one, some, or all matches of the pattern replaced by the specified replacement.

## Description

This method is called internally in String.prototype.replace() and String.prototype.replaceAll() if the pattern argument is a RegExp object. For example, the following two examples return the same result.

```
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

If the regex is global (with the g flag), the regex's exec() method will be repeatedly called until exec() returns null. Otherwise, exec() would only be called once. For each exec() result, the substitution will be prepared based on the description in String.prototype.replace().

Because [Symbol.replace]() would keep calling exec() until it returns null, and exec() would automatically reset the regex's lastIndex to 0 when the last match fails, [Symbol.replace]() would typically not have side effects when it exits. However, when the regex is sticky but not global, lastIndex would not be reset. In this case, each call to replace() may return a different result.

```
const re = /a/y;

for (let i = 0; i < 5; i++) {
  console.log("aaa".replace(re, "b"), re.lastIndex);
}

// baa 1
// aba 2
// aab 3
// aaa 0
// baa 1
```

When the regex is sticky and global, it would still perform sticky matches — i.e., it would fail to match any occurrences beyond the lastIndex.

```
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

If the current match is an empty string, the lastIndex would still be advanced — if the regex is Unicode-aware, it would advance by one Unicode code point; otherwise, it advances by one UTF-16 code unit.

```
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

This method exists for customizing replace behavior in RegExp subclasses.

## Examples

### Direct call

This method can be used in almost the same way as String.prototype.replace(), except the different this and the different arguments order.

```
const re = /-/g;
const str = "2016-01-01";
const newStr = re[Symbol.replace](str, ".");
console.log(newStr); // 2016.01.01
```

### Using [Symbol.replace]() in subclasses

Subclasses of RegExp can override the [Symbol.replace]() method to modify the default behavior.

```
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform [Symbol.replace]() `count` times.
    let result = str;
    for (let i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

const re = new MyRegExp("\\d", "", 3);
const str = "01234567";
const newStr = str.replace(re, "#"); // String.prototype.replace calls re[Symbol.replace]().
console.log(newStr); // ###34567
```

## Specifications

## Browser compatibility

## See also

- Polyfill of RegExp.prototype[Symbol.replace] in core-js
- String.prototype.replace()
- String.prototype.replaceAll()
- RegExp.prototype[Symbol.match]()
- RegExp.prototype[Symbol.matchAll]()
- RegExp.prototype[Symbol.search]()
- RegExp.prototype[Symbol.split]()
- RegExp.prototype.exec()
- RegExp.prototype.test()
- Symbol.replace

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
