# xml_set_notation_decl_handler

Source: https://devdocs.io/php/function.xml-set-notation-decl-handler

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_notation_decl_handler — Set up notation declaration handler

### Description

```
xml_set_notation_decl_handler(XMLParser $parser, callable|string|null $handler): true
```

Sets the notation declaration handler function for the XML parser parser.

A notation declaration is part of the document's DTD and has the following format:

```
<!NOTATION <parameter>name</parameter>
{ <parameter>systemId</parameter> | <parameter>publicId</parameter>?>
```

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
 string $notation_name,
 string|false $base,
 string $system_id,
 string|false $public_id
): void
```

### Return Values

Always returns true.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-set-notation-decl-handler.php
