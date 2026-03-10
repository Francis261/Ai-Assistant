# V8Js::__construct

Source: https://devdocs.io/php/v8js.construct

(PECL v8js >= 0.1.0)

V8Js::__construct — Construct a new V8Js object

### Description

Constructs a new V8Js object.

### Parameters

The name of the object passed to Javascript.

Map of PHP variables that will be available in Javascript. Must be an associative array in format array("name-for-js" => "name-of-php-variable"). Defaults to empty array.

List of extensions registered using V8Js::registerExtension() which should be available in the Javascript context of the created V8Js object.

Note:

Extensions registered to be enabled automatically do not need to be listed in this array. Also if an extension has dependencies, those dependencies can be omitted as well. Defaults to empty array.

Controls whether uncaught Javascript exceptions are reported immediately or not. Defaults to true. If set to false the uncaught exception can be accessed using V8Js::getPendingException().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/v8js.construct.php
