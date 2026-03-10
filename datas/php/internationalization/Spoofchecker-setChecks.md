# Spoofchecker::setChecks

Source: https://devdocs.io/php/spoofchecker.setchecks

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Spoofchecker::setChecks — Set the checks to run

### Description

```
public Spoofchecker::setChecks(int $checks): void
```

Sets the checks that will be performed by SpoofChecker::isSuspicious().

### Parameters

The checks that will be performed by SpoofChecker::isSuspicious(). A bitmask of Spoofchecker::SINGLE_SCRIPT_CONFUSABLE, Spoofchecker::MIXED_SCRIPT_CONFUSABLE, Spoofchecker::WHOLE_SCRIPT_CONFUSABLE, Spoofchecker::ANY_CASE, Spoofchecker::SINGLE_SCRIPT, Spoofchecker::INVISIBLE, or Spoofchecker::CHAR_LIMIT. Defaults to all checks as of ICU 58; prior to that version, Spoofchecker::SINGLE_SCRIPT was excluded.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spoofchecker.setchecks.php
