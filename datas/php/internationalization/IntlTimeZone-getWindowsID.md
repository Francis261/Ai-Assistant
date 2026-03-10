# IntlTimeZone::getWindowsID

Source: https://devdocs.io/php/intltimezone.getwindowsid

# intltz_get_windows_id

(PHP 7 >= 7.1.0, PHP 8)

IntlTimeZone::getWindowsID -- intltz_get_windows_id — Translate a system timezone into a Windows timezone

### Description

Object-oriented style (method):

```
public static IntlTimeZone::getWindowsID(string $timezoneId): string|false
```

Procedural style:

```
intltz_get_windows_id(string $timezoneId): string|false
```

Translates a system timezone (e.g. "America/Los_Angeles") into a Windows timezone (e.g. "Pacific Standard Time").

Note: This function requires ICU version ≥ 52.

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

Returns the Windows timezone or false on failure.

### See Also

- IntlTimeZone::getIDForWindowsID() - Translate a Windows timezone into a system timezone

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intltimezone.getwindowsid.php
