# libxml_get_external_entity_loader

Source: https://devdocs.io/php/function.libxml-get-external-entity-loader

(PHP 8 >= 8.2.0)

libxml_get_external_entity_loader — Get the current external entity loader

### Description

```
libxml_get_external_entity_loader(): ?callable
```

Get external entity loader previously installed by libxml_set_external_entity_loader().

### Parameters

This function has no parameters.

### Return Values

The external entity loader previously installed by libxml_set_external_entity_loader(). If that function was never called, or if it was called with null, null will be returned.

### See Also

- libxml_set_external_entity_loader() - Changes the default external entity loader

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.libxml-get-external-entity-loader.php
