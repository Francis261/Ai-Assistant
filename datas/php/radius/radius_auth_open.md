# radius_auth_open

Source: https://devdocs.io/php/function.radius-auth-open

(PECL radius >= 1.1.0)

radius_auth_open — Creates a Radius handle for authentication

### Description

```
radius_auth_open(): resource
```

### Parameters

This function has no parameters.

### Return Values

Returns a handle on success, false on error. This function only fails if insufficient memory is available.

### Examples

Example #1 radius_auth_open() example

```
<?php
$radh = radius_auth_open()
    or die ("Could not create handle");
echo "Handle successfully created";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-auth-open.php
