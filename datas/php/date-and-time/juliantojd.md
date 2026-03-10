# juliantojd

Source: https://devdocs.io/php/function.juliantojd

(PHP 4, PHP 5, PHP 7, PHP 8)

juliantojd — Converts a Julian Calendar date to Julian Day Count

### Description

```
juliantojd(int $month, int $day, int $year): int
```

Valid Range for Julian Calendar 4713 B.C. to 9999 A.D.

Although this function can handle dates all the way back to 4713 B.C., such use may not be meaningful. The calendar was created in 46 B.C., but the details did not stabilize until at least 8 A.D., and perhaps as late at the 4th century. Also, the beginning of a year varied from one culture to another - not all accepted January as the first month.

Remember, the current calendar system being used worldwide is the Gregorian calendar. gregoriantojd() can be used to convert such dates to their Julian Day count.

### Parameters

The month as a number from 1 (for January) to 12 (for December)

The day as a number from 1 to 31

The year as a number between -4713 and 9999

### Return Values

The julian day for the given julian date as an integer.

### See Also

- jdtojulian() - Converts a Julian Day Count to a Julian Calendar Date
- cal_to_jd() - Converts from a supported calendar to Julian Day Count

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.juliantojd.php
