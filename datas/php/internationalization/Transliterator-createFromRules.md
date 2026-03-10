# Transliterator::createFromRules

Source: https://devdocs.io/php/transliterator.createfromrules

# transliterator_create_from_rules

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Transliterator::createFromRules -- transliterator_create_from_rules — Create transliterator from rules

### Description

Object-oriented style

```
public static Transliterator::createFromRules(string $rules, int $direction = Transliterator::FORWARD): ?Transliterator
```

Procedural style

```
transliterator_create_from_rules(string $rules, int $direction = Transliterator::FORWARD): ?Transliterator
```

Creates a Transliterator from rules.

This function is currently not documented; only its argument list is available.

### Parameters

The rules as defined in Transform Rules Syntax of UTS #35: Unicode LDML.

The direction, defaults to Transliterator::FORWARD. May also be set to Transliterator::REVERSE.

### Return Values

Returns a Transliterator object on success, or null on failure.

### See Also

- Transliterator::getErrorMessage() - Get last error message
- Transliterator::create() - Create a transliterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/transliterator.createfromrules.php
