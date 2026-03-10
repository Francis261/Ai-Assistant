# MessageFormatter::parse

Source: https://devdocs.io/php/messageformatter.parse

# msgfmt_parse

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::parse -- msgfmt_parse — Parse input string according to pattern

### Description

Object-oriented style

```
public MessageFormatter::parse(string $string): array|false
```

Procedural style

```
msgfmt_parse(MessageFormatter $formatter, string $string): array|false
```

Parses input string and return any extracted items as an array.

### Parameters

The message formatter

The string to parse

### Return Values

An array containing the items extracted, or false on error

### Examples

Example #1 msgfmt_parse() example

```
<?php
$fmt = msgfmt_create('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
$res = msgfmt_parse($fmt, "4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($res);

$fmt = msgfmt_create('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
$res = msgfmt_parse($fmt, "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($res);
?>
```

Example #2 OO example

```
<?php
$fmt = new MessageFormatter('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
$res = $fmt->parse("4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($res);

$fmt = new MessageFormatter('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
$res = $fmt->parse("4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($res);
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
- msgfmt_format() - Format the message
- msgfmt_parse_message() - Quick parse input string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.parse.php
