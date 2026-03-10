# Closure::fromCallable

Source: https://devdocs.io/php/closure.fromcallable

(PHP 7 >= 7.1.0)

Closure::fromCallable — Converts a callable into a closure

### Description

```
public static Closure::fromCallable(callable $callback): Closure
```

Create and return a new anonymous function from given callback using the current scope. This method checks if the callback is callable in the current scope and throws a TypeError if it is not.

Note:

As of PHP 8.1.0, First class callable syntax has the same semantics as this method.

### Parameters

The callable to convert.

### Return Values

Returns the newly created Closure or throws a TypeError if the callback is not callable in the current scope.

### See Also

- Anonymous functions
- First class callable syntax

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/closure.fromcallable.php
