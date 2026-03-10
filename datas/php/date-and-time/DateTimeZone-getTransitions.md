# DateTimeZone::getTransitions

Source: https://devdocs.io/php/datetimezone.gettransitions

# timezone_transitions_get

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeZone::getTransitions -- timezone_transitions_get — Returns all transitions for the timezone

### Description

Object-oriented style

```
public DateTimeZone::getTransitions(int $timestampBegin = PHP_INT_MIN, int $timestampEnd = PHP_INT_MAX): array|false
```

Procedural style

```
timezone_transitions_get(DateTimeZone $object, int $timestampBegin = PHP_INT_MIN, int $timestampEnd = PHP_INT_MAX): array|false
```

### Parameters

Procedural style only: A DateTimeZone object returned by timezone_open()

Begin timestamp.

End timestamp.

### Return Values

Returns a numerically indexed array of transition arrays on success, or false on failure. DateTimeZone objects wrapping type 1 (UTC offsets) and type 2 (abbreviations) do not contain any transitions, and calling this method on them will return false.

If timestampBegin is given, the first entry in the returned array will contain a transition element at the time of timestampBegin.

### Examples

Example #1 A timezone_transitions_get() example

```
<?php
$timezone = new DateTimeZone("Europe/London");
$transitions = $timezone->getTransitions();
print_r(array_slice($transitions, 0, 3));
?>
```

The above example will output something similar to:

```
Array
(
    [0] => Array
        (
            [ts] => -2147483648
            [time] => 1901-12-13T20:45:52+00:00
            [offset] => -75
            [isdst] =>
            [abbr] => LMT
        )

    [1] => Array
        (
            [ts] => 442304971
            [time] => 1847-12-01T00:01:15+00:00
            [offset] => 0
            [isdst] =>
            [abbr] => GMT
        )

    [2] => Array
        (
            [ts] => -1691964000
            [time] => 1916-05-21T02:00:00+00:00
            [offset] => 3600
            [isdst] => 1
            [abbr] => BST
        )

)
```

Example #2 A timezone_transitions_get() example with timestampBegin set

```
<?php
$timezone = new DateTimeZone("Europe/London");
$transitions = $timezone->getTransitions(time());
print_r(array_slice($transitions, 0, 3));
?>
```

The above example will output something similar to:

```
Array
(
    [0] => Array
        (
            [ts] => 1759058251
            [time] => 2025-09-28T11:17:31+00:00
            [offset] => 3600
            [isdst] => 1
            [abbr] => BST
        )

    [1] => Array
        (
            [ts] => 1761440400
            [time] => 2025-10-26T01:00:00+00:00
            [offset] => 0
            [isdst] => 
            [abbr] => GMT
        )

    [2] => Array
        (
            [ts] => 1774746000
            [time] => 2026-03-29T01:00:00+00:00
            [offset] => 3600
            [isdst] => 1
            [abbr] => BST
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.gettransitions.php
