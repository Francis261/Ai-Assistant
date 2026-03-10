# SimpleXMLElement::count

Source: https://devdocs.io/php/simplexmlelement.count

(PHP 8)

SimpleXMLElement::count — Counts the children of an element

### Description

```
public SimpleXMLElement::count(): int
```

This method counts the number of children of an element.

### Parameters

This function has no parameters.

### Return Values

Returns the number of elements of an element.

### Examples

Example #1 Counting the number of children

```
<?php
$xml = <<<EOF
<people>
 <person name="Person 1">
  <child/>
  <child/>
  <child/>
 </person>
 <person name="Person 2">
  <child/>
  <child/>
  <child/>
  <child/>
  <child/>
 </person>
</people>
EOF;

$elem = new SimpleXMLElement($xml);

foreach ($elem as $person) {
    printf("%s has got %d children.\n", $person['name'], $person->count());
}
?>
```

The above example will output:

```
Person 1 has got 3 children.
Person 2 has got 5 children.
```

### See Also

- SimpleXMLElement::children() - Finds children of given node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.count.php
