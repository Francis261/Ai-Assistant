# The Normalizer class

Source: https://devdocs.io/php/class.normalizer

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Normalization is a process that involves transforming characters and sequences of characters into a formally-defined underlying representation. This process is most important when text needs to be compared for sorting and searching, but it is also used when storing text to ensure that the text is stored in a consistent representation.

The Unicode Consortium has defined a number of normalization forms reflecting the various needs of applications:

- Normalization Form D (NFD) - Canonical Decomposition
- Normalization Form C (NFC) - Canonical Decomposition followed by Canonical Composition
- Normalization Form KD (NFKD) - Compatibility Decomposition
- Normalization Form KC (NFKC) - Compatibility Decomposition followed by Canonical Composition

## Class synopsis

```
public static getRawDecomposition(string $string, int $form = Normalizer::FORM_C): ?string
```

```
public static isNormalized(string $string, int $form = Normalizer::FORM_C): bool
```

```
public static normalize(string $string, int $form = Normalizer::FORM_C): string|false
```

## Predefined Constants

The following constants define the normalization form used by the normalizer:

## See Also

- » Unicode Normalization
- » Unicode Normalization FAQ
- » ICU User Guide - Normalization
- » ICU API Reference - Normalization

## Changelog

## Table of Contents

- Normalizer::getRawDecomposition — Gets the Decomposition_Mapping property for the given UTF-8 encoded code point
- Normalizer::isNormalized — Checks if the provided string is already in the specified normalization form
- Normalizer::normalize — Normalizes the input provided and returns the normalized string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.normalizer.php
