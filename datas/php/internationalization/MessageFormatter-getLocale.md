# MessageFormatter::getLocale

Source: https://devdocs.io/php/messageformatter.getlocale

# msgfmt_get_locale

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::getLocale -- msgfmt_get_locale — Get the locale for which the formatter was created

### Description

Object-oriented style

```
public MessageFormatter::getLocale(): string
```

Procedural style

```
msgfmt_get_locale(MessageFormatter $formatter): string
```

Get the locale for which the formatter was created.

### Parameters

The formatter resource

### Return Values

The locale name

### Examples

Example #1 msgfmt_get_locale() example

```
<?php
$fmt = msgfmt_create('en_US', "Number {0,number}");
echo msgfmt_get_locale($fmt);
?>
```

Example #2 OO example

```
<?php
$fmt = new MessageFormatter('en_US', "Number {0,number}");
echo $fmt->getLocale();
?>
```

The above example will output:

```
en_US
```

### See Also

- msgfmt_create() - Constructs a new Message Formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.getlocale.php
