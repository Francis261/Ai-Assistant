# XSLTProcessor::registerPHPFunctionNS

Source: https://devdocs.io/php/xsltprocessor.registerphpfunctionns

(PHP >= 8.4.0)

XSLTProcessor::registerPHPFunctionNS — Register a PHP function as namespaced XSLT function

### Description

```
public XSLTProcessor::registerPHPFunctionNS(string $namespaceURI, string $name, callable $callable): void
```

This method enables the ability to use a PHP function as a namespaced XSLT functions within XSL stylesheets.

### Parameters

### Errors/Exceptions

- Throws a ValueError if a callback name is not valid.
- Throws a ValueError if options contains an invalid option.
- Throws a ValueError if overrideEncoding is an unknown encoding.
- Throws a TypeError if a given callback is not callable.

### Return Values

No value is returned.

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
    xmlns:my="urn:my.ns">
<xsl:output method="html" encoding="utf-8" indent="yes"/>
<xsl:template match="allusers">
 <html><body>
   <h2><xsl:value-of select="my:count(user/uid)" /> users</h2>
   <table>
   <xsl:for-each select="user">
     <tr>
      <td>
       <xsl:value-of select="my:uppercase(string(uid))"/>
      </td>
     </tr>
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
$proc->registerPHPFunctionNS('urn:my.ns', 'uppercase', strtoupper(...));
$proc->registerPHPFunctionNS('urn:my.ns', 'count', fn (array $arg1) => count($arg1));
$proc->importStyleSheet($xsldoc);
echo $proc->transformToXML($xmldoc);
?>
```

### See Also

- DOMXPath::registerPhpFunctionNS() - Register a PHP functions as namespaced XPath function
- DOMXPath::registerPhpFunctions() - Register PHP functions as XPath functions
- XSLTProcessor::registerPhpFunctions() - Enables the ability to use PHP functions as XSLT functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.registerphpfunctionns.php
