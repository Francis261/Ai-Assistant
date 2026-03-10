# Dom\Attr::rename

Source: https://devdocs.io/php/dom-attr.rename

(PHP 8 >= 8.4.0)

Dom\Attr::rename — Changes the qualified name or namespace of an attribute

### Description

```
public Dom\Attr::rename(?string $namespaceURI, string $qualifiedName): void
```

This method changes the qualified name or namespace of an attribute.

### Parameters

### Return Values

No value is returned.

### Errors/Exceptions

### Examples

Example #1 Dom\Attr::rename() example to change both the namespace and qualified name

This changes the qualified name of my-attr to my-new-attr and also changes its namespace to urn:my-ns.

```
<?php

$doc = Dom\XMLDocument::createFromString('<root my-attr="value"/>');

$root = $doc->documentElement;
$attribute = $root->attributes['my-attr'];
$attribute->rename('urn:my-ns', 'my-new-attr');

echo $doc->saveXml();

?>
```

The above example will output:

```
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:ns1="urn:my-ns" ns1:my-new-attr="value"/>
```

Example #2 Dom\Attr::rename() example to change only the qualified name

This only changes the qualified name of my-attr and keeps the namespace URI the same.

```
<?php

$doc = Dom\XMLDocument::createFromString('<root my-attr="value"/>');

$root = $doc->documentElement;
$attribute = $root->attributes['my-attr'];
$attribute->rename($attribute->namespaceURI, 'my-new-attr');

echo $doc->saveXml();

?>
```

The above example will output:

```
<?xml version="1.0" encoding="UTF-8"?>
<root my-new-attr="value"/>
```

### Notes

Note: It is sometimes necessary to change the qualified name and namespace URI together in one step to not break any namespace rules.

### See Also

- Dom\Element::rename()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-attr.rename.php
