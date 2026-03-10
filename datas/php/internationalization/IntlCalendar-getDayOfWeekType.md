# IntlCalendar::getDayOfWeekType

Source: https://devdocs.io/php/intlcalendar.getdayofweektype

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getDayOfWeekType — Tell whether a day is a weekday, weekend or a day that has a transition between the two

### Description

Object-oriented style

```
public IntlCalendar::getDayOfWeekType(int $dayOfWeek): int|false
```

Procedural style

```
intlcal_get_day_of_week_type(IntlCalendar $calendar, int $dayOfWeek): int|false
```

Returns whether the passed day is a weekday (IntlCalendar::DOW_TYPE_WEEKDAY), a weekend day (IntlCalendar::DOW_TYPE_WEEKEND), a day during which a transition occurs into the weekend (IntlCalendar::DOW_TYPE_WEEKEND_OFFSET) or a day during which the weekend ceases (IntlCalendar::DOW_TYPE_WEEKEND_CEASE).

If the return is either IntlCalendar::DOW_TYPE_WEEKEND_OFFSET or IntlCalendar::DOW_TYPE_WEEKEND_CEASE, then IntlCalendar::getWeekendTransition() can be called to obtain the time of the transition.

This function requires ICU 4.4 or later.

### Parameters

An IntlCalendar instance.

One of the constants IntlCalendar::DOW_SUNDAY, IntlCalendar::DOW_MONDAY, …, IntlCalendar::DOW_SATURDAY.

### Return Values

Returns one of the constants IntlCalendar::DOW_TYPE_WEEKDAY, IntlCalendar::DOW_TYPE_WEEKEND, IntlCalendar::DOW_TYPE_WEEKEND_OFFSET or IntlCalendar::DOW_TYPE_WEEKEND_CEASE or false on failure.

### Examples

Example #1 IntlCalendar::getDayOfWeekType()

```
<?php
foreach (array('en_US', 'ar_SA') as $locale) {
    echo "Locale: ", Locale::getDisplayName($locale, "en_US"), "\n";

    $cal = IntlCalendar::createInstance('UTC', $locale);

    for ($i = IntlCalendar::DOW_SUNDAY; $i <= IntlCalendar::DOW_SATURDAY; $i++) {
        $type = $cal->getDayOfWeekType($i);
        $transition = ($type !== IntlCalendar::DOW_TYPE_WEEKDAY)
            ? $cal->getWeekendTransition($i)
            : '';
        echo $i, " ", $type, " ", $transition, "\n";
    }
    echo "\n";
}
?>
```

The above example will output:

```
Locale: English (United States)
1 1 86400000
2 0
3 0
4 0
5 0
6 0
7 1 0

Locale: Arabic (Saudi Arabia)
1 0
2 0
3 0
4 0
5 0
6 1 0
7 1 86400000
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getdayofweektype.php
