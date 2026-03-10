# MessageFormatter::create

Source: https://devdocs.io/php/messageformatter.create

# MessageFormatter::__construct

# msgfmt_create

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::create -- MessageFormatter::__construct -- msgfmt_create — Constructs a new Message Formatter

### Description

Object-oriented style (method)

```
public static MessageFormatter::create(string $locale, string $pattern): ?MessageFormatter
```

Object-oriented style (constructor):

Procedural style

```
msgfmt_create(string $locale, string $pattern): ?MessageFormatter
```

Constructs a new Message Formatter

### Parameters

The locale to use when formatting arguments

The pattern string to stick arguments into. The pattern uses an 'apostrophe-friendly' syntax; see » Quoting/Escaping for details.

### Return Values

The formatter object, or null on failure.

### Errors/Exceptions

When invoked as constructor, on failure an IntlException is thrown.

### Examples

Example #1 msgfmt_create() example

```
<?php
$fmt = msgfmt_create("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
echo msgfmt_format($fmt, array(4560, 123, 4560/123));
$fmt = msgfmt_create("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
echo msgfmt_format($fmt, array(4560, 123, 4560/123));
?>
```

Example #2 OO example

```
<?php
$fmt = new MessageFormatter("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
echo $fmt->format(array(4560, 123, 4560/123));
$fmt = new MessageFormatter("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
echo $fmt->format(array(4560, 123, 4560/123));
?>
```

The above example will output:

```
4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum
```

### See Also

- msgfmt_format() - Format the message
- msgfmt_parse() - Parse input string according to pattern
- msgfmt_get_error_code() - Get the error code from last operation
- msgfmt_get_error_message() - Get the error text from the last operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.create.php
