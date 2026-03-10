# MessageFormatter::parseMessage

Source: https://devdocs.io/php/messageformatter.parsemessage

# msgfmt_parse_message

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::parseMessage -- msgfmt_parse_message — Quick parse input string

### Description

Object-oriented style

```
public static MessageFormatter::parseMessage(string $locale, string $pattern, string $message): array|false
```

Procedural style

```
msgfmt_parse_message(string $locale, string $pattern, string $message): array|false
```

Parses input string without explicitly creating the formatter object. Use this function when the format operation is done only once and does not need any parameters or state to be kept.

### Parameters

The locale to use for parsing locale-dependent parts

The pattern with which to parse the message.

The string to parse, conforming to the pattern.

### Return Values

An array containing items extracted, or false on error

### Examples

Example #1 msgfmt_parse_message() example

```
<?php
$fmt = msgfmt_parse_message('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree",
                            "4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($fmt);

$fmt = msgfmt_parse_message('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum", 
                            "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($fmt);
?>
```

Example #2 OO example

```
<?php
$fmt = MessageFormatter::parseMessage('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree",
                            "4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($fmt);

$fmt = MessageFormatter::parseMessage('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum", 
                            "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($fmt);
?>
```

The above example will output:

```
array (
  0 => 4560,
  1 => 123,
  2 => 37.073,
)
array (
  0 => 4560,
  1 => 123,
  2 => 37.073,
)
```

### See Also

- msgfmt_create() - Constructs a new Message Formatter
- msgfmt_format_message() - Quick format message
- msgfmt_parse() - Parse input string according to pattern

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.parsemessage.php
