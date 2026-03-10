# strftime

Source: https://devdocs.io/php/function.strftime

(PHP 4, PHP 5, PHP 7, PHP 8)

strftime — Format a local time/date according to locale settings

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

Alternatives to this function include:

- date()
- IntlDateFormatter::format()

### Description

```
#[\Deprecated] 
 strftime(string $format, ?int $timestamp = null): string|false
```

Format the time and/or date according to locale settings. Month and weekday names and other language-dependent strings respect the current locale set with setlocale().

Not all conversion specifiers may be supported by your C library, in which case they will not be supported by PHP's strftime(). Additionally, not all platforms support negative timestamps, so your date range may be limited to no earlier than the Unix epoch. This means that %e, %T, %R and, %D (and possibly others) - as well as dates prior to Jan 1, 1970 - will not work on Windows, some Linux distributions, and a few other operating systems. For Windows systems, a complete overview of supported conversion specifiers can be found at » MSDN. Instead use the IntlDateFormatter::format() method.

### Parameters

Contrary to ISO-9899:1999, Sun Solaris starts with Sunday as 1. As a result, %u may not function as described in this manual.

Windows only:

The %e modifier is not supported in the Windows implementation of this function. To achieve this value, the %#d modifier can be used instead. The example below illustrates how to write a cross platform compatible function.

The %z and %Z modifiers both return the time zone name instead of the offset or abbreviation.

macOS and musl only: The %P modifier is not supported in the macOS implementation of this function.

The optional timestamp parameter is an int Unix timestamp that defaults to the current local time if timestamp is omitted or null. In other words, it defaults to the value of time().

### Return Values

Returns a string formatted according format using the given timestamp or the current local time if no timestamp is given. Month and weekday names and other language-dependent strings respect the current locale set with setlocale(). The function returns false if format is empty, contains unsupported conversion specifiers, or if the length of the returned string would be greater than 4095.

### Errors/Exceptions

Every call to a date/time function will generate a E_WARNING if the time zone is not valid. See also date_default_timezone_set()

As the output is dependent upon the underlying C library, some conversion specifiers are not supported. On Windows, supplying unknown conversion specifiers will result in 5 E_WARNING messages and return false. On other operating systems you may not get any E_WARNING messages and the output may contain the conversion specifiers unconverted.

### Changelog

### Examples

This example will work if you have the respective locales installed in your system.

Example #1 strftime() locale examples

```
<?php
setlocale(LC_TIME, "C");
echo strftime("%A");
setlocale(LC_TIME, "fi_FI");
echo strftime(" in Finnish is %A,");
setlocale(LC_TIME, "fr_FR");
echo strftime(" in French %A and");
setlocale(LC_TIME, "de_DE");
echo strftime(" in German %A.\n");
```

Example #2 ISO 8601:1988 week number example

```
<?php
/*     December 2002 / January 2003
ISOWk  M   Tu  W   Thu F   Sa  Su
----- ----------------------------
51     16  17  18  19  20  21  22
52     23  24  25  26  27  28  29
1      30  31   1   2   3   4   5
2       6   7   8   9  10  11  12
3      13  14  15  16  17  18  19   */

// Outputs: 12/28/2002 - %V,%G,%Y = 52,2002,2002
echo "12/28/2002 - %V,%G,%Y = " . strftime("%V,%G,%Y", strtotime("12/28/2002")) . "\n";

// Outputs: 12/30/2002 - %V,%G,%Y = 1,2003,2002
echo "12/30/2002 - %V,%G,%Y = " . strftime("%V,%G,%Y", strtotime("12/30/2002")) . "\n";

// Outputs: 1/3/2003 - %V,%G,%Y = 1,2003,2003
echo "1/3/2003 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/3/2003")) . "\n";

// Outputs: 1/10/2003 - %V,%G,%Y = 2,2003,2003
echo "1/10/2003 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/10/2003")) . "\n";

/*     December 2004 / January 2005
ISOWk  M   Tu  W   Thu F   Sa  Su
----- ----------------------------
51     13  14  15  16  17  18  19
52     20  21  22  23  24  25  26
53     27  28  29  30  31   1   2
1       3   4   5   6   7   8   9
2      10  11  12  13  14  15  16   */

// Outputs: 12/23/2004 - %V,%G,%Y = 52,2004,2004
echo "12/23/2004 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("12/23/2004")) . "\n";

// Outputs: 12/31/2004 - %V,%G,%Y = 53,2004,2004
echo "12/31/2004 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("12/31/2004")) . "\n";

// Outputs: 1/2/2005 - %V,%G,%Y = 53,2004,2005
echo "1/2/2005 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/2/2005")) . "\n";

// Outputs: 1/3/2005 - %V,%G,%Y = 1,2005,2005
echo "1/3/2005 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/3/2005")) . "\n";
```

