# XSLTProcessor::setProfiling

Source: https://devdocs.io/php/xsltprocessor.setprofiling

(PHP >= 5.3.0, PHP 7, PHP 8)

XSLTProcessor::setProfiling — Sets profiling output file

### Description

```
public XSLTProcessor::setProfiling(?string $filename): true
```

Sets the file to output profiling information when processing a stylesheet.

### Parameters

Path to the file to dump profiling information.

### Return Values

Always returns true.

### Examples

Example #1 Example profiling output

```
<?php
// Load the XML source
$xml = new DOMDocument;
$xml->load('collection.xml');

$xsl = new DOMDocument;
$xsl->load('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->setProfiling('profiling.txt');
$proc->importStyleSheet($xsl); // attach the xsl rules

echo trim($proc->transformToDoc($xml)->firstChild->wholeText);
?>
```

The above code will produce the following information in the profiling file:

```
number               match                name      mode  Calls Tot 100us Avg

    0                   cd                                    2      3      1
    1           collection                                    1      1      1

                         Total                                3      4
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.setprofiling.php
