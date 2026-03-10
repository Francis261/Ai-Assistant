# GearmanClient::echo

Source: https://devdocs.io/php/gearmanclient.echo

(PECL gearman >= 0.5.0)

GearmanClient::echo — Send data to all job servers to see if they echo it back [deprecated]

### Description

```
public GearmanClient::echo(string $workload): bool
```

The GearmanClient::echo() method is deprecated as of pecl/gearman 1.0.0. Use GearmanClient::ping().

### Parameters

Some arbitrary serialized data to be echo back

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.echo.php
