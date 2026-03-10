# xml_set_object

Source: https://devdocs.io/php/function.xml-set-object

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_object — Use XML Parser within an object

This function has been DEPRECATED as of PHP 8.4.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 xml_set_object(XMLParser $parser, object $object): true
```

This function allows to use parser inside object. All callback functions could be set with xml_set_element_handler() etc and assumed to be methods of object.

### Parameters

A reference to the XML parser to use inside the object.

The object where to use the XML parser.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 xml_set_object() example

```
<?php
class CustomXMLParser
{
    private $parser;

    function __construct() 
    {
        $this->parser = xml_parser_create();

        xml_set_object($this->parser, $this);
        xml_set_element_handler($this->parser, "tag_open", "tag_close");
        xml_set_character_data_handler($this->parser, "cdata");
    }

    function parse($data) 
    {
        xml_parse($this->parser, $data);
    }

    function tag_open($parser, $tag, $attributes) 
    {
        var_dump($tag, $attributes); 
    }

    function cdata($parser, $cdata) 
    {
        var_dump($cdata);
    }

    function tag_close($parser, $tag) 
    {
        var_dump($tag);
    }
}

$xml_parser = new CustomXMLParser();
$xml_parser->parse("<A ID='hallo'>PHP</A>");
?>
```

The above example will output:

```
string(1) "A"
array(1) {
  ["ID"]=>
  string(5) "hallo"
}
string(3) "PHP"
string(1) "A"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-set-object.php
