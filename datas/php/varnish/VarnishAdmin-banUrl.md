# VarnishAdmin::banUrl

Source: https://devdocs.io/php/varnishadmin.banurl

(PECL varnish >= 0.3)

VarnishAdmin::banUrl — Ban an URL using a VCL expression

### Description

```
public VarnishAdmin::banUrl(string $vcl_regex): int
```

### Parameters

URL regular expression in PCRE compatible syntax. It's based on the ban.url varnish command.

### Return Values

Returns the varnish command status.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/varnishadmin.banurl.php
