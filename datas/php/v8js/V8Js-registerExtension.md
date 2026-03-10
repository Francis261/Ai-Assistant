# V8Js::registerExtension

Source: https://devdocs.io/php/v8js.registerextension

(PECL v8js >= 0.1.0)

V8Js::registerExtension — Register Javascript extensions for V8Js

### Description

```
public static V8Js::registerExtension(
 string $extension_name,
 string $script,
 array $dependencies = array(),
 bool $auto_enable = false
): bool
```

Registers passed Javascript script as extension to be used in V8Js contexts.

### Parameters

Name of the extension to be registered.

The Javascript code to be registered.

Array of extension names the extension to be registered depends on. Any such extension is enabled automatically when this extension is loaded.

Note:

All extensions, including the dependencies, must be registered before any V8Js are created which use them.

If set to true, the extension will be enabled automatically in all V8Js contexts.

### Return Values

Returns true if extension was registered successfully, false otherwise.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/v8js.registerextension.php
