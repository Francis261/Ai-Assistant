# wddx_serialize_vars

Source: https://devdocs.io/php/function.wddx-serialize-vars

(PHP 4, PHP 5, PHP 7)

wddx_serialize_vars — Serialize variables into a WDDX packet

This function was REMOVED in PHP 7.4.0.

### Description

```
wddx_serialize_vars(mixed $var_name, mixed ...$var_names): string
```

Creates a WDDX packet with a structure that contains the serialized representation of the passed variables.

### Parameters

This function takes a variable number of parameters.

Can be either a string naming a variable or an array containing strings naming the variables or another array, etc.

### Return Values

Returns the WDDX packet, or false on error.

### Examples

Example #1 wddx_serialize_vars() example

```
<?php
$a = 1;
$b = 5.5;
$c = array("blue", "orange", "violet");
$d = "colors";

$clvars = array("c", "d");
echo wddx_serialize_vars("a", "b", $clvars);
?>
```

The above example will output:

```
<wddxPacket version='1.0'><header/><data><struct><var name='a'><number>1</number></var>
<var name='b'><number>5.5</number></var><var name='c'><array length='3'>
<string>blue</string><string>orange</string><string>violet</string></array></var>
<var name='d'><string>colors</string></var></struct></data></wddxPacket>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.wddx-serialize-vars.php
