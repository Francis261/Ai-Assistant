# Error.stackTraceLimit

Source: https://devdocs.io/javascript/global_objects/error/stacktracelimit

Non-standard: This feature is not standardized. We do not recommend using non-standard features in production, as they have limited browser support, and may change or be removed. However, they can be a suitable alternative in specific cases where no standard option exists.

Note: This feature is part of the currently non-standard V8 stack trace API. However, for compatibility reasons, it is also implemented by JavaScriptCore.

The Error.stackTraceLimit static data property indicates the maximum number of stack frames captured by the stack trace of an error. It can be set by user code to change the engine's behavior.

Generally, reading this property is not very useful, but you can set it to a new value. Setting it to a larger value can be useful for debugging, as it allows you to see more of the call stack. Setting it to a smaller value can improve performance as it reduces the amount of stack captured.

## Value

An integer representing the maximum number of stack frames captured by the stack trace of an error.

## Description

Because stackTraceLimit is a static property of Error, you always use it as Error.stackTraceLimit, rather than as a property of an Error object you created. If you want to customize the stack trace for a single error only, you may need to set the property, create the error, and then reset the property to its original value.

## Examples

### Setting Error.stackTraceLimit

This code is safe to run even in environments that don't support Error.stackTraceLimit, because it doesn't read the property, only sets it, and engines that don't support it will ignore the setting.

```
Error.stackTraceLimit = 2;
const a = () => b();
const b = () => c();
const c = () => d();
const d = () => e();
const e = () => {
  throw new Error("My error");
};
try {
  a();
} catch (e) {
  console.log(e.stack);
}
// Only two frames in supporting engines; all frames in others
```

## Specifications

## Browser compatibility

## See also

- Error.prototype.stack
- Error.captureStackTrace()
- Stack trace API in the V8 docs

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
