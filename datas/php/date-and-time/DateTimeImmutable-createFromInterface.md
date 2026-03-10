# DateTimeImmutable::createFromInterface

Source: https://devdocs.io/php/datetimeimmutable.createfrominterface

(PHP 8)

DateTimeImmutable::createFromInterface — Returns new DateTimeImmutable object encapsulating the given DateTimeInterface object

### Description

```
public static DateTimeImmutable::createFromInterface(DateTimeInterface $object): DateTimeImmutable
```

### Parameters

The DateTimeInterface object that needs to be converted to an immutable version. This object is not modified, but instead a new DateTimeImmutable object is created containing the same date, time, and timezone information.

### Return Values

Returns a new DateTimeImmutable instance.

### Examples

Example #1 Creating an immutable date time object

```
<?php
$date = new DateTime("2014-06-20 11:45 Europe/London");
$immutable = DateTimeImmutable::createFromInterface($date);

$date = new DateTimeImmutable("2014-06-20 11:45 Europe/London");
$also_immutable = DateTimeImmutable::createFromInterface($date);
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.createfrominterface.php
