# EventDnsBase::countNameservers

Source: https://devdocs.io/php/eventdnsbase.countnameservers

(PECL event >= 1.2.6-beta)

EventDnsBase::countNameservers — Gets the number of configured nameservers

### Description

```
public EventDnsBase::countNameservers(): int
```

Gets the number of configured nameservers

### Parameters

This function has no parameters.

### Return Values

Returns the number of configured nameservers(not necessarily the number of running nameservers). This is useful for double-checking whether our calls to the various nameserver configuration functions have been successful.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventdnsbase.countnameservers.php
