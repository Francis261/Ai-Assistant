# mysqli_warning::next

Source: https://devdocs.io/php/mysqli-warning.next

(PHP 5, PHP 7, PHP 8)

mysqli_warning::next — Fetch next warning

### Description

```
public mysqli_warning::next(): bool
```

Change warning information to the next warning if possible.

Once the warning has been set to the next warning, new values of properties message, sqlstate and errno of mysqli_warning are available.

### Parameters

This function has no parameters.

### Return Values

Returns true if next warning was fetched successfully. If there are no more warnings, it will return false

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-warning.next.php
