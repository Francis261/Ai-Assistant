# DateTimeImmutable::getLastErrors

Source: https://devdocs.io/php/datetimeimmutable.getlasterrors

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::getLastErrors — Returns the warnings and errors

### Description

```
public static DateTimeImmutable::getLastErrors(): array|false
```

Returns an array of warnings and errors found while parsing a date/time string.

### Parameters

This function has no parameters.

### Return Values

Returns array containing info about warnings and errors, or false if there are neither warnings nor errors.

### Changelog

### Examples

Example #1 DateTimeImmutable::getLastErrors() example

```
<?php
try {
    $date = new DateTimeImmutable('asdfasdf');
} catch (Exception $e) {
    // For demonstration purposes only...
    print_r(DateTimeImmutable::getLastErrors());

    // The real object-oriented way to do this is
    echo $e->getMessage();
}
?>
```

The above example will output:

```
Array
(
    [warning_count] => 1
    [warnings] => Array
        (
            [6] => Double timezone specification
        )

    [error_count] => 1
    [errors] => Array
        (
            [0] => The timezone could not be found in the database
        )
)
Failed to parse time string (asdfasdf) at position 0 (a): The timezone could not be found in the database
```

The indexes 6, and 0 in the example output refer to the character index in the string where the error occurred.

Example #2 Detecting rolled over dates

```
<?php
$date = DateTimeImmutable::createFromFormat('!Y-m-d', '2020-02-30');
print_r(DateTimeImmutable::getLastErrors());
```

The above example will output:

```
Array
(
    [warning_count] => 1
    [warnings] => Array
        (
            [10] => The parsed date was invalid
        )

    [error_count] => 0
    [errors] => Array
        (
        )
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.getlasterrors.php
