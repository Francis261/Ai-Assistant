# The Deprecated attribute

Source: https://devdocs.io/php/class.deprecated

## Introduction

(PHP 8 >= 8.4.0)

This attribute is used to mark functionality as deprecated. Using deprecated functionality will cause an E_USER_DEPRECATED error to be emitted.

## Class synopsis

## Properties

An optional message explaining the reason for the deprecation and possible replacement functionality. Will be included in the emitted deprecation message.

An optional string indicating since when the functionality is deprecated. The contents are not validated by PHP and may contain a version number, a date or any other value that is considered appropriate. Will be included in the emitted deprecation message.

Functionality that is part of PHP will use Major.Minor as the since value, for example '8.4'.

## Examples

```
<?php

#[\Deprecated(message: "use safe_replacement() instead", since: "1.5")]
function unsafe_function()
{
   echo "This is unsafe", PHP_EOL;
}

unsafe_function();

?>
```

Output of the above example in PHP 8.4 is similar to:

```
Deprecated: Function unsafe_function() is deprecated since 1.5, use safe_replacement() instead in example.php on line 9
This is unsafe
```

## See Also

- Attributes overview
- ReflectionFunctionAbstract::isDeprecated()
- ReflectionClassConstant::isDeprecated()
- E_USER_DEPRECATED

## Table of Contents

- Deprecated::__construct — Construct a new Deprecated attribute instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.deprecated.php
