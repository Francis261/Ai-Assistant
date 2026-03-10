# xml_set_processing_instruction_handler

Source: https://devdocs.io/php/function.xml-set-processing-instruction-handler

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_processing_instruction_handler — Set up processing instruction (PI) handler

### Description

```
xml_set_processing_instruction_handler(XMLParser $parser, callable|string|null $handler): true
```

Sets the processing instruction (PI) handler function for the XML parser parser.

A processing instruction has the following format:

```
<?target
data
?>
```

PHP code is delimited by the <?php processing instruction. As such it is possible to have PHP code within an XML document. However, the PI end tag (?>) must not be part of the data. If a PI end tag exists as part of the embedded PHP code, the rest of the PHP code and the "real" PI end tag, will be treated as character data.

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
handler(XMLParser $parser, string $target, string $data): void
```

### Return Values

Always returns true.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-set-processing-instruction-handler.php
