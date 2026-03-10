# libxml_set_streams_context

Source: https://devdocs.io/php/function.libxml-set-streams-context

(PHP 5, PHP 7, PHP 8)

libxml_set_streams_context — Set the streams context for the next libxml document load or write

### Description

```
libxml_set_streams_context(resource $context): void
```

Sets the streams context for the next libxml document load or write.

### Parameters

The stream context resource (created with stream_context_create())

### Return Values

No value is returned.

### Errors/Exceptions

Throws a TypeError when a non-stream resource is passed to context.

### Changelog

### Examples

Example #1 A libxml_set_streams_context() example

```
<?php
$opts = [
    'http' => [
        'user_agent' => 'PHP libxml agent',
    ]
];

$context = stream_context_create($opts);
libxml_set_streams_context($context);

// request a file through HTTP
$dom = new DOMDocument;
$doc = $dom->load('http://www.example.com/file.xml');
?>
```

### See Also

- stream_context_create() - Creates a stream context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.libxml-set-streams-context.php
