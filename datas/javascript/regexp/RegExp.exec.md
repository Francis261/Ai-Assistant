# RegExp.prototype.exec()

Source: https://devdocs.io/javascript/global_objects/regexp/exec

The exec() method of RegExp instances executes a search with this regular expression for a match in a specified string and returns a result array, or null.

## Try it

```
const regex = /fo+/g;
const str = "table football, foosball";
let array;

while ((array = regex.exec(str)) !== null) {
  console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}.`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}
```

## Syntax

```
exec(str)
```

### Parameters

The string against which to match the regular expression. All values are coerced to strings, so omitting it or passing undefined causes exec() to search for the string "undefined", which is rarely what you want.

### Return value

If the match fails, the exec() method returns null, and sets the regex's lastIndex to 0.

If the match succeeds, the exec() method returns an array and updates the lastIndex property of the regular expression object. The returned array has the matched text as the first item, and then one item for each capturing group of the matched text. The array also has the following additional properties:

The 0-based index of the match in the string.

The original string that was matched against.

A null-prototype object of named capturing groups, whose keys are the names, and values are the capturing groups, or undefined if no named capturing groups were defined. See capturing groups for more information.

This property is only present when the d flag is set. It is an array where each entry represents the bounds of a substring match. The index of each element in this array corresponds to the index of the respective substring match in the array returned by exec(). In other words, the first indices entry represents the entire match, the second indices entry represents the first capturing group, etc. Each entry itself is a two-element array, where the first number represents the match's start index, and the second number, its end index.

The indices array additionally has a groups property, which holds a null-prototype object of all named capturing groups. The keys are the names of the capturing groups, and each value is a two-element array, with the first number being the start index, and the second number being the end index of the capturing group. If the regular expression doesn't contain any named capturing groups, groups is undefined.

## Description

JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g., /foo/g or /foo/y). They store a lastIndex from the previous match. Using this internally, exec() can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with String.prototype.match().

When using exec(), the global flag has no effect when the sticky flag is set — the match is always sticky.

exec() is the primitive method of regexps. Many other regexp methods call exec() internally — including those called by string methods, like [Symbol.replace](). While exec() itself is powerful (and is the most efficient), it often does not convey the intent most clearly.

- If you only care whether the regex matches a string, but not what is actually being matched, use RegExp.prototype.test() instead.
- If you are finding all occurrences of a global regex and you don't care about information like capturing groups, use String.prototype.match() instead. In addition, String.prototype.matchAll() helps to simplify matching multiple parts of a string (with capture groups) by allowing you to iterate over the matches.
- If you are executing a match to find its index position in the string, use the String.prototype.search() method instead.

exec() is useful for complex operations that cannot be easily achieved via any of the methods above, often when you need to manually adjust lastIndex. (String.prototype.matchAll() copies the regex, so changing lastIndex while iterating over matchAll does not affect the iteration.) For one such example, see rewinding lastIndex.

## Examples

### Using exec()

Consider the following example:

```
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

The following table shows the state of result after running this script:

In addition, re.lastIndex will be set to 25, due to this regex being global.

### Finding successive matches

If your regular expression uses the g flag, you can use the exec() method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of str specified by the regular expression's lastIndex property (test() will also advance the lastIndex property). Note that the lastIndex property will not be reset when searching a different string, it will start its search at its existing lastIndex.

For example, assume you have this script:

```
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `Found ${myArray[0]}. `;
  msg += `Next match starts at ${myRe.lastIndex}`;
  console.log(msg);
}
```

This script displays the following text:

```
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

Warning: There are many pitfalls that can lead to this becoming an infinite loop!

- Do not place the regular expression literal (or RegExp constructor) within the while condition — it will recreate the regex for every iteration and reset lastIndex.
- Be sure that the global (g) flag is set, or lastIndex will never be advanced.
- If the regex may match zero-length characters (e.g., /^/gm), increase its lastIndex manually each time to avoid being stuck in the same place.

You can usually replace this kind of code with String.prototype.matchAll() to make it less error-prone.

### Using exec() with RegExp literals

You can also use exec() without creating a RegExp object explicitly:

```
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

This will log a message containing 'hello world!'.

## Specifications

## Browser compatibility

## See also

- Regular expressions guide
- RegExp

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
