# Date.now()

Source: https://devdocs.io/javascript/global_objects/date/now

The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

## Try it

```
// This example takes 2 seconds to run
const start = Date.now();

console.log("starting timer...");
// Expected output: "starting timer..."

setTimeout(() => {
  const ms = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);
```

## Syntax

```
Date.now()
```

### Parameters

None.

### Return value

A number representing the timestamp, in milliseconds, of the current time.

## Description

### Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of Date.now() might get rounded depending on browser settings. In Firefox, the privacy.reduceTimerPrecision preference is enabled by default and defaults to 2ms. You can also enable privacy.resistFingerprinting, in which case the precision will be 100ms or the value of privacy.resistFingerprinting.reduceTimerPrecision.microseconds, whichever is larger.

For example, with reduced time precision, the result of Date.now() will always be a multiple of 2, or a multiple of 100 (or privacy.resistFingerprinting.reduceTimerPrecision.microseconds) with privacy.resistFingerprinting enabled.

```
// reduced time precision (2ms) in Firefox 60
Date.now();
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
Date.now();
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Examples

### Measuring time elapsed

You can use Date.now() to get the current time in milliseconds, then subtract a previous time to find out how much time elapsed between the two calls.

```
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

For more complex scenarios, you may want to use the performance API instead.

## Specifications

## Browser compatibility

## See also

- Polyfill of Date.now in core-js
- Performance.now()
- console.time()
- console.timeEnd()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
