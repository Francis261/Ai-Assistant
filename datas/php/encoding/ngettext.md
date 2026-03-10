# ngettext

Source: https://devdocs.io/php/function.ngettext

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ngettext — Plural version of gettext

### Description

```
ngettext(string $singular, string $plural, int $count): string
```

The plural version of gettext(). Some languages have more than one form for plural messages dependent on the count.

### Parameters

The singular message ID.

The plural message ID.

The number (e.g. item count) to determine the translation for the respective grammatical number.

### Return Values

Returns correct plural form of message identified by singular and plural for count count.

### Examples

Example #1 ngettext() example

```
<?php

setlocale(LC_ALL, 'cs_CZ');
printf(ngettext("%d window", "%d windows", 1), 1); // 1 okno
printf(ngettext("%d window", "%d windows", 2), 2); // 2 okna
printf(ngettext("%d window", "%d windows", 5), 5); // 5 oken

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ngettext.php
