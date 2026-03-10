# Function() constructor

Source: https://devdocs.io/javascript/global_objects/function/function

Warning: The arguments passed this method are dynamically evaluated and executed as JavaScript. APIs like this are known as injection sinks, and are potentially a vector for cross-site-scripting (XSS) attacks.

You can mitigate this risk by always passing TrustedScript objects instead of strings and enforcing trusted types.

See Security considerations for more information.

The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues as eval(). However, unlike eval (which may have access to the local scope), the Function constructor creates functions which execute in the global scope only.

## Try it

```
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// Expected output: 8
```

## Syntax

```
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

Note: Function() can be called with or without new. Both create a new Function instance.

### Parameters

TrustedScript instances or strings specifying names to be used by the function as formal argument names. The value must correspond to a valid JavaScript parameter (any of plain identifier, rest parameter, or destructured parameter, optionally with a default), or a list of such strings separated with commas.

As the parameters are parsed in the same way as function expressions, whitespace and comments are accepted. For example: "x", "theValue = 42", "[a, b] /* numbers */" — or "x, theValue = 42, [a, b] /* numbers */". ("x, theValue = 42", "[a, b]" is also correct, though very confusing to read.)

A TrustedScript or a string containing the JavaScript statements comprising the function definition.

### Exceptions

Function parameter arguments can't be evaluated as valid identifiers, or the functionBody can't be parsed as a script.

Any parameter is a string when Trusted Types are enforced by a CSP and no default policy is defined.

The method also throws any exception that occurs during evaluation of the code.

## Description

Function objects created with the Function constructor are parsed when the function is created. This is less efficient than creating a function with a function expression or function declaration and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function, except the last, are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed. The function will be dynamically compiled as a function expression, with the source assembled in the following fashion:

```
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

This is observable by calling the function's toString() method.

However, unlike normal function expressions, the name anonymous is not added to the functionBody's scope, since functionBody only has access the global scope. If functionBody is not in strict mode (the body itself needs to have the "use strict" directive since it doesn't inherit the strictness from the context), you may use arguments.callee to refer to the function itself. Alternatively, you can define the recursive part as an inner function:

```
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

Note that the two dynamic parts of the assembled source — the parameters list args.join(",") and functionBody — will first be parsed separately to ensure they are each syntactically valid. This prevents injection-like attempts.

```
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

### Security considerations

The method can be used to execute arbitrary input passed to any parameter. If the input is a potentially unsafe string provided by a user, this is a possible vector for Cross-site-scripting (XSS) attacks. For example, the following example assumes the untrustedCode was provided by a user:

```
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

Websites with a Content Security Policy (CSP) that specifies script-src or default-src will prevent such code running by default.

If you must allow the scripts to run via Function() you can mitigate these issues by always assigning TrustedScript objects instead of strings, and enforcing trusted types using the require-trusted-types-for CSP directive. This ensures that the input is passed through a transformation function.

To allow Function() to run, you will additionally need to specify the trusted-types-eval keyword in your CSP script-src directive.

The unsafe-eval keyword also allows Function(), but is much less safe then trusted-types-eval because it would allow execution even on browsers that do not support trusted types.

For example, the required CSP for your site might look like this:

```
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

The behavior of the transformation function will depend on the specific use case that requires a user provided script. If possible you should lock the allowed scripts to exactly the code that you trust to run. If that is not possible, you might allow or block the use of certain functions within the provided string.

## Examples

Note that these examples omit the use of trusted types for brevity. For code showing the usual approach, see Using TrustedScript in eval().

### Specifying arguments with the Function constructor

The following code creates a Function object that takes two arguments.

```
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

The arguments a and b are formal argument names that are used in the function body, return a + b.

### Creating a function object from a function declaration or function expression

```
// The function constructor can take in multiple statements separated by a semicolon. Function expressions require a return statement with the function's name

// Observe that new Function is called. This is so we can call the function we created directly afterwards
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// call the function
sumOfArray([1, 2, 3, 4]);
// 10

// If you don't call new Function at the point of creation, you can use the Function.call() method to call it
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);

// call the function
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Function declarations do not require a return statement
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// call the function
sayHello("world");
// Hello, world
```

## Specifications

## Browser compatibility

## See also

- Using the function constructor in eval()
- function
- function expression
- Functions

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
