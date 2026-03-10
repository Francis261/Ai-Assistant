# MessageFormatter::format

Source: https://devdocs.io/php/messageformatter.format

# msgfmt_format

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::format -- msgfmt_format — Format the message

### Description

Object-oriented style

```
public MessageFormatter::format(array $values): string|false
```

Procedural style

```
msgfmt_format(MessageFormatter $formatter, array $values): string|false
```

Format the message by substituting the data into the format string according to the locale rules

### Parameters

The message formatter

Arguments to insert into the format string

### Return Values

The formatted string, or false if an error occurred

### Examples

Example #1 msgfmt_format() example

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

- msgfmt_create() - Constructs a new Message Formatter
- msgfmt_parse() - Parse input string according to pattern
- msgfmt_format_message() - Quick format message
- msgfmt_get_error_code() - Get the error code from last operation
- msgfmt_get_error_message() - Get the error text from the last operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.format.php
