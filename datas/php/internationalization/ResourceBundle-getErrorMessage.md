# ResourceBundle::getErrorMessage

Source: https://devdocs.io/php/resourcebundle.geterrormessage

# resourcebundle_get_error_message

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

ResourceBundle::getErrorMessage -- resourcebundle_get_error_message — Get bundle's last error message

### Description

Object-oriented style

```
public ResourceBundle::getErrorMessage(): string
```

Procedural style

```
resourcebundle_get_error_message(ResourceBundle $bundle): string
```

Get error message from the last function performed by the bundle object.

### Parameters

ResourceBundle object.

### Return Values

Returns error message from last bundle object's call.

### Examples

Example #1 resourcebundle_get_error_message() example

```
<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(resourcebundle_get_error_code($r))) {
    report_error("Bundle error: ".resourcebundle_get_error_message($r));
}
?>
```

Example #2 OO example

```
<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(ResourceBundle::getErrorCode($r))) {
    report_error("Bundle error: ".ResourceBundle::getErrorMessage($r));
}
?>
```

### See Also

- resourcebundle_get_error_code() - Get bundle's last error code
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/resourcebundle.geterrormessage.php
