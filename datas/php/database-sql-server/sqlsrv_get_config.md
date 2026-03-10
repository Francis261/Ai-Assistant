# sqlsrv_get_config

Source: https://devdocs.io/php/function.sqlsrv-get-config

(No version information available, might only be in Git)

sqlsrv_get_config — Returns the value of the specified configuration setting

### Description

```
sqlsrv_get_config(string $setting): mixed
```

Returns the value of the specified configuration setting.

### Parameters

The name of the setting for which the value is returned. For a list of configurable settings, see sqlsrv_configure().

### Return Values

Returns the value of the specified setting. If an invalid setting is specified, false is returned.

### See Also

- sqlsrv_configure() - Changes the driver error handling and logging configurations

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-get-config.php
