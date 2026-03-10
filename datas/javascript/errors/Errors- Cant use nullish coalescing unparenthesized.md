# SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions

Source: https://devdocs.io/javascript/errors/cant_use_nullish_coalescing_unparenthesized

The JavaScript exception "cannot use ?? unparenthesized within || and && expressions" occurs when a nullish coalescing operator is used with a logical OR or logical AND in the same expression without parentheses.

## Message

```
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Error type

## What went wrong?

The operator precedence chain looks like this:

```
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

However, the precedence between ?? and &&/|| is intentionally undefined, because the short circuiting behavior of logical operators can make the expression's evaluation counter-intuitive. Therefore, the following combinations are all syntax errors, because the language doesn't know how to parenthesize the operands:

```
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Instead, make your intent clear by parenthesizing either side explicitly:

```
(a ?? b) || c;
a ?? (b && c);
```

## Examples

When migrating legacy code that uses || and && for guarding against null or undefined, you may often convert it partially:

```
function getId(user, fallback) {
  // Previously: user && user.id || fallback
  return user && user.id ?? fallback; // SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions
}
```

Instead, consider parenthesizing the &&:

```
function getId(user, fallback) {
  return (user && user.id) ?? fallback;
}
```

Even better, consider using optional chaining instead of &&:

```
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## See also

- Issue about nullish coalescing precedence in the TC39 nullish-coalescing proposal
- Nullish coalescing operator (??)
- Operator precedence

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
