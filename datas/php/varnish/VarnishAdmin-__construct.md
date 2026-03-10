# VarnishAdmin::__construct

Source: https://devdocs.io/php/varnishadmin.construct

(PECL varnish >= 0.3)

VarnishAdmin::__construct — VarnishAdmin constructor

### Description

```
public VarnishAdmin::__construct(array $args = ?)
```

### Parameters

Configuration arguments. The possible keys are:

```
VARNISH_CONFIG_IDENT - local varnish instance ident
VARNISH_CONFIG_HOST - varnish instance ip
VARNISH_CONFIG_PORT - varnish instance port
VARNISH_CONFIG_SECRET - varnish instance secret
VARNISH_CONFIG_TIMEOUT - connection read timeout
VARNISH_CONFIG_COMPAT - varnish major version compatibility
```

### Return Values

### Examples

Example #1 VarnishAdmin::__construct() example

```
<?php
    $args = array(
        VARNISH_CONFIG_HOST => "::1",
        VARNISH_CONFIG_PORT => 6082,
        VARNISH_CONFIG_SECRET => "5174826b-8595-4958-aa7a-0609632ad7ca",
        VARNISH_CONFIG_TIMEOUT => 300,
    );
    $va = new VarnishAdmin($args);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/varnishadmin.construct.php
