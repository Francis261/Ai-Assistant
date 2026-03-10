# Transliterator::create

Source: https://devdocs.io/php/transliterator.create

# transliterator_create

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Transliterator::create -- transliterator_create — Create a transliterator

### Description

Object-oriented style

```
public static Transliterator::create(string $id, int $direction = Transliterator::FORWARD): ?Transliterator
```

Procedural style

```
transliterator_create(string $id, int $direction = Transliterator::FORWARD): ?Transliterator
```

Opens a Transliterator by ID.

This function is currently not documented; only its argument list is available.

### Parameters

The ID. A list of all registered transliterator IDs can be retrieved by using Transliterator::listIDs().

The direction, defaults to Transliterator::FORWARD. May also be set to Transliterator::REVERSE.

### Return Values

Returns a Transliterator object on success, or null on failure.

### See Also

- Transliterator::getErrorMessage() - Get last error message
- Transliterator::__construct() - Private constructor to deny instantiation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/transliterator.create.php
