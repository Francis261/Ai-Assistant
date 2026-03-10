# libxml_set_external_entity_loader

Source: https://devdocs.io/php/function.libxml-set-external-entity-loader

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

libxml_set_external_entity_loader — Changes the default external entity loader

### Description

```
libxml_set_external_entity_loader(?callable $resolver_function): bool
```

Changes the default external entity loader. This can be used to suppress the expansion of arbitrary external entities to avoid XXE attacks, even when LIBXML_NOENT has been set for the respective operation, and is usually preferable over calling libxml_disable_entity_loader().

### Parameters

A callable with the following signature:

```
resolver(?string $public_id, string $system_id, array $context): resource|string|null
```

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 libxml_set_external_entity_loader() example

```
<?php
$xml = <<<XML
<!DOCTYPE foo PUBLIC "-//FOO/BAR" "http://example.com/foobar">
<foo>bar</foo>
XML;

$dtd = <<<DTD
<!ELEMENT foo (#PCDATA)>
DTD;

libxml_set_external_entity_loader(
    function ($public, $system, $context) use($dtd) {
        var_dump($public);
        var_dump($system);
        var_dump($context);
        $f = fopen("php://temp", "r+");
        fwrite($f, $dtd);
        rewind($f);
        return $f;
    }
);

$dd = new DOMDocument;
$r  = $dd->loadXML($xml);

var_dump($dd->validate());
?>
```

The above example will output:

```
string(10) "-//FOO/BAR"
string(25) "http://example.com/foobar"
array(4) {
    ["directory"]    => NULL
    ["intSubName"]   => NULL
    ["extSubURI"]    => NULL
    ["extSubSystem"] => NULL
}
bool(true)
```

### See Also

- libxml_disable_entity_loader() - Disable the ability to load external entities
- libxml_get_external_entity_loader() - Get the current external entity loader

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.libxml-set-external-entity-loader.php
