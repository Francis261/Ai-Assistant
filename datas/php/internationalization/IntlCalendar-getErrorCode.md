# IntlCalendar::getErrorCode

Source: https://devdocs.io/php/intlcalendar.geterrorcode

# intlcal_get_error_code

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getErrorCode -- intlcal_get_error_code — Get last error code on the object

### Description

Object-oriented style (method):

```
public IntlCalendar::getErrorCode(): int|false
```

Procedural style:

```
intlcal_get_error_code(IntlCalendar $calendar): int|false
```

Returns the numeric ICU error code for the last call on this object (including cloning) or the IntlCalendar given for the calendar parameter (in the procedural‒style version). This may indicate only a warning (negative error code) or no error at all (U_ZERO_ERROR). The actual presence of an error can be tested with intl_is_failure().

Invalid arguments detected on the PHP side (before invoking functions of the ICU library) are not recorded for the purposes of this function.

The last error that occurred in any call to a function of the intl extension, including early argument errors, can be obtained with intl_get_error_code(). This function resets the global error code, but not the objectʼs error code.

### Parameters

The calendar object, on the procedural style interface.

### Return Values

An ICU error code indicating either success, failure or a warning. Returns false on failure.

### Examples

Example #1 IntlCalendar::getErrorCode() and IntlCalendar::getErrorMessage()

```
<?php
ini_set("intl.error_level", E_WARNING);
ini_set("intl.default_locale", "nl");

$intlcal = new IntlGregorianCalendar(2012, 1, 29);
var_dump(
    $intlcal->getErrorCode(),
    $intlcal->getErrorMessage()
);
$intlcal->fieldDifference(-1e100, IntlCalendar::FIELD_SECOND);

var_dump(
    $intlcal->getErrorCode(),
    $intlcal->getErrorMessage()
);
```

The above example will output:

```
int(0)
string(12) "U_ZERO_ERROR"

Warning: IntlCalendar::fieldDifference(): intlcal_field_difference: Call to ICU method has failed in /home/glopes/php/ws/example.php on line 10
int(1)
string(81) "intlcal_field_difference: Call to ICU method has failed: U_ILLEGAL_ARGUMENT_ERROR"
```

### See Also

- IntlCalendar::getErrorMessage() - Get last error message on the object
- intl_is_failure() - Check whether the given error code indicates failure
- intl_error_name() - Get symbolic name for a given error code
- intl_get_error_code() - Get the last error code
- intl_get_error_message() - Get description of the last error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.geterrorcode.php
