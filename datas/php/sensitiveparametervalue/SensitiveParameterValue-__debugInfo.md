# SensitiveParameterValue::__debugInfo

Source: https://devdocs.io/php/sensitiveparametervalue.debuginfo

(PHP 8 >= 8.2.0)

SensitiveParameterValue::__debugInfo — Protects the sensitive value against accidental exposure

### Description

```
public SensitiveParameterValue::__debugInfo(): array
```

Returns an empty array to protect the sensitive value against accidental exposure when using var_dump().

### Parameters

This function has no parameters.

### Return Values

An empty array.

### Examples

Example #1 Passing a SensitiveParameterValue object to var_dump()

```
<?php
$s = new \SensitiveParameterValue('secret');

var_dump($s);
?>
```

The above example will output:

```
object(SensitiveParameterValue)#1 (0) {
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sensitiveparametervalue.debuginfo.php
