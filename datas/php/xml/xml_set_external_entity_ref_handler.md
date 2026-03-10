# xml_set_external_entity_ref_handler

Source: https://devdocs.io/php/function.xml-set-external-entity-ref-handler

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_external_entity_ref_handler — Set up external entity reference handler

### Description

```
xml_set_external_entity_ref_handler(XMLParser $parser, callable|string|null $handler): true
```

Sets the external entity reference handler function for the XML parser parser.

### Parameters

The XML parser.

If null is passed, the handler is reset to its default state.

An empty string will also reset the handler, however this is deprecated as of PHP 8.4.0.

If handler is a callable, the callable is set as the handler.

If handler is a string, it can be the name of a method of an object set with xml_set_object().

This is deprecated as of PHP 8.4.0.

As of PHP 8.4.0, the callable is checked to be valid while setting the handler, not when it is called. This means that xml_set_object() must be called prior to setting a method string as the callback. However, as this behaviour is also deprecated as of PHP 8.4.0, using a proper callable for the method is recommended instead.

The signature of the handler must be:

```
handler(
 XMLParser $parser,
 string $open_entity_names,
 string|false $base,
 string $system_id,
 string|false $public_id
): bool
```

The handler should return true if the entity was handled, false otherwise. When returning false the XML parser will stop parsing and xml_get_error_code() will return XML_ERROR_EXTERNAL_ENTITY_HANDLING.

### Return Values

Always returns true.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-set-external-entity-ref-handler.php