Example #3 Cross platform compatible example using the %e modifier

```
<?php

// Jan 1: results in: '%e%1%' (%%, e, %%, %e, %%)
$format = '%%e%%%e%%';

// Check for Windows to find and replace the %e 
// modifier correctly
if (strtoupper(substr(PHP_OS, 0, 3)) == 'WIN') {
    $format = preg_replace('#(?<!%)((?:%%)*)%e#', '\1%#d', $format);
}

echo strftime($format);
```

Example #4 Display all known and unknown formats

```
<?php

// Describe the formats
$strftimeFormats = array(
    'A' => 'A full textual representation of the day',
    'B' => 'Full month name, based on the locale',
    'C' => 'Two digit representation of the century (year divided by 100, truncated to an integer)',
    'D' => 'Same as "%m/%d/%y"',
    'E' => '',
    'F' => 'Same as "%Y-%m-%d"',
    'G' => 'The full four-digit version of %g',
    'H' => 'Two digit representation of the hour in 24-hour format',
    'I' => 'Two digit representation of the hour in 12-hour format',
    'J' => '',
    'K' => '',
    'L' => '',
    'M' => 'Two digit representation of the minute',
    'N' => '',
    'O' => '',
    'P' => 'lower-case "am" or "pm" based on the given time',
    'Q' => '',
    'R' => 'Same as "%H:%M"',
    'S' => 'Two digit representation of the second',
    'T' => 'Same as "%H:%M:%S"',
    'U' => 'Week number of the given year, starting with the first Sunday as the first week',
    'V' => 'ISO-8601:1988 week number of the given year, starting with the first week of the year with at least 4 weekdays, with Monday being the start of the week',
    'W' => 'A numeric representation of the week of the year, starting with the first Monday as the first week',
    'X' => 'Preferred time representation based on locale, without the date',
    'Y' => 'Four digit representation for the year',
    'Z' => 'The time zone offset/abbreviation option NOT given by %z (depends on operating system)',
    'a' => 'An abbreviated textual representation of the day',
    'b' => 'Abbreviated month name, based on the locale',
    'c' => 'Preferred date and time stamp based on local',
    'd' => 'Two-digit day of the month (with leading zeros)',
    'e' => 'Day of the month, with a space preceding single digits',
    'f' => '',
    'g' => 'Two digit representation of the year going by ISO-8601:1988 standards (see %V)',
    'h' => 'Abbreviated month name, based on the locale (an alias of %b)',
    'i' => '',
    'j' => 'Day of the year, 3 digits with leading zeros',
    'k' => 'Hour in 24-hour format, with a space preceding single digits',
    'l' => 'Hour in 12-hour format, with a space preceding single digits',
    'm' => 'Two digit representation of the month',
    'n' => 'A newline character ("\n")',
    'o' => '',
    'p' => 'UPPER-CASE "AM" or "PM" based on the given time',
    'q' => '',
    'r' => 'Same as "%I:%M:%S %p"',
    's' => 'Unix Epoch Time timestamp',
    't' => 'A Tab character ("\t")',
    'u' => 'ISO-8601 numeric representation of the day of the week',
    'v' => '',
    'w' => 'Numeric representation of the day of the week',
    'x' => 'Preferred date representation based on locale, without the time',
    'y' => 'Two digit representation of the year',
    'z' => 'Either the time zone offset from UTC or the abbreviation (depends on operating system)',
    '%' => 'A literal percentage character ("%")',
);

// Results
$strftimeValues = array();

// Evaluate the formats whilst suppressing any errors
foreach ($strftimeFormats as $format => $description) {
    if (false !== ($value = @strftime("%{$format}"))) {
        $strftimeValues[$format] = $value;
    }
}

// Find the longest value
$maxValueLength = 2 + max(array_map('strlen', $strftimeValues));

// Report known formats
foreach ($strftimeValues as $format => $value) {
    echo "Known format   : '{$format}' = ", str_pad("'{$value}'", $maxValueLength), " ( {$strftimeFormats[$format]} )\n";
}

// Report unknown formats
foreach (array_diff_key($strftimeFormats, $strftimeValues) as $format => $description) {
    echo "Unknown format : '{$format}'   ", str_pad(' ', $maxValueLength), ($description ? " ( {$description} )" : ''), "\n";
}
```

