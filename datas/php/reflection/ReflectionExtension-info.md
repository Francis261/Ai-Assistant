# ReflectionExtension::info

Source: https://devdocs.io/php/reflectionextension.info

(PHP 5 >= 5.2.4, PHP 7, PHP 8)

ReflectionExtension::info — Print extension info

### Description

```
public ReflectionExtension::info(): void
```

Prints out the "phpinfo()" snippet for the given extension.

### Parameters

This function has no parameters.

### Return Values

Information about the extension.

### Examples

Example #1 ReflectionExtension::info() example

```
<?php
$ext = new ReflectionExtension('mysqli');
$ext->info();
?>
```

The above example will output something similar to:

```
mysqli

MysqlI Support => enabled
Client API library version => mysqlnd 8.3.17
Active Persistent Links => 0
Inactive Persistent Links => 0
Active Links => 0
Persistent cache => enabled
put_hits => 0
put_misses => 0
get_hits => 0
get_misses => 0
size => 2000
free_items => 2000
references => 2

Directive => Local Value => Master Value
mysqli.max_links => Unlimited => Unlimited
mysqli.max_persistent => Unlimited => Unlimited
mysqli.allow_persistent => On => On
mysqli.default_host => no value => no value
mysqli.default_user => no value => no value
mysqli.default_pw => no value => no value
mysqli.default_port => 3306 => 3306
mysqli.default_socket => no value => no value
mysqli.reconnect => Off => Off
mysqli.allow_local_infile => On => On
mysqli.cache_size => 2000 => 2000
```

### See Also

- ReflectionExtension::getName() - Gets extension name
- phpinfo() - Outputs information about PHP's configuration

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.info.php
