# IntlCalendar::getErrorMessage

Source: https://devdocs.io/php/intlcalendar.geterrormessage

# intlcal_get_error_message

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getErrorMessage -- intlcal_get_error_message — Get last error message on the object

### Description

Object-oriented style (method):

```
public IntlCalendar::getErrorMessage(): string|false
```

Procedural style:

```
intlcal_get_error_message(IntlCalendar $calendar): string|false
```

Returns the error message (if any) associated with the error reported by IntlCalendar::getErrorCode() or intlcal_get_error_code(). If there is no associated error message, only the string representation of the name of the error constant will be returned. Otherwise, the message also includes a message set on the side of the PHP binding.

### Parameters

The calendar object, on the procedural style interface.

### Return Values

The error message associated with last error that occurred in a function call on this object, or a string indicating the non-existence of an error. Returns false on failure.

### Examples

Example #1 IntlCalendar::getErrorMessage()

```
<?php
$cal = IntlCalendar::createInstance('UTC', 'en_US');
var_dump($cal->getErrorMessage());

$cal->getWeekendTransition(IntlCalendar::DOW_WEDNESDAY);
var_dump($cal->getErrorMessage());
```

The above example will output:

```
string(12) "U_ZERO_ERROR"
string(82) "intlcal_get_weekend_transition: Error calling ICU method: U_ILLEGAL_ARGUMENT_ERROR"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.geterrormessage.php