The above example will output something similar to:

```
Known format   : 'A' = 'Friday'            ( A full textual representation of the day )
Known format   : 'B' = 'December'          ( Full month name, based on the locale )
Known format   : 'H' = '11'                ( Two digit representation of the hour in 24-hour format )
Known format   : 'I' = '11'                ( Two digit representation of the hour in 12-hour format )
Known format   : 'M' = '24'                ( Two digit representation of the minute )
Known format   : 'S' = '44'                ( Two digit representation of the second )
Known format   : 'U' = '48'                ( Week number of the given year, starting with the first Sunday as the first week )
Known format   : 'W' = '48'                ( A numeric representation of the week of the year, starting with the first Monday as the first week )
Known format   : 'X' = '11:24:44'          ( Preferred time representation based on locale, without the date )
Known format   : 'Y' = '2010'              ( Four digit representation for the year )
Known format   : 'Z' = 'GMT Standard Time' ( The time zone offset/abbreviation option NOT given by %z (depends on operating system) )
Known format   : 'a' = 'Fri'               ( An abbreviated textual representation of the day )
Known format   : 'b' = 'Dec'               ( Abbreviated month name, based on the locale )
Known format   : 'c' = '12/03/10 11:24:44' ( Preferred date and time stamp based on local )
Known format   : 'd' = '03'                ( Two-digit day of the month (with leading zeros) )
Known format   : 'j' = '337'               ( Day of the year, 3 digits with leading zeros )
Known format   : 'm' = '12'                ( Two digit representation of the month )
Known format   : 'p' = 'AM'                ( UPPER-CASE "AM" or "PM" based on the given time )
Known format   : 'w' = '5'                 ( Numeric representation of the day of the week )
Known format   : 'x' = '12/03/10'          ( Preferred date representation based on locale, without the time )
Known format   : 'y' = '10'                ( Two digit representation of the year )
Known format   : 'z' = 'GMT Standard Time' ( Either the time zone offset from UTC or the abbreviation (depends on operating system) )
Known format   : '%' = '%'                 ( A literal percentage character ("%") )
Unknown format : 'C'                       ( Two digit representation of the century (year divided by 100, truncated to an integer) )
Unknown format : 'D'                       ( Same as "%m/%d/%y" )
Unknown format : 'E'
Unknown format : 'F'                       ( Same as "%Y-%m-%d" )
Unknown format : 'G'                       ( The full four-digit version of %g )
Unknown format : 'J'
Unknown format : 'K'
Unknown format : 'L'
Unknown format : 'N'
Unknown format : 'O'
Unknown format : 'P'                       ( lower-case "am" or "pm" based on the given time )
Unknown format : 'Q'
Unknown format : 'R'                       ( Same as "%H:%M" )
Unknown format : 'T'                       ( Same as "%H:%M:%S" )
Unknown format : 'V'                       ( ISO-8601:1988 week number of the given year, starting with the first week of the year with at least 4 weekdays, with Monday being the start of the week )
Unknown format : 'e'                       ( Day of the month, with a space preceding single digits )
Unknown format : 'f'
Unknown format : 'g'                       ( Two digit representation of the year going by ISO-8601:1988 standards (see %V) )
Unknown format : 'h'                       ( Abbreviated month name, based on the locale (an alias of %b) )
Unknown format : 'i'
Unknown format : 'k'                       ( Hour in 24-hour format, with a space preceding single digits )
Unknown format : 'l'                       ( Hour in 12-hour format, with a space preceding single digits )
Unknown format : 'n'                       ( A newline character ("\n") )
Unknown format : 'o'
Unknown format : 'q'
Unknown format : 'r'                       ( Same as "%I:%M:%S %p" )
Unknown format : 's'                       ( Unix Epoch Time timestamp )
Unknown format : 't'                       ( A Tab character ("\t") )
Unknown format : 'u'                       ( ISO-8601 numeric representation of the day of the week )
Unknown format : 'v'
```

### Notes

Note: %G and %V, which are based on ISO 8601:1988 week numbers can give unexpected (albeit correct) results if the numbering system is not thoroughly understood. See %V examples in this manual page.

### See Also

- IntlDateFormatter::format() - Format the date/time value as a string
- DateTimeInterface::format() - Returns date formatted according to given format
- » Online strftime() format design tool
- setlocale() - Set locale information
- mktime() - Get Unix timestamp for a date
- strptime() - Parse a time/date generated with strftime
- gmstrftime() - Format a GMT/UTC time/date according to locale settings
- » Open Group specification of strftime()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strftime.php
