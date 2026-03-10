# IntlTimeZone::getIDForWindowsID

Source: https://devdocs.io/php/intltimezone.getidforwindowsid

# intltz_get_id_for_windows_id

(PHP 7 >= 7.1.0, PHP 8)

IntlTimeZone::getIDForWindowsID -- intltz_get_id_for_windows_id — Translate a Windows timezone into a system timezone

### Description

Object-oriented style (method):

```
public static IntlTimeZone::getIDForWindowsID(string $timezoneId, ?string $region = null): string|false
```

Procedural style:

```
intltz_get_id_for_windows_id(string $timezoneId, ?string $region = null): string|false
```

Translates a Windows timezone (e.g. "Pacific Standard Time") into a system timezone (e.g. "America/Los_Angeles").

Note: This function requires ICU version ≥ 52.

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

Returns the system timezone or false on failure.

### Changelog

### See Also

- IntlTimeZone::getWindowsID() - Translate a system timezone into a Windows timezone

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intltimezone.getidforwindowsid.php
