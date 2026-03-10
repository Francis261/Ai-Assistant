# The AllowDynamicProperties attribute

Source: https://devdocs.io/php/class.allowdynamicproperties

## Introduction

(PHP 8 >= 8.2.0)

This attribute is used to mark classes that allow dynamic properties.

## Class synopsis

## Examples

Dynamic properties are deprecated as of PHP 8.2.0, thus using them without marking the class with this attribute will emit a deprecation notice.

```
<?php
class DefaultBehaviour { }

#[\AllowDynamicProperties]
class ClassAllowsDynamicProperties { }

$o1 = new DefaultBehaviour();
$o2 = new ClassAllowsDynamicProperties();

$o1->nonExistingProp = true;
$o2->nonExistingProp = true;
?>
```

Output of the above example in PHP 8.2:

```
Deprecated: Creation of dynamic property DefaultBehaviour::$nonExistingProp is deprecated in file on line 10
```

## See Also

Attributes overview

## Table of Contents

- AllowDynamicProperties::__construct — Construct a new AllowDynamicProperties attribute instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.allowdynamicproperties.php
