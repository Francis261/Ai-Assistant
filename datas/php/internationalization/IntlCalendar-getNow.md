# IntlCalendar::getNow

Source: https://devdocs.io/php/intlcalendar.getnow

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getNow — Get number representing the current time

### Description

Object-oriented style

```
public static IntlCalendar::getNow(): float
```

Procedural style

```
intlcal_get_now(): float
```

The number of milliseconds that have passed since the reference date. This number is derived from the system time.

### Parameters

This function has no parameters.

### Return Values

A float representing a number of milliseconds since the epoch, not counting leap seconds.

### Examples

Example #1 IntlCalendar::getNow()

```
<?php
$formatter = IntlDateFormatter::create('es_ES',
        IntlDateFormatter::FULL,
        IntlDateFormatter::FULL,
        'Europe/Madrid');

$val = IntlCalendar::getNow();

var_dump($val);
echo $formatter->format(IntlCalendar::getNow() / 1000.), "\n";
```

The above example will output:

```
float(1371425814666)
lunes, 17 de junio de 2013 01:36:54 Hora de verano de Europa central
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getnow.php
