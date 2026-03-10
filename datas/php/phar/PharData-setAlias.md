# PharData::setAlias

Source: https://devdocs.io/php/phardata.setalias

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::setAlias — Dummy function (Phar::setAlias is not valid for PharData)

### Description

```
public PharData::setAlias(string $alias): bool
```

Non-executable tar/zip archives cannot have an alias, so this method simply throws an exception.

### Parameters

A shorthand string that this archive can be referred to in phar stream wrapper access. This parameter is ignored.

### Return Values

### Errors/Exceptions

Throws PharException on all method calls

### See Also

- Phar::setAlias() - Set the alias for the Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.setalias.php
