# DateTime::__serialize

Source: https://devdocs.io/php/datetime.serialize

# DateTimeImmutable::__serialize

# DateTimeInterface::__serialize

(PHP 8 >= 8.2.0)

DateTime::__serialize -- DateTimeImmutable::__serialize -- DateTimeInterface::__serialize — Serialize a DateTime

### Description

```
public DateTime::__serialize(): array
```

```
public DateTimeImmutable::__serialize(): array
```

```
public DateTimeInterface::__serialize(): array
```

The __serialize() handler.

### Parameters

This function has no parameters.

### Return Values

The serialized representation of the DateTime object.

### Examples

Example #1 DateTime::serialize() example

```
<?php
$date = new DateTime('2025-03-27');
var_dump(serialize($date));
```

The above example will output:

```
string(114) "O:8:"DateTime":3:{s:4:"date";s:26:"2025-03-27 00:00:00.000000";s:13:"timezone_type";i:3;s:8:"timezone";s:3:"UTC";}"
```

### See Also

- DateTime::__unserialize() - Unserialize an Datetime

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.serialize.php
