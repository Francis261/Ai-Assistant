# MessageFormatter::setPattern

Source: https://devdocs.io/php/messageformatter.setpattern

# msgfmt_set_pattern

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::setPattern -- msgfmt_set_pattern — Set the pattern used by the formatter

### Description

Object-oriented style

```
public MessageFormatter::setPattern(string $pattern): bool
```

Procedural style

```
msgfmt_set_pattern(MessageFormatter $formatter, string $pattern): bool
```

Set the pattern used by the formatter

### Parameters

The message formatter

The pattern string to use in this message formatter. The pattern uses an 'apostrophe-friendly' syntax; see » Quoting/Escaping for details.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 msgfmt_set_pattern() example

```
<?php
$fmt = msgfmt_create( "en_US", "{0, number} monkeys on {1, number} trees" );
echo "Default pattern: '" . msgfmt_get_pattern( $fmt ) . "'\n";
echo "Formatting result: " . msgfmt_format( $fmt, array(123, 456) ) . "\n";

msgfmt_set_pattern( $fmt, "{0, number} trees hosting {1, number} monkeys" );
echo "New pattern: '" . msgfmt_get_pattern( $fmt ) . "'\n";
echo "Formatted number: " . msgfmt_format( $fmt, array(123, 456) ) . "\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new MessageFormatter( "en_US", "{0, number} monkeys on {1, number} trees" );
echo "Default pattern: '" . $fmt->getPattern() . "'\n";
echo "Formatting result: " . $fmt->format(array(123, 456)) . "\n";

$fmt->setPattern("{0, number} trees hosting {1, number} monkeys" );
echo "New pattern: '" . $fmt->getPattern() . "'\n";
echo "Formatted number: " . $fmt->format(array(123, 456)) . "\n";
?>
```

The above example will output:

```
Default pattern: '{0,number} monkeys on {1,number} trees'
Formatting result: 123 monkeys on 456 trees
New pattern: '{0,number} trees hosting {1,number} monkeys'
Formatted number: 123 trees hosting 456 monkeys
```

### See Also

- msgfmt_create() - Constructs a new Message Formatter
- msgfmt_get_pattern() - Get the pattern used by the formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.setpattern.php
