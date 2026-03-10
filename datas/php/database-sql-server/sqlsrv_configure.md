# sqlsrv_configure

Source: https://devdocs.io/php/function.sqlsrv-configure

(No version information available, might only be in Git)

sqlsrv_configure — Changes the driver error handling and logging configurations

### Description

```
sqlsrv_configure(string $setting, mixed $value): bool
```

Changes the driver error handling and logging configurations.

### Parameters

The name of the setting to set. The possible values are "WarningsReturnAsErrors", "LogSubsystems", and "LogSeverity".

The value of the specified setting. The following table shows possible values:

### Return Values

Returns true on success or false on failure.

### See Also

- » SQLSRV Error Handling.
- » Logging SQLSRV Activity.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-configure.php
