# DateTime::createFromImmutable

Source: https://devdocs.io/php/datetime.createfromimmutable

(PHP 7 >= 7.3.0, PHP 8)

DateTime::createFromImmutable — Returns new DateTime instance encapsulating the given DateTimeImmutable object

### Description

```
public static DateTime::createFromImmutable(DateTimeImmutable $object): static
```

### Parameters

The immutable DateTimeImmutable object that needs to be converted to a mutable version. This object is not modified, but instead a new DateTime instance is created containing the same date, time, and timezone information.

### Return Values

Returns a new DateTime instance.

### Changelog

### Examples

Example #1 Creating a mutable date time object

```
<?php
$date = new DateTimeImmutable("2014-06-20 11:45 Europe/London");
$mutable = DateTime::createFromImmutable( $date );
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.createfromimmutable.php
