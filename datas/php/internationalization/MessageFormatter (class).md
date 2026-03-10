# The MessageFormatter class

Source: https://devdocs.io/php/class.messageformatter

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter is a concrete class that enables users to produce concatenated, language-neutral messages. The methods supplied in this class are used to build all the messages that are seen by end users.

The MessageFormatter class assembles messages from various fragments (such as text fragments, numbers, and dates) supplied by the program. Because of the MessageFormatter class, the program does not need to know the order of the fragments. The class uses the formatting specifications for the fragments to assemble them into a message that is contained in a single string within a resource bundle. For example, MessageFormatter enables you to print the phrase "Finished printing x out of y files..." in a manner that still allows for flexibility in translation.

Previously, an end user message was created as a sentence and handled as a string. This procedure created problems for localizers because the sentence structure, word order, number format and so on are very different from language to language. The language-neutral way to create messages keeps each part of the message separate and provides keys to the data. Using these keys, the MessageFormatter class can concatenate the parts of the message, localize them, and display a well-formed string to the end user.

MessageFormatter takes a set of objects, formats them, and then inserts the formatted strings into the pattern at the appropriate places. Choice formats can be used in conjunction with MessageFormatter to handle plurals, match numbers, and select from an array of items. Typically, the message format will come from resources and the arguments will be dynamically set at runtime.

## Class synopsis

```
public static create(string $locale, string $pattern): ?MessageFormatter
```

```
public format(array $values): string|false
```

```
public static formatMessage(string $locale, string $pattern, array $values): string|false
```

```
public getErrorCode(): int
```

```
public getErrorMessage(): string
```

```
public getLocale(): string
```

```
public getPattern(): string|false
```

```
public parse(string $string): array|false
```

```
public static parseMessage(string $locale, string $pattern, string $message): array|false
```

```
public setPattern(string $pattern): bool
```

## See Also

- » ICU formatting documentation
- » ICU message formatting description
- » ICU message formatters
- » ICU choice formatters

## Table of Contents

- MessageFormatter::create — Constructs a new Message Formatter
- MessageFormatter::format — Format the message
- MessageFormatter::formatMessage — Quick format message
- MessageFormatter::getErrorCode — Get the error code from last operation
- MessageFormatter::getErrorMessage — Get the error text from the last operation
- MessageFormatter::getLocale — Get the locale for which the formatter was created
- MessageFormatter::getPattern — Get the pattern used by the formatter
- MessageFormatter::parse — Parse input string according to pattern
- MessageFormatter::parseMessage — Quick parse input string
- MessageFormatter::setPattern — Set the pattern used by the formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.messageformatter.php
