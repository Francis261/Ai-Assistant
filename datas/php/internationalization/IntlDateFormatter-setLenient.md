# IntlDateFormatter::setLenient

Source: https://devdocs.io/php/intldateformatter.setlenient

# datefmt_set_lenient

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::setLenient -- datefmt_set_lenient — Set the leniency of the parser

### Description

Object-oriented style

```
public IntlDateFormatter::setLenient(bool $lenient): void
```

Procedural style

```
datefmt_set_lenient(IntlDateFormatter $formatter, bool $lenient): void
```

Define if the parser is strict or lenient in interpreting inputs that do not match the pattern exactly. Enabling lenient parsing allows the parser to accept otherwise flawed date or time patterns, parsing as much as possible to obtain a value. Extra space, unrecognized tokens, or invalid values ("February 30th") are not accepted.

### Parameters

The formatter resource

Sets whether the parser is lenient or not, default is true (lenient).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 datefmt_set_lenient() example

```
<?php
$fmt = datefmt_create(
    'en_US', 
    IntlDateFormatter::FULL, 
    IntlDateFormatter::FULL, 
    'America/Los_Angeles', 
    IntlDateFormatter::GREGORIAN, 
    'dd/MM/yyyy'
);
echo 'lenient of the formatter is : ';
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
datefmt_parse($fmt, '35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . datefmt_parse($fmt, '35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}
datefmt_set_lenient($fmt, false);
echo "\nNow lenient of the formatter is : ";
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
datefmt_parse($fmt, '35/13/1971');
echo "\nTrying to do parse('35/13/1971').\nResult is : " . datefmt_parse($fmt, '35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : ".intl_get_error_message();
    echo "\nError_code is : ".intl_get_error_code();
}

?>
```

Example #2 OO example

```
<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'dd/MM/yyyy'
);
echo 'lenient of the formatter is : ';
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
$fmt->parse('35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . $fmt->parse('35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}

$fmt->setLenient(FALSE);
echo "\nNow lenient of the formatter is : ";
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
$fmt->parse('35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . $fmt->parse('35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}

?>
```

The above example will output:

```
lenient of the formatter is : TRUE
Trying to do parse('35/13/1971').
Result is : 66038400
Now lenient of the formatter is : FALSE
Trying to do parse('35/13/1971').
Result is : 
Error_msg is : Date parsing failed: U_PARSE_ERROR
Error_code is : 9
```

### See Also

- datefmt_is_lenient() - Get the lenient used for the IntlDateFormatter
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.setlenient.php
