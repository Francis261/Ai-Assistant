# SimpleXMLElement::addChild

Source: https://devdocs.io/php/simplexmlelement.addchild

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

SimpleXMLElement::addChild — Adds a child element to the XML node

### Description

```
public SimpleXMLElement::addChild(string $qualifiedName, ?string $value = null, ?string $namespace = null): ?SimpleXMLElement
```

Adds a child element to the node and returns a SimpleXMLElement of the child.

### Parameters

The name of the child element to add.

If specified, the value of the child element.

If specified, the namespace to which the child element belongs.

### Return Values

The addChild method returns a SimpleXMLElement object representing the child added to the XML node on success; null on failure.

### Examples

Note:

Listed examples may include examples/simplexml-data.php, which refers to the XML string found in the first example of the basic usage guide.

Example #1 Add attributes and children to a SimpleXML element

```
<?php

include 'examples/simplexml-data.php';

$sxe = new SimpleXMLElement($xmlstr);
$sxe->addAttribute('type', 'documentary');

$movie = $sxe->addChild('movie');
$movie->addChild('title', 'PHP2: More Parser Stories');
$movie->addChild('plot', 'This is all about the people who make it work.');

$characters = $movie->addChild('characters');
$character  = $characters->addChild('character');
$character->addChild('name', 'Mr. Parser');
$character->addChild('actor', 'John Doe');

$rating = $movie->addChild('rating', '5');
$rating->addAttribute('type', 'stars');
 
echo $sxe->asXML();

?>
```

The above example will output something similar to:

```
<?xml version="1.0" standalone="yes"?>
<movies type="documentary">
 <movie>
  <title>PHP: Behind the Parser</title>
  <characters>
   <character>
    <name>Ms. Coder</name>
    <actor>Onlivia Actora</actor>
   </character>
   <character>
    <name>Mr. Coder</name>
    <actor>El Act&#xD3;r</actor>
   </character>
  </characters>
  <plot>
   So, this language. It's like, a programming language. Or is it a
   scripting language? All is revealed in this thrilling horror spoof
   of a documentary.
  </plot>
  <great-lines>
   <line>PHP solves all my web problems</line>
  </great-lines>
  <rating type="thumbs">7</rating>
  <rating type="stars">5</rating>
 </movie>
 <movie>
  <title>PHP2: More Parser Stories</title>
  <plot>This is all about the people who make it work.</plot>
  <characters>
   <character>
    <name>Mr. Parser</name>
    <actor>John Doe</actor>
   </character>
  </characters>
  <rating type="stars">5</rating>
 </movie>
</movies>
```

### See Also

- SimpleXMLElement::addAttribute() - Adds an attribute to the SimpleXML element
- Basic SimpleXML usage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.addchild.php
