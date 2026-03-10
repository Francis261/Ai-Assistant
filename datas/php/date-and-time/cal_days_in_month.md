# cal_days_in_month

Source: https://devdocs.io/php/function.cal-days-in-month

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

cal_days_in_month — Return the number of days in a month for a given year and calendar

### Description

```
cal_days_in_month(int $calendar, int $month, int $year): int
```

This function will return the number of days in the month of year for the specified calendar.

### Parameters

Calendar to use for calculation

Month in the selected calendar

Year in the selected calendar

### Return Values

The length in days of the selected month in the given calendar

### Examples

Example #1 cal_days_in_month() example

```
<?php
$number = cal_days_in_month(CAL_GREGORIAN, 8, 2003); // 31
echo "There were {$number} days in August 2003";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.cal-days-in-month.php
