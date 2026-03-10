# DateTimeImmutable::createFromMutable

Source: https://devdocs.io/php/datetimeimmutable.createfrommutable

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

DateTimeImmutable::createFromMutable — Returns new DateTimeImmutable instance encapsulating the given DateTime object

### Description

```
public static DateTimeImmutable::createFromMutable(DateTime $object): static
```

### Parameters

The mutable DateTime object that you want to convert to an immutable version. This object is not modified, but instead a new DateTimeImmutable instance is created containing the same date time and timezone information.

### Return Values

Returns a new DateTimeImmutable instance.

### Changelog

### Examples

Example #1 Creating an immutable date time object

```
<?php
$date = new DateTime("2014-06-20 11:45 Europe/London");
$immutable = DateTimeImmutable::createFromMutable( $date );
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.createfrommutable.php
