# AsyncGeneratorFunction() constructor

Source: https://devdocs.io/javascript/global_objects/asyncgeneratorfunction/asyncgeneratorfunction

The AsyncGeneratorFunction() constructor creates AsyncGeneratorFunction objects.

Note that AsyncGeneratorFunction is not a global object. It could be obtained by evaluating the following code.

```
const AsyncGeneratorFunction = async function* () {}.constructor;
```

The AsyncGeneratorFunction() constructor is not intended to be used directly, and all caveats mentioned in the Function() description apply to AsyncGeneratorFunction().

## Syntax

```
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
new AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg1, functionBody)
AsyncGeneratorFunction(arg1, arg2, functionBody)
AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

Note: AsyncGeneratorFunction() can be called with or without new. Both create a new AsyncGeneratorFunction instance.

### Parameters

See Function().

## Examples

### Using the constructor

The following example uses the AsyncGeneratorFunction constructor to create an async generator function.

```
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## Specifications

## Browser compatibility

## See also

- async function*
- async function* expression
- Function() constructor
- Iterators and generators guide
- Functions

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
