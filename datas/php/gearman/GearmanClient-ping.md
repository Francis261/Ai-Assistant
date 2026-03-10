# GearmanClient::ping

Source: https://devdocs.io/php/gearmanclient.ping

(No version information available, might only be in Git)

GearmanClient::ping — Send data to all job servers to see if they echo it back

### Description

```
public GearmanClient::ping(string $workload): bool
```

Sends some arbitrary data to all job servers to see if they echo it back. The data sent is not used or processed in any other way. Primarily used for testing and debugging.

### Parameters

Some arbitrary serialized data to be echo back

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.ping.php
