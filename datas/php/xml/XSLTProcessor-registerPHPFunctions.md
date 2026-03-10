# XSLTProcessor::registerPHPFunctions

Source: https://devdocs.io/php/xsltprocessor.registerphpfunctions

(PHP 5 >= 5.0.4, PHP 7, PHP 8)

XSLTProcessor::registerPHPFunctions — Enables the ability to use PHP functions as XSLT functions

### Description

```
public XSLTProcessor::registerPHPFunctions(array|string|null $functions = null): void
```

This method enables the ability to use PHP functions as XSLT functions within XSL stylesheets.

### Parameters

Use this parameter to only allow certain functions to be called from XSLT.

This parameter can be one of the following: a string (a function name), an indexed array of function names, or an associative array with keys being the function name and the associated value being the callable.

### Errors/Exceptions

- Throws a ValueError if a callback name is not valid.
- Throws a ValueError if options contains an invalid option.
- Throws a ValueError if overrideEncoding is an unknown encoding.
- Throws a TypeError if a given callback is not callable.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 Simple PHP Function call from a stylesheet

```
<?php
$xml = <<<EOB
<allusers>
 <user>
  <uid>bob</uid>
 </user>
 <user>
  <uid>joe</uid>
 </user>
</allusers>
EOB;
$xsl = <<<EOB
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
     xmlns:php="http://php.net/xsl">
<xsl:output method="html" encoding="utf-8" indent="yes"/>
 <xsl:template match="allusers">
  <html><body>
    <h2>Users</h2>
    <table>
    <xsl:for-each select="user">
      <tr><td>
        <xsl:value-of
             select="php:function('ucfirst',string(uid))"/>
      </td></tr>
    </xsl:for-each>
    </table>
  </body></html>
 </xsl:template>
</xsl:stylesheet>
EOB;
$xmldoc = new DOMDocument();
$xmldoc->loadXML($xml);
$xsldoc = new DOMDocument();
$xsldoc->loadXML($xsl);

$proc = new XSLTProcessor();
$proc->registerPHPFunctions();
$proc->importStyleSheet($xsldoc);
echo $proc->transformToXML($xmldoc);
?>
```

### See Also

- DOMXPath::registerPhpFunctions() - Register PHP functions as XPath functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.registerphpfunctions.php
