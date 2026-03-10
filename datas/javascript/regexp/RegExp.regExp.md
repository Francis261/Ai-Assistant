# RegExp() constructor

Source: https://devdocs.io/javascript/global_objects/regexp/regexp

The RegExp() constructor creates RegExp objects.

For an introduction to regular expressions, read the Regular Expressions chapter in the JavaScript Guide.

## Try it

```
const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");

console.log(regex1);
// Expected output: /\w+/

console.log(regex2);
// Expected output: /\w+/

console.log(regex1 === regex2);
// Expected output: false
```

## Syntax

```
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

Note: RegExp() can be called with or without new, but sometimes with different effects. See Return value.

### Parameters

The text of the regular expression. This can also be another RegExp object.

If specified, flags is a string that contains the flags to add. Alternatively, if a RegExp object is supplied for the pattern, the flags string will replace any of that object's flags (and lastIndex will be reset to 0).

flags may contain any combination of the following characters:

Generate indices for substring matches.

Find all matches rather than stopping after the first match.

When matching, casing differences are ignored.

Treat beginning and end assertions (^ and $) as working over multiple lines. In other words, match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string.

Allows . to match newlines.

Treat pattern as a sequence of Unicode code points.

An upgrade to the u flag that enables set notation in character classes as well as properties of strings.

Matches only from the index indicated by the lastIndex property of this regular expression in the target string. Does not attempt to match from any later indexes.

### Return value

RegExp(pattern) returns pattern directly if all of the following are true:

- RegExp() is called without new;
- pattern is a regex;
- pattern.constructor === RegExp (usually meaning it's not a subclass);
- flags is undefined.

In all other cases, calling RegExp() with or without new both create a new RegExp object. If pattern is a regex, the new object's source is pattern.source; otherwise, its source is pattern coerced to a string. If the flags parameter is not undefined, the new object's flags is the parameter's value; otherwise, its flags is pattern.flags (if pattern is a regex).

### Exceptions

Thrown in one of the following cases:

- pattern cannot be parsed as a valid regular expression.
- flags contains repeated characters or any character outside of those allowed.

## Examples

### Literal notation and constructor

There are two ways to create a RegExp object: a literal notation and a constructor.

- The literal notation takes a pattern between two slashes, followed by optional flags, after the second slash.
- The constructor function takes either a string or a RegExp object as its first parameter and a string of optional flags as its second parameter.

The following three expressions create the same regular expression:

```
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Before regular expressions can be used, they have to be compiled. This process allows them to perform matches more efficiently. There are two ways to compile and get a RegExp object.

The literal notation results in compilation of the regular expression when the expression is evaluated. On the other hand, the constructor of the RegExp object, new RegExp('ab+c'), results in runtime compilation of the regular expression.

Use a string as the first argument to the RegExp() constructor when you want to build the regular expression from dynamic input.

### Building a regular expression from dynamic inputs

```
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Returns ['bacon', 'eggs']
```

## Specifications

## Browser compatibility

## See also

- Polyfill of many modern RegExp features (dotAll, sticky flags, named capture groups, etc.) in core-js
- Regular expressions guide
- String.prototype.match()
- String.prototype.replace()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
