# DateTime::__unserialize

Source: https://devdocs.io/php/datetime.unserialize

# DateTimeImmutable::__unserialize

# DateTimeInterface::__unserialize

(PHP 8 >= 8.2.0)

DateTime::__unserialize -- DateTimeImmutable::__unserialize -- DateTimeInterface::__unserialize — Unserialize an Datetime

### Description

```
public DateTime::__unserialize(array $data): void
```

```
public DateTimeImmutable::__unserialize(array $data): void
```

```
public DateTimeInterface::__unserialize(array $data): void
```

The __unserialize() handler.

### Parameters

The serialized DateTime.

### Return Values

The DateTime object.

### Examples

Example #1 DateTime::unserialize() example

```
<?php
$serializedDate = 'O:8:"DateTime":3:{s:4:"date";s:26:"2025-03-27 00:00:00.000000";s:13:"timezone_type";i:3;s:8:"timezone";s:3:"UTC";}';
var_dump(unserialize($serializedDate));
```

The above example will output:

```
object(DateTime)#1 (3) {
  ["date"]=>
  string(26) "2025-03-27 00:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(3) "UTC"
}
```

### See Also

- DateTime::__serialize() - Serialize a DateTime

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.unserialize.php
