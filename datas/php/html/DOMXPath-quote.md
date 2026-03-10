# DOMXPath::quote

Source: https://devdocs.io/php/domxpath.quote

(PHP 8 >= 8.4.0)

DOMXPath::quote — Quotes a string for use in an XPath expression

### Description

```
public static DOMXPath::quote(string $str): string
```

Quotes str for use in an XPath expression.

### Parameters

### Return Values

Returns a quoted string to be used in an XPath expression.

### Examples

Example #1 Matching attribute value with quotes

```
<?php
$doc = new DOMDocument;
$doc->loadXML(<<<XML
<books>
    <book name="'quoted' name">Book title</book>
</books>
XML);

$xpath = new DOMXPath($doc);

$query = "//book[@name=" . DOMXPath::quote("'quoted' name") . "]";
echo $query, "\n";

$entries = $xpath->query($query);

foreach ($entries as $entry) {
    echo "Found ", $entry->textContent, "\n";
}
?>
```

The above example will output:

```
//book[@name="'quoted' name"]
Found Book title
```

Mixed quote types are also supported:

```
<?php
echo DOMXPath::quote("'different' \"quote\" styles");
?>
```

The above example will output:

```
concat("'different' ",'"quote" styles')
```

### See Also

- DOMXPath::evaluate() - Evaluates the given XPath expression and returns a typed result if possible
- DOMXPath::query() - Evaluates the given XPath expression

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domxpath.quote.php
