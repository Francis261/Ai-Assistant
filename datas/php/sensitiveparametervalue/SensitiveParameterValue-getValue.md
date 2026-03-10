# SensitiveParameterValue::getValue

Source: https://devdocs.io/php/sensitiveparametervalue.getvalue

(PHP 8 >= 8.2.0)

SensitiveParameterValue::getValue — Returns the sensitive value

### Description

```
public SensitiveParameterValue::getValue(): mixed
```

Get the sensitive value.

### Parameters

This function has no parameters.

### Return Values

The sensitive value.

### Examples

Example #1 SensitiveParameterValue::getValue() example

```
<?php
$s = new \SensitiveParameterValue('secret');

echo "The protected value is: ", $s->getValue(), "\n";
?>
```

The above example will output:

```
The protected value is: secret
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sensitiveparametervalue.getvalue.php
