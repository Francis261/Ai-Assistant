# debugger

Source: https://devdocs.io/javascript/statements/debugger

The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

## Syntax

```
debugger;
```

## Examples

### Using the debugger statement

The following example shows code where a debugger statement has been inserted, to invoke a debugger (if one exists) when the function is called.

```
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```

When the debugger is invoked, execution is paused at the debugger statement. It is like a breakpoint in the script source.

## Specifications

## Browser compatibility

## See also

- The Firefox JavaScript Debugger¶ in the Firefox source docs

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
