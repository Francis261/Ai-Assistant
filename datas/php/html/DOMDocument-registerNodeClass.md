# DOMDocument::registerNodeClass

Source: https://devdocs.io/php/domdocument.registernodeclass

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DOMDocument::registerNodeClass — Register extended class used to create base node type

### Description

```
public DOMDocument::registerNodeClass(string $baseClass, ?string $extendedClass): true
```

This method allows you to register your own extended DOM class to be used afterward by the PHP DOM extension.

This method is not part of the DOM standard.

The constructor of the objects of the registered node classes is not called.

### Parameters

The DOM class that you want to extend. You can find a list of these classes in the chapter introduction.

Your extended class name. If null is provided, any previously registered class extending baseClass will be removed.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 Adding a new method to DOMElement to ease our code

```
<?php

class myElement extends DOMElement {
   function appendElement($name) { 
      return $this->appendChild(new myElement($name));
   }
}

class myDocument extends DOMDocument {
   function setRoot($name) { 
      return $this->appendChild(new myElement($name));
   }
}

$doc = new myDocument();
$doc->registerNodeClass('DOMElement', 'myElement');

// From now on, adding an element to another costs only one method call ! 
$root = $doc->setRoot('root');
$child = $root->appendElement('child');
$child->setAttribute('foo', 'bar');

echo $doc->saveXML();

?>
```

The above example will output:

```
<?xml version="1.0"?>
<root><child foo="bar"/></root>
```

Example #2 Retrieving elements as custom class

```
<?php
class myElement extends DOMElement {
    public function __toString() {
        return $this->nodeValue;
    }
}

$doc = new DOMDocument;
$doc->loadXML("<root><element><child>text in child</child></element></root>");
$doc->registerNodeClass("DOMElement", "myElement");

$element = $doc->getElementsByTagName("child")->item(0);
var_dump(get_class($element));

// And take advantage of the __toString method..
echo $element;
?>
```

The above example will output:

```
string(9) "myElement"
text in child
```

Example #3 Retrieving owner document

When instantiating a custom DOMDocument the ownerDocument property will refer to the instantiated class. However, if all references to that class are removed, it will be destroyed and new DOMDocument will be created instead. For that reason you might use DOMDocument::registerNodeClass() with DOMDocument

```
<?php
class MyDOMDocument extends DOMDocument {
}

class MyOtherDOMDocument extends DOMDocument {
}

// Create MyDOMDocument with some XML
$doc = new MyDOMDocument;
$doc->loadXML("<root><element><child>text in child</child></element></root>");

$child = $doc->getElementsByTagName("child")->item(0);

// The current owner of the node is MyDOMDocument
var_dump(get_class($child->ownerDocument));
// MyDOMDocument is destroyed
unset($doc);
// And new DOMDocument instance is created
var_dump(get_class($child->ownerDocument));

// Import a node from MyDOMDocument
$newdoc = new MyOtherDOMDocument;
$child = $newdoc->importNode($child);

// Register custom DOMDocument
$newdoc->registerNodeClass("DOMDocument", "MyOtherDOMDocument");

var_dump(get_class($child->ownerDocument));
unset($doc);
// New MyOtherDOMDocument is created
var_dump(get_class($child->ownerDocument));
?>
```

The above example will output:

```
string(13) "MyDOMDocument"
string(11) "DOMDocument"
string(18) "MyOtherDOMDocument"
string(18) "MyOtherDOMDocument"
```

Example #4 Custom objects are transient

Objects of the registered node classes are transient, i.e. they are destroyed when they are no longer referenced from PHP code, and recreated when being retrieved again. That implies that custom property values will be lost after recreation.

```
<?php
class MyDOMElement extends DOMElement
{
    public $myProp = 'default value';
}

$doc = new DOMDocument();
$doc->registerNodeClass('DOMElement', 'MyDOMElement');

$node = $doc->createElement('a');
$node->myProp = 'modified value';
$doc->appendChild($node);

echo $doc->childNodes[0]->myProp, PHP_EOL;
unset($node);
echo $doc->childNodes[0]->myProp, PHP_EOL;
?>
```

The above example will output:

```
modified value
default value
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.registernodeclass.php
