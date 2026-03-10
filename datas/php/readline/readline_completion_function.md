# readline_completion_function

Source: https://devdocs.io/php/function.readline-completion-function

(PHP 4, PHP 5, PHP 7, PHP 8)

readline_completion_function — Registers a completion function

### Description

```
readline_completion_function(callable $callback): bool
```

This function registers a completion function. This is the same kind of functionality you'd get if you hit your tab key while using Bash.

### Parameters

You must supply the name of an existing function which accepts a partial command line and returns an array of possible matches.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readline-completion-function.php
