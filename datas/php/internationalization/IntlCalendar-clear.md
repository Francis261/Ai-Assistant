# IntlCalendar::clear

Source: https://devdocs.io/php/intlcalendar.clear

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::clear — Clear a field or all fields

### Description

Object-oriented style

```
public IntlCalendar::clear(?int $field = null): true
```

Procedural style

```
intlcal_clear(IntlCalendar $calendar, ?int $field = null): true
```

Clears either all of the fields or a specific field. A cleared field is marked as unset, giving it the lowest priority against overlapping fields or even default values when calculating the time. Additionally, its value is set to 0, though given the fieldʼs low priority, its value may have been internally set to another value by the time the field has finished been queried.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 IntlCalendar::clear() examples

```
<?php
ini_set('intl.default_locale', 'es_ES');
ini_set('date.timezone', 'UTC');

$fields = array(
    'FIELD_ERA'                  => 0,
    'FIELD_YEAR'                 => 1,
    'FIELD_MONTH'                => 2,
    'FIELD_WEEK_OF_YEAR'         => 3,
    'FIELD_WEEK_OF_MONTH'        => 4,
    'FIELD_DATE'                 => 5,
    'FIELD_DAY_OF_YEAR'          => 6,
    'FIELD_DAY_OF_WEEK'          => 7,
    'FIELD_DAY_OF_WEEK_IN_MONTH' => 8,
    'FIELD_AM_PM'                => 9,
    'FIELD_HOUR'                 => 10,
    'FIELD_HOUR_OF_DAY'          => 11,
    'FIELD_MINUTE'               => 12,
    'FIELD_SECOND'               => 13,
    'FIELD_MILLISECOND'          => 14,
    'FIELD_ZONE_OFFSET'          => 15,
    'FIELD_DST_OFFSET'           => 16,
    'FIELD_YEAR_WOY'             => 17,
    'FIELD_DOW_LOCAL'            => 18,
    'FIELD_EXTENDED_YEAR'        => 19,
    'FIELD_JULIAN_DAY'           => 20,
    'FIELD_MILLISECONDS_IN_DAY'  => 21,
    'FIELD_IS_LEAP_MONTH'        => 22,
    'FIELD_FIELD_COUNT'          => 23,
);
function getSetFields(IntlCalendar $cal) {
    global $fields;
    $ret = array();
    foreach ($fields as $name => $value) {
        if ($cal->isSet($value)) {
            $ret[] = $name;
        }
    }
    return $ret;
}

$cal = new IntlGregorianCalendar(2013, 2 /* March */, 15);
echo "After GregorianCalendar creation\n";
print_r(getSetFields($cal));
echo "\n";

echo IntlDateFormatter::formatObject($cal), "\n";
echo "After the formatter requested the extended year\n";
print_r(getSetFields($cal));
echo "\n";

$cal->clear(IntlCalendar::FIELD_YEAR);
echo "After the year has been cleared, the date stays the same\n";
echo IntlDateFormatter::formatObject($cal), "\n";
echo "because FIELD_EXTENDED_YEAR is still set\n";
print_r(getSetFields($cal));
echo "\n";

var_dump($cal->clear(IntlCalendar::FIELD_EXTENDED_YEAR));
echo "After the extended year has been cleared\n";
print_r(getSetFields($cal));
echo IntlDateFormatter::formatObject($cal), "\n";
echo "\n";

echo "After the fields are recalculated,\n"
        . " extended year is set again (to 1970)\n";
print_r(getSetFields($cal));
echo "\n";

$cal->clear();
echo "After calling variant with no arguments\n";
print_r(getSetFields($cal));
echo IntlDateFormatter::formatObject($cal), "\n";
```

The above example will output:

```
After GregorianCalendar creation
Array
(
    [0] => FIELD_ERA
    [1] => FIELD_YEAR
    [2] => FIELD_MONTH
    [3] => FIELD_DATE
)

15/03/2013 00:00:00
After the formatter requested the extended year
Array
(
    [0] => FIELD_ERA
    [1] => FIELD_YEAR
    [2] => FIELD_MONTH
    [3] => FIELD_DATE
    [4] => FIELD_EXTENDED_YEAR
)

After the year has been cleared, the date stays the same
15/03/2013 00:00:00
because FIELD_EXTENDED_YEAR is still set
Array
(
    [0] => FIELD_ERA
    [1] => FIELD_MONTH
    [2] => FIELD_DATE
    [3] => FIELD_EXTENDED_YEAR
)

bool(true)
After the extended year has been cleared
Array
(
    [0] => FIELD_ERA
    [1] => FIELD_MONTH
    [2] => FIELD_DATE
)
15/03/1970 00:00:00

After the fields are recalculated,
 extended year is set again (to 1970)
Array
(
    [0] => FIELD_ERA
    [1] => FIELD_MONTH
    [2] => FIELD_DATE
    [3] => FIELD_EXTENDED_YEAR
)

After calling variant with no arguments
Array
(
)
01/01/1970 00:00:00
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.clear.php
