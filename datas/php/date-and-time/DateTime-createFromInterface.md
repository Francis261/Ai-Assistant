# DateTime::createFromInterface

Source: https://devdocs.io/php/datetime.createfrominterface

(PHP 8)

DateTime::createFromInterface — Returns new DateTime object encapsulating the given DateTimeInterface object

### Description

```
public static DateTime::createFromInterface(DateTimeInterface $object): DateTime
```

### Parameters

The DateTimeInterface object that needs to be converted to a mutable version. This object is not modified, but instead a new DateTime object is created containing the same date, time, and timezone information.

### Return Values

Returns a new DateTime instance.

### Examples

Example #1 Creating a mutable date time object

```
<?php
$date = new DateTimeImmutable("2014-06-20 11:45 Europe/London");
$mutable = DateTime::createFromInterface($date);

$date = new DateTime("2014-06-20 11:45 Europe/London");
$also_mutable = DateTime::createFromInterface($date);
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.createfrominterface.php
