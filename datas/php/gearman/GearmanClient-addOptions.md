# GearmanClient::addOptions

Source: https://devdocs.io/php/gearmanclient.addoptions

(PECL gearman >= 0.6.0)

GearmanClient::addOptions — Add client options

### Description

```
public GearmanClient::addOptions(int $option): bool
```

Adds one or more options to those already set.

### Parameters

The options to add. One of the following constants, or a combination of them using the bitwise OR operator (|): GEARMAN_CLIENT_GENERATE_UNIQUE, GEARMAN_CLIENT_NON_BLOCKING, GEARMAN_CLIENT_UNBUFFERED_RESULT or GEARMAN_CLIENT_FREE_TASKS.

### Return Values

Always returns true.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addoptions.php
