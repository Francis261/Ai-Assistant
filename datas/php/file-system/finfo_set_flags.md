# finfo_set_flags

Source: https://devdocs.io/php/function.finfo-set-flags

# finfo::set_flags

(PHP >= 5.3.0, PHP 7, PHP 8, PECL fileinfo >= 0.1.0)

finfo_set_flags -- finfo::set_flags — Set libmagic configuration options

### Description

Procedural style

```
finfo_set_flags(finfo $finfo, int $flags): true
```

Object-oriented style

```
public finfo::set_flags(int $flags): true
```

This function sets various Fileinfo options. Options can be set also directly in finfo_open() or other Fileinfo functions.

### Parameters

An finfo instance, returned by finfo_open().

One or disjunction of more Fileinfo constants.

### Return Values

Always returns true.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.finfo-set-flags.php
