# Grouping operator ( )

Source: https://devdocs.io/javascript/operators/grouping

The ( ) operator controls the precedence of evaluation in expressions. It also acts as a container for arbitrary expressions in certain syntactic constructs, where ambiguity or syntax errors would otherwise occur.

## Try it

```
console.log(1 + 2 * 3); // 1 + 6
// Expected output: 7

console.log(1 + (2 * 3)); // 1 + 6
// Expected output: 7

console.log((1 + 2) * 3); // 3 * 3
// Expected output: 9

console.log(1 * 3 + 2 * 3); // 3 + 6
// Expected output: 9
```

## Syntax

```
(expression)
```

### Parameters

Any expression to be evaluated, including comma-joined expressions.

## Description

The grouping operator consists of a pair of parentheses around an expression that groups the contents. The operator overrides the normal operator precedence, so that operators with lower precedence (as low as the comma operator) can be evaluated before an operator with higher precedence.

## Examples

### Using the grouping operator

Evaluating addition and subtraction before multiplication and division.

```
const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c; // 7
// evaluated by default like this
a + (b * c); // 7

// now overriding precedence
// addition before multiplication
(a + b) * c; // 9

// which is equivalent to
a * c + b * c; // 9
```

Notice in these examples that the order in which the operators evaluate has changed, but the order in which the operands evaluate has not. For example, in this code, the function invocations a(), b(), and c() are evaluated left-to-right (the normal order of evaluation) before the operator order is considered.

```
a() * (b() + c());
```

The function a will be called before the function b, which will be called before the function c. For more on operator precedence, see its reference page.

### Using the grouping operator to eliminate parsing ambiguity

An expression statement cannot start with the keyword function, because the parser would see it as the start of a function declaration. This means the following IIFE syntax is invalid:

```
function () {
  // code
}();
```

The grouping operator can be used to eliminate this ambiguity, since when the parser sees the left parenthesis, it knows that what follows must be an expression instead of a declaration.

```
(function () {
  // code
})();
```

You may also use the void operator to eliminate ambiguity.

In an arrow function expression body (one that directly returns an expression without the keyword return), the grouping operator can be used to return an object literal expression, because otherwise the left curly brace would be interpreted as the start of the function body.

```
const f = () => ({ a: 1 });
```

If a property is accessed on a number literal, the property accessor dot . may be ambiguous with a decimal point, unless the number already has a decimal point. You can wrap integer literals in parentheses to eliminate this ambiguity.

```
(1).toString(); // "1"
```

### Grouping operator and automatic semicolon insertion

The grouping operator can mitigate automatic semicolon insertion (ASI) pitfalls. For example, the return keyword and the returned expression cannot have a line break in between:

```
function sum(a, b) {
  return
    a + b;
}
```

This code will return undefined, because a semicolon is inserted directly after the return keyword, which causes the function to return immediately without evaluating a + b. In case the returned expression is long and you want to keep it well-formatted, you may use the grouping operator to signify that the return keyword is followed by an expression and prevent semicolon insertion:

```
function sum(a, b) {
  return (
    a + b
  );
}
```

However, grouping may also introduce ASI hazards. When a line starts with a left parenthesis and the previous line ends with an expression, the parser will not insert a semicolon before the line break, because it could be the middle of a function call. For example:

```
const a = 1
(1).toString()
```

This code would be parsed as:

```
const a = 1(1).toString();
```

Which throws "TypeError: 1 is not a function". If your coding style does not use semicolons, remember that when a line starts with a left parenthesis, prefix it with a semicolon. This practice is recommended by several formatters and/or style guides, including Prettier and standard.

```
const a = 1
;(1).toString()
```

For more advice on working with ASI, see its reference section.

## Specifications

## Browser compatibility

## See also

- Operator precedence
- delete
- typeof

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
