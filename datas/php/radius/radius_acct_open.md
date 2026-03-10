# radius_acct_open

Source: https://devdocs.io/php/function.radius-acct-open

(PECL radius >= 1.1.0)

radius_acct_open — Creates a Radius handle for accounting

### Description

```
radius_acct_open(): resource
```

### Parameters

This function has no parameters.

### Return Values

Returns a handle on success, false on error. This function only fails if insufficient memory is available.

### Examples

Example #1 radius_acct_open() example

```
<?php
$res = radius_acct_open ()
    or die ("Could not create handle");
print "Handle successfully created";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-acct-open.php
