# SyntaxError: missing } after function body

Source: https://devdocs.io/javascript/errors/missing_curly_after_function_body

The JavaScript exception "missing } after function body" occurs when there is a syntax mistake when creating a function somewhere. Check if any closing curly braces or parenthesis are in the correct order.

## Message

```
SyntaxError: missing } after function body (Firefox)
```

## Error type

## What went wrong?

There is a syntax mistake when creating a function somewhere. Also check if any closing curly braces or parenthesis are in the correct order. Indenting or formatting the code a bit nicer might also help you to see through the jungle.

## Examples

### Forgotten closing curly bracket

Oftentimes, there is a missing curly bracket in your function code:

```
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
}
```

Correct would be:

```
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
}
```

It can be more obscure when using IIFEs or other constructs that use a lot of different parenthesis and curly braces, for example.

```
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

Oftentimes, indenting differently or double checking indentation helps to spot these errors.

```
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## See also

- Functions guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
