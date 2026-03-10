# SyntaxError: tagged template cannot be used with optional chain

Source: https://devdocs.io/javascript/errors/bad_optional_template

The JavaScript exception "tagged template cannot be used with optional chain" occurs when the tag expression of a tagged template literal is an optional chain, or if there's an optional chain between the tag and the template.

## Message

```
SyntaxError: Invalid tagged template on optional chain (V8-based)
SyntaxError: tagged template cannot be used with optional chain (Firefox)
SyntaxError: Cannot use tagged templates in an optional chain. (Safari)
```

## Error type

## What went wrong?

There are two ways to get this error. The first one is if the tag expression is an optional chain expression, like this:

```
String?.raw`Hello, world!`;
console.log?.()`Hello, world!`;
Number?.[parseMethod]`Hello, world!`;
```

The second one is if ?. occurs between the tag and the template, like this:

```
String.raw?.`Hello, world!`;
```

Optional chaining in the tag is specifically forbidden because there's no great use case for it, and what the result is expected to be is unclear (should it be undefined or the template's value as if it's untagged?). You need to translate the optional chaining to its underlying condition (see optional chaining for more information).

```
const result =
  String.raw === null || String.raw === undefined
    ? undefined
    : String.raw`Hello, world!`;
```

Remember that optional chaining only short-circuits within a parenthesized unit. If you parenthesize your tag expression, the optional chaining will not cause an error, because now the tag does not short-circuit and the result is clear (the tag will produce undefined and then cause the tagged template to throw).

```
(console?.log)`Hello, world!`; // Throws if console?.log is undefined
```

However this is a bit nonsensical anyway because optional chaining prevents errors inside the property access chain, but is then guaranteed to generate an error when calling the template tag. You would probably still want to use a conditional check.

Note that optional chaining is only forbidden as the tag expression. You can use optional chaining inside the embedded expressions, or use optional chaining on the tagged template expression as a whole.

```
console.log`Hello, ${true.constructor?.name}!`; // ['Hello, ', '!', raw: Array(2)] 'Boolean'
console.log`Hello`?.toString(); // undefined
```

## See also

- Template literals
- Optional chaining (?.)
- Original discussion on whether optional chaining should be allowed in tagged template literals

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_optional_template
