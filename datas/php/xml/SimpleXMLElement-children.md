# SimpleXMLElement::children

Source: https://devdocs.io/php/simplexmlelement.children

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::children — Finds children of given node

### Description

```
public SimpleXMLElement::children(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement
```

This method finds the children of an element. The result follows normal iteration rules.

Note: SimpleXML has made a rule of adding iterative properties to most methods. They cannot be viewed using var_dump() or anything else which can examine objects.

### Parameters

An XML namespace.

If isPrefix is true, namespaceOrPrefix will be regarded as a prefix. If false, namespaceOrPrefix will be regarded as a namespace URL.

### Return Values

Returns a SimpleXMLElement element, whether the node has children or not, unless the node represents an attribute, in which case null is returned.

### Examples

Example #1 Traversing a children() pseudo-array

```
<?php
$xml = new SimpleXMLElement(
'<person>
 <child role="son">
  <child role="daughter"/>
 </child>
 <child role="daughter">
  <child role="son">
   <child role="son"/>
  </child>
 </child>
</person>');

foreach ($xml->children() as $second_gen) {
    echo ' The person begot a ' . $second_gen['role'];

    foreach ($second_gen->children() as $third_gen) {
        echo ' who begot a ' . $third_gen['role'] . ';';

        foreach ($third_gen->children() as $fourth_gen) {
            echo ' and that ' . $third_gen['role'] .
                ' begot a ' . $fourth_gen['role'];
        }
    }
}
?>
```

The above example will output:

```
The person begot a son who begot a daughter; The person
begot a daughter who begot a son; and that son begot a son
```

Example #2 Using namespaces

```
<?php
$xml = '<example xmlns:foo="my.foo.urn">
  <foo:a>Apple</foo:a>
  <foo:b>Banana</foo:b>
  <c>Cherry</c>
</example>';

$sxe = new SimpleXMLElement($xml);

$kids = $sxe->children('foo');
var_dump(count($kids));

$kids = $sxe->children('foo', TRUE);
var_dump(count($kids));

$kids = $sxe->children('my.foo.urn');
var_dump(count($kids));

$kids = $sxe->children('my.foo.urn', TRUE);
var_dump(count($kids));

$kids = $sxe->children();
var_dump(count($kids));
?>
```

```
int(0)
int(2)
int(2)
int(0)
int(1)
```

### See Also

- SimpleXMLElement::count() - Counts the children of an element
- count() - Counts all elements in an array or in a Countable object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.children.php
