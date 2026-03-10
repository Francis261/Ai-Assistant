# xml_parse

Source: https://devdocs.io/php/function.xml-parse

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parse — Start parsing an XML document

### Description

```
xml_parse(XMLParser $parser, string $data, bool $is_final = false): int
```

xml_parse() parses an XML document. The handlers for the configured events are called as many times as necessary.

### Parameters

A reference to the XML parser to use.

Chunk of data to parse. A document may be parsed piece-wise by calling xml_parse() several times with new data, as long as the is_final parameter is set and true when the last data is parsed.

If set and true, data is the last piece of data sent in this parse.

### Return Values

Returns 1 on success or 0 on failure.

For unsuccessful parses, error information can be retrieved with xml_get_error_code(), xml_error_string(), xml_get_current_line_number(), xml_get_current_column_number() and xml_get_current_byte_index().

Note:

Some errors (such as entity errors) are reported at the end of the data, thus only if is_final is set and true.

### Changelog

### Examples

Example #1 Chunked parsing of large XML documents

This example shows how large XML documents can be read and parsed in chunks, so that it not necessary to keep the whole document in memory. Error handling is omitted for brevity.

```
<?php
$stream = fopen('examples/book-simple.xml', 'r');
$parser = xml_parser_create();

xml_set_element_handler(
    $parser,
    function($parser, $name, $attributes) { echo $name, PHP_EOL; },
    function($parser, $name) { echo $name, PHP_EOL; }
);

while (($data = fread($stream, 16384))) {
    xml_parse($parser, $data); // parse the current chunk
}
xml_parse($parser, '', true); // finalize parsing
fclose($stream);
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-parse.php
