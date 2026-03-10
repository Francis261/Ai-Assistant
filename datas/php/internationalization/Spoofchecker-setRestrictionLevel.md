# Spoofchecker::setRestrictionLevel

Source: https://devdocs.io/php/spoofchecker.setrestrictionlevel

(PHP 7 >= 7.3.0, PHP 8)

Spoofchecker::setRestrictionLevel — Set the restriction level

### Description

```
public Spoofchecker::setRestrictionLevel(int $level): void
```

Sets the restriction level of SpoofChecker::isSuspicious().

### Parameters

The restriction level of SpoofChecker::isSuspicious(). One of Spoofchecker::ASCII, Spoofchecker::SINGLE_SCRIPT_RESTRICTIVE, Spoofchecker::HIGHLY_RESTRICTIVE, Spoofchecker::MODERATELY_RESTRICTIVE, Spoofchecker::MINIMALLY_RESTRICTIVE, or Spoofchecker::UNRESTRICTIVE. Defaults to Spoofchecker::HIGHLY_RESTRICTIVE.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spoofchecker.setrestrictionlevel.php
