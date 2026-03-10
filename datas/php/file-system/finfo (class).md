# The finfo class

Source: https://devdocs.io/php/class.finfo

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL fileinfo >= 0.1.0)

This class provides an object-oriented interface into the fileinfo functions.

## Class synopsis

```
public buffer(string $string, int $flags = FILEINFO_NONE, ?resource $context = null): string|false
```

```
public file(string $filename, int $flags = FILEINFO_NONE, ?resource $context = null): string|false
```

```
public set_flags(int $flags): true
```

## Table of Contents

- finfo::buffer — Alias of finfo_buffer()
- finfo::__construct — Alias of finfo_open
- finfo::file — Alias of finfo_file()
- finfo::set_flags — Alias of finfo_set_flags()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.finfo.php
