# libxml_disable_entity_loader

Source: https://devdocs.io/php/function.libxml-disable-entity-loader

(PHP 5 >= 5.2.11, PHP 7, PHP 8)

libxml_disable_entity_loader — Disable the ability to load external entities

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 libxml_disable_entity_loader(bool $disable = true): bool
```

Disable/enable the ability to load external entities. Note that disabling the loading of external entities may cause general issues with loading XML documents.

As of libxml 2.9.0 entity substitution is disabled by default, so there is no need to disable the loading of external entities, unless there is the need to resolve internal entity references with LIBXML_NOENT, LIBXML_DTDVALID, or LIBXML_DTDLOAD. Generally, it is preferable to use libxml_set_external_entity_loader() to suppress loading of external entities. The LIBXML_NO_XXE constant can be used to prevent this as well (only available in Libxml >= 2.13.0, as of PHP 8.4.0).

### Parameters

Disable (true) or enable (false) libxml extensions (such as DOM, XMLWriter and XMLReader) to load external entities.

### Return Values

Returns the previous value.

### Changelog

### See Also

- libxml_use_internal_errors() - Disable libxml errors and allow user to fetch error information as needed
- libxml_set_external_entity_loader() - Changes the default external entity loader
- The LIBXML_NOENT constant
- The LIBXML_DTDVALID constant
- The LIBXML_NO_XXE constant

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.libxml-disable-entity-loader.php
