# The Locale class

Source: https://devdocs.io/php/class.locale

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

A "Locale" is an identifier used to get language, culture, or regionally-specific behavior from an API. PHP locales are organized and identified the same way that the CLDR locales used by ICU (and many vendors of Unix-like operating systems, the Mac, Java, and so forth) use. Locales are identified using RFC 4646 language tags (which use hyphen, not underscore) in addition to the more traditional underscore-using identifiers. Unless otherwise noted the functions in this class are tolerant of both formats.

Examples of identifiers include:

- en-US (English, United States)
- zh-Hant-TW (Chinese, Traditional Script, Taiwan)
- fr-CA, fr-FR (French for Canada and France respectively)

The Locale class (and related procedural functions) are used to interact with locale identifiers--to verify that an ID is well-formed, valid, etc. The extensions used by CLDR in UAX #35 (and inherited by ICU) are valid and used wherever they would be in ICU normally.

Locales cannot be instantiated as objects. All of the functions/methods provided are static.

The null or empty string obtains the "root" locale. The "root" locale is equivalent to "en_US_POSIX" in CLDR. Language tags (and thus locale identifiers) are case insensitive. There exists a canonicalization function to make case match the specification.

## Class synopsis

```
public static acceptFromHttp(string $header): string|false
```

```
public static canonicalize(string $locale): ?string
```

```
public static composeLocale(array $subtags): string|false
```

```
public static filterMatches(string $languageTag, string $locale, bool $canonicalize = false): ?bool
```

```
public static getAllVariants(string $locale): ?array
```

```
public static getDefault(): string
```

```
public static getDisplayLanguage(string $locale, ?string $displayLocale = null): string|false
```

```
public static getDisplayName(string $locale, ?string $displayLocale = null): string|false
```

```
public static getDisplayRegion(string $locale, ?string $displayLocale = null): string|false
```

```
public static getDisplayScript(string $locale, ?string $displayLocale = null): string|false
```

```
public static getDisplayVariant(string $locale, ?string $displayLocale = null): string|false
```

```
public static getKeywords(string $locale): array|false|null
```

```
public static getPrimaryLanguage(string $locale): ?string
```

```
public static getRegion(string $locale): ?string
```

```
public static getScript(string $locale): ?string
```

```
public static lookup(
 array $languageTag,
 string $locale,
 bool $canonicalize = false,
 ?string $defaultLocale = null
): ?string
```

```
public static parseLocale(string $locale): ?array
```

```
public static setDefault(string $locale): true
```

## Predefined Constants

These constants describe the choice of the locale for the getLocale method of different classes.

## Locale Subtags

These constants define how the Locales are parsed or composed. They should be used as keys in the argument array to locale_compose() and are returned from locale_parse() as keys of the returned associative array.

## See Also

- » RFC 4646 - Tags for Identifying Languages
- » RFC 4647 - Matching of Language Tags
- » Unicode CLDR Project:Common Locale Data Repository
- » IANA Language Subtags Registry
- » ICU User Guide - Locale
- » ICU Locale api

## Changelog

## Table of Contents

- Locale::acceptFromHttp — Tries to find out best available locale based on HTTP "Accept-Language" header
- Locale::canonicalize — Canonicalize the locale string
- Locale::composeLocale — Returns a correctly ordered and delimited locale ID
- Locale::filterMatches — Checks if a language tag filter matches with locale
- Locale::getAllVariants — Gets the variants for the input locale
- Locale::getDefault — Gets the default locale value from the INTL global 'default_locale'
- Locale::getDisplayLanguage — Returns an appropriately localized display name for language of the inputlocale
- Locale::getDisplayName — Returns an appropriately localized display name for the input locale
- Locale::getDisplayRegion — Returns an appropriately localized display name for region of the input locale
- Locale::getDisplayScript — Returns an appropriately localized display name for script of the input locale
- Locale::getDisplayVariant — Returns an appropriately localized display name for variants of the input locale
- Locale::getKeywords — Gets the keywords for the input locale
- Locale::getPrimaryLanguage — Gets the primary language for the input locale
- Locale::getRegion — Gets the region for the input locale
- Locale::getScript — Gets the script for the input locale
- Locale::lookup — Searches the language tag list for the best match to the language
- Locale::parseLocale — Returns a key-value array of locale ID subtag elements
- Locale::setDefault — Sets the default runtime locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.locale.php
