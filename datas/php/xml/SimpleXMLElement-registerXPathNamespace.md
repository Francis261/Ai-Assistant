# SimpleXMLElement::registerXPathNamespace

Source: https://devdocs.io/php/simplexmlelement.registerxpathnamespace

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SimpleXMLElement::registerXPathNamespace — Creates a prefix/ns context for the next XPath query

### Description

```
public SimpleXMLElement::registerXPathNamespace(string $prefix, string $namespace): bool
```

Creates a prefix/ns context for the next XPath query. In particular, this is helpful if the provider of the given XML document alters the namespace prefixes. registerXPathNamespace will create a prefix for the associated namespace, allowing one to access nodes in that namespace without the need to change code to allow for the new prefixes dictated by the provider.

### Parameters

The namespace prefix to use in the XPath query for the namespace given in namespace.

The namespace to use for the XPath query. This must match a namespace in use by the XML document or the XPath query using prefix will not return any results.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Setting a namespace prefix to use in an XPath query

```
<?php

$xml = <<<EOD
<book xmlns:chap="http://example.org/chapter-title">
    <title>My Book</title>
    <chapter id="1">
        <chap:title>Chapter 1</chap:title>
        <para>Donec velit. Nullam eget tellus vitae tortor gravida scelerisque. 
            In orci lorem, cursus imperdiet, ultricies non, hendrerit et, orci. 
            Nulla facilisi. Nullam velit nisl, laoreet id, condimentum ut, 
            ultricies id, mauris.</para>
    </chapter>
    <chapter id="2">
        <chap:title>Chapter 2</chap:title>
        <para>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin 
            gravida. Phasellus tincidunt massa vel urna. Proin adipiscing quam 
            vitae odio. Sed dictum. Ut tincidunt lorem ac lorem. Duis eros 
            tellus, pharetra id, faucibus eu, dapibus dictum, odio.</para>
    </chapter>
</book>
EOD;

$sxe = new SimpleXMLElement($xml);

$sxe->registerXPathNamespace('c', 'http://example.org/chapter-title');
$result = $sxe->xpath('//c:title');

foreach ($result as $title) {
  echo $title . "\n";
}

?>
```

The above example will output:

```
Chapter 1
Chapter 2
```

Notice how the XML document shown in the example sets a namespace with a prefix of chap. Imagine that this document (or another one like it) may have used a prefix of c in the past for the same namespace. Since it has changed, the XPath query will no longer return the proper results and the query will require modification. Using registerXPathNamespace avoids future modification of the query even if the provider changes the namespace prefix.

### See Also

- SimpleXMLElement::xpath() - Runs XPath query on XML data
- SimpleXMLElement::getDocNamespaces() - Returns namespaces declared in document
- SimpleXMLElement::getNamespaces() - Returns namespaces used in document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.registerxpathnamespace.php
