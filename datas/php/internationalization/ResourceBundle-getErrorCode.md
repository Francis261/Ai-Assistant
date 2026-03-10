# ResourceBundle::getErrorCode

Source: https://devdocs.io/php/resourcebundle.geterrorcode

# resourcebundle_get_error_code

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

ResourceBundle::getErrorCode -- resourcebundle_get_error_code — Get bundle's last error code

### Description

Object-oriented style

```
public ResourceBundle::getErrorCode(): int
```

Procedural style

```
resourcebundle_get_error_code(ResourceBundle $bundle): int
```

Get error code from the last function performed by the bundle object.

### Parameters

ResourceBundle object.

### Return Values

Returns error code from last bundle object call.

### Examples

Example #1 resourcebundle_get_error_code() example

```
<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(resourcebundle_get_error_code($r))) {
    report_error("Bundle error");
}
?>
```

Example #2 OO example

```
<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(ResourceBundle::getErrorCode($r))) {
    report_error("Bundle error");
}
?>
```

### See Also

- resourcebundle_get_error_message() - Get bundle's last error message
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/resourcebundle.geterrorcode.php
