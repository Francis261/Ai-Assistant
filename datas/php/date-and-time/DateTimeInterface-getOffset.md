# DateTimeInterface::getOffset

Source: https://devdocs.io/php/datetime.getoffset

# DateTimeImmutable::getOffset

# DateTime::getOffset

# date_offset_get

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeInterface::getOffset -- DateTimeImmutable::getOffset -- DateTime::getOffset -- date_offset_get — Returns the timezone offset

### Description

Object-oriented style

```
public DateTimeInterface::getOffset(): int
```

```
public DateTimeImmutable::getOffset(): int
```

```
public DateTime::getOffset(): int
```

Procedural style

```
date_offset_get(DateTimeInterface $object): int
```

Returns the timezone offset.

### Parameters

Procedural style only: A DateTime object returned by date_create()

### Return Values

Returns the timezone offset in seconds from UTC on success.

### Examples

Example #1 DateTime::getOffset() example

Object-oriented style

```
<?php
$winter = new DateTimeImmutable('2010-12-21', new DateTimeZone('America/New_York'));
$summer = new DateTimeImmutable('2008-06-21', new DateTimeZone('America/New_York'));

echo $winter->getOffset() . "\n";
echo $summer->getOffset() . "\n";
```

The above example will output:

```
-18000
-14400
```

Procedural style

```
<?php
$winter = date_create('2010-12-21', timezone_open('America/New_York'));
$summer = date_create('2008-06-21', timezone_open('America/New_York'));

echo date_offset_get($winter) . "\n";
echo date_offset_get($summer) . "\n";
```

The above example will output:

```
-18000
-14400
```

Note: -18000 = -5 hours, -14400 = -4 hours.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.getoffset.php
