# GeneratorFunction() constructor

Source: https://devdocs.io/javascript/global_objects/generatorfunction/generatorfunction

The GeneratorFunction() constructor creates GeneratorFunction objects.

Note that GeneratorFunction is not a global object. It can be obtained with the following code:

```
const GeneratorFunction = function* () {}.constructor;
```

The GeneratorFunction() constructor is not intended to be used directly, and all caveats mentioned in the Function() description apply to GeneratorFunction().

## Syntax

```
new GeneratorFunction(functionBody)
new GeneratorFunction(arg1, functionBody)
new GeneratorFunction(arg1, arg2, functionBody)
new GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg1, functionBody)
GeneratorFunction(arg1, arg2, functionBody)
GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

Note: GeneratorFunction() can be called with or without new. Both create a new GeneratorFunction instance.

### Parameters

See Function().

## Examples

### Creating and using a GeneratorFunction() constructor

```
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## Specifications

## Browser compatibility

## See also

- function*
- function* expression
- Function() constructor
- Iterators and generators guide
- Functions

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction
