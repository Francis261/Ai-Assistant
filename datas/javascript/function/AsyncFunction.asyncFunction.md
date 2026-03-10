# AsyncFunction() constructor

Source: https://devdocs.io/javascript/global_objects/asyncfunction/asyncfunction

The AsyncFunction() constructor creates AsyncFunction objects.

Note that AsyncFunction is not a global object. It can be obtained with the following code:

```
const AsyncFunction = async function () {}.constructor;
```

The AsyncFunction() constructor is not intended to be used directly, and all caveats mentioned in the Function() description apply to AsyncFunction().

## Syntax

```
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

Note: AsyncFunction() can be called with or without new. Both create a new AsyncFunction instance.

### Parameters

See Function().

## Examples

### Creating an async function from an AsyncFunction() constructor

```
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
```

## Specifications

## Browser compatibility

## See also

- async function
- async function expression
- Function() constructor

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
