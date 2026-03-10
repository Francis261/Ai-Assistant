# The php_user_filter class

Source: https://devdocs.io/php/class.php-user-filter

## Introduction

(PHP 5, PHP 7, PHP 8)

Children of this class are passed to stream_filter_register(). Note that the __construct method is not called; instead, php_user_filter::onCreate() should be used for initialization.

## Class synopsis

```
public filter(
 resource $in,
 resource $out,
 int &$consumed,
 bool $closing
): int
```

```
public onClose(): void
```

```
public onCreate(): bool
```

## Properties

Name of the filter registered by stream_filter_append().

## Table of Contents

- php_user_filter::filter — Called when applying the filter
- php_user_filter::onClose — Called when closing the filter
- php_user_filter::onCreate — Called when creating the filter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.php-user-filter.php
