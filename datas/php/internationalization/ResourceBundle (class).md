# The ResourceBundle class

Source: https://devdocs.io/php/class.resourcebundle

## Introduction

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

Localized software products often require sets of data that are to be customized depending on current locale, e.g.: messages, labels, formatting patterns. ICU resource mechanism allows to define sets of resources that the application can load on locale basis, while accessing them in unified locale-independent fashion.

This class implements access to ICU resource data files. These files are binary data arrays which ICU uses to store the localized data.

ICU resource bundle can hold simple resources and complex resources. Complex resources are containers which can be either integer-indexed or string-indexed (just like PHP arrays). Simple resources can be of the following types: string, integer, binary data field or integer array.

ResourceBundle supports direct access to the data through array access pattern and iteration via foreach, as well as access via class methods. The result will be PHP value for simple resources and ResourceBundle object for complex ones. All resources are read-only.

## Class synopsis

```
public count(): int
```

```
public static create(?string $locale, ?string $bundle, bool $fallback = true): ?ResourceBundle
```

```
public get(string|int $index, bool $fallback = true): mixed
```

```
public getErrorCode(): int
```

```
public getErrorMessage(): string
```

```
public static getLocales(string $bundle): array|false
```

## Changelog

## See Also

- » ICU Resource Management
- » ICU Data

## Table of Contents

- ResourceBundle::count — Get number of elements in the bundle
- ResourceBundle::create — Create a resource bundle
- ResourceBundle::get — Get data from the bundle
- ResourceBundle::getErrorCode — Get bundle's last error code
- ResourceBundle::getErrorMessage — Get bundle's last error message
- ResourceBundle::getLocales — Get supported locales

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.resourcebundle.php
