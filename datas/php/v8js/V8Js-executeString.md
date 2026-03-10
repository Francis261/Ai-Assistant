# V8Js::executeString

Source: https://devdocs.io/php/v8js.executestring

(PECL v8js >= 0.1.0)

V8Js::executeString — Execute a string as Javascript code

### Description

```
public V8Js::executeString(string $script, string $identifier = "V8Js::executeString()", int $flags = V8Js::FLAG_NONE): mixed
```

Compiles and executes the string passed with script as Javascript code.

### Parameters

The code string to be executed.

Identifier string for the executed code. Used for debugging.

Execution flags. This value must be one of the V8Js::FLAG_* constants, defaulting to V8Js::FLAG_NONE.

- V8Js::FLAG_NONE: no flags
- V8Js::FLAG_FORCE_ARRAY: forces all Javascript objects passed to PHP to be associative arrays

V8Js::FLAG_NONE: no flags

V8Js::FLAG_FORCE_ARRAY: forces all Javascript objects passed to PHP to be associative arrays

### Return Values

Returns the last variable instantiated in the Javascript code converted to matching PHP variable type.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/v8js.executestring.php
