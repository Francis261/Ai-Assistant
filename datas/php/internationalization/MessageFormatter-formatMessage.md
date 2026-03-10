# MessageFormatter::formatMessage

Source: https://devdocs.io/php/messageformatter.formatmessage

# msgfmt_format_message

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::formatMessage -- msgfmt_format_message — Quick format message

### Description

Object-oriented style

```
public static MessageFormatter::formatMessage(string $locale, string $pattern, array $values): string|false
```

Procedural style

```
msgfmt_format_message(string $locale, string $pattern, array $values): string|false
```

Quick formatting function that formats the string without having to explicitly create the formatter object. Use this function when the format operation is done only once and does not need any parameters or state to be kept or when wanting to customize the output by providing additional context to ICU directly.

### Parameters

The locale to use for formatting locale-dependent parts

The pattern string to insert things into. The pattern uses an 'apostrophe-friendly' syntax; see » Quoting/Escaping for details.

The array of values to insert into the format string

### Return Values

The formatted pattern string or false if an error occurred

### Examples

Example #1 msgfmt_format_message() example

```
<?php
echo msgfmt_format_message("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree\n", array(4560, 123, 4560/123));
echo msgfmt_format_message("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum\n", array(4560, 123, 4560/123));
echo msgfmt_format_message("en", 'You finished {place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}!', ['place' => 3]), "\n";
echo msgfmt_format_message("en",
        "There {apple, plural,
            =0 {are no apples}
            =1 {is one apple...}
            other {are # apples!}
        }",
    ['apple' => 0]
), "\n";
```

Example #2 OO example

```
<?php
echo MessageFormatter::formatMessage("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree\n", array(4560, 123, 4560/123));
echo MessageFormatter::formatMessage("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum\n", array(4560, 123, 4560/123));
echo MessageFormatter::formatMessage("en", 'You finished {place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}!', ['place' => 3]), "\n";
echo MessageFormatter::formatMessage("en",
        "There {apple, plural,
            =0 {are no apples}
            =1 {is one apple...}
            other {are # apples!}
        }",
    ['apple' => 0]
), "\n";
```

The above example will output:

```
4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum
You finished 3rd!
There are no apples
```

Example #3 Instructing ICU to format currency with common and with narrow currency symbol

Requires ICU ≥ 67.

```
<?php
echo msgfmt_format_message("cs_CZ", "{0, number, :: currency/CAD}", array(123.45));
echo msgfmt_format_message("cs_CZ", "{0, number, :: currency/CAD unit-width-narrow}", array(123.45));
```

The above example will output:

```
123,45 CA$
123,45 $
```

### See Also

- msgfmt_create() - Constructs a new Message Formatter
- msgfmt_parse() - Parse input string according to pattern
- msgfmt_get_error_code() - Get the error code from last operation
- msgfmt_get_error_message() - Get the error text from the last operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.formatmessage.php
