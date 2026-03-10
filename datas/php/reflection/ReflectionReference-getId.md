# ReflectionReference::getId

Source: https://devdocs.io/php/reflectionreference.getid

(PHP 7 >= 7.4.0, PHP 8)

ReflectionReference::getId — Get unique ID of a reference

### Description

```
public ReflectionReference::getId(): string
```

Returns an ID which is unique for the reference for the lifetime of that reference. This ID can be used to compare references for equality, or to maintain a map of known references.

### Parameters

This function has no parameters.

### Return Values

Returns a string of unspecified format.

### Examples

Example #1 Basic ReflectionReference::getId() usage

```
<?php
$val1 = 'foo';
$val2 = 'bar';
$arr = [&$val1, &$val2, &$val1];

$rr1 = ReflectionReference::fromArrayElement($arr, 0);
$rr2 = ReflectionReference::fromArrayElement($arr, 1);
$rr3 = ReflectionReference::fromArrayElement($arr, 2);

var_dump($rr1->getId() === $rr2->getId());
var_dump($rr1->getId() === $rr3->getId());
?>
```

The above example will output:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionreference.getid.php
