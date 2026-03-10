# yaml_emit_file

Source: https://devdocs.io/php/function.yaml-emit-file

(PECL yaml >= 0.5.0)

yaml_emit_file — Send the YAML representation of a value to a file

### Description

```
yaml_emit_file(
 string $filename,
 mixed $data,
 int $encoding = YAML_ANY_ENCODING,
 int $linebreak = YAML_ANY_BREAK,
 array $callbacks = null
): bool
```

Generate a YAML representation of the provided data in the filename.

### Parameters

Path to the file.

The data being encoded. Can be any type except a resource.

Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.

Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.

Content handlers for emitting YAML nodes. Associative array of classname => callable mappings. See emit callbacks for more details.

### Return Values

Returns true on success.

### Changelog

### See Also

- yaml_emit() - Returns the YAML representation of a value
- yaml_parse() - Parse a YAML stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.yaml-emit-file.php
