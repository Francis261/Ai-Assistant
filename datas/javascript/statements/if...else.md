# if...else

Source: https://devdocs.io/javascript/statements/if...else

The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

## Try it

```
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

## Syntax

```
if (condition)
  statement1

// With an else clause
if (condition)
  statement1
else
  statement2
```

An expression that is considered to be either truthy or falsy.

Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ({ /* ... */ }) to group those statements. To execute no statements, use an empty statement.

Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.

## Description

Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript.

```
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN
```

To see how this works, this is how it would look if the nesting were properly indented:

```
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
      statement3
// …
```

To execute multiple statements within a clause, use a block statement ({ /* ... */ }) to group those statements.

```
if (condition) {
  statements1
} else {
  statements2
}
```

Not using blocks may lead to confusing behavior, especially if the code is hand-formatted. For example:

```
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

This code looks innocent — however, executing checkValue(1, 3) will log "a is not 1". This is because in the case of dangling else, the else clause will be connected to the closest if clause. Therefore, the code above, with proper indentation, would look like:

```
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

In general, it is a good practice to always use block statements, especially in code involving nested if statements.

```
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}
```

Do not confuse the primitive Boolean values true and false with truthiness or falsiness of the Boolean object. Any value that is not false, undefined, null, 0, -0, NaN, or the empty string (""), and any object, including a Boolean object whose value is false, is considered truthy when used as the condition. For example:

```
const b = new Boolean(false);
if (b) {
  console.log("b is truthy"); // "b is truthy"
}
```

## Examples

### Using if...else

```
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### Using else if

Note that there is no elseif syntax in JavaScript. However, you can write it with a space between else and if:

```
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

### Using an assignment as a condition

You should almost never have an if...else with an assignment like x = y as a condition:

```
if ((x = y)) {
  // …
}
```

Because unlike while loops, the condition is only evaluated once, so the assignment is only performed once. The code above is equivalent to:

```
x = y;
if (x) {
  // …
}
```

Which is much clearer. However, in the rare case you find yourself wanting to do something like that, the while documentation has a Using an assignment as a condition section with our recommendations.

## Specifications

## Browser compatibility

## See also

- block
- switch
- Conditional (ternary) operator

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
