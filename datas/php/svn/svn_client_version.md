# svn_client_version

Source: https://devdocs.io/php/function.svn-client-version

(PECL svn >= 0.1.0)

svn_client_version — Returns the version of the SVN client libraries

### Description

```
svn_client_version(): string
```

Returns the version of the SVN client libraries

### Parameters

This function has no parameters.

### Return Values

String version number, usually in form of x.y.z.

### Examples

Example #1 Basic example

```
<?php
echo svn_client_version();
?>
```

The above example will output something similar to:

```
1.3.1
```

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-client-version.php
