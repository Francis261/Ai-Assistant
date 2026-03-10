# mysqli_stmt::attr_get

Source: https://devdocs.io/php/mysqli-stmt.attr-get

# mysqli_stmt_attr_get

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::attr_get -- mysqli_stmt_attr_get — Used to get the current value of a statement attribute

### Description

Object-oriented style

```
public mysqli_stmt::attr_get(int $attribute): int
```

Procedural style

```
mysqli_stmt_attr_get(mysqli_stmt $statement, int $attribute): int
```

Gets the current value of a statement attribute.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

The attribute that you want to get.

### Return Values

Returns the value of the attribute.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.attr-get.php
