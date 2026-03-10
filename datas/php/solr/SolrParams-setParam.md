# SolrParams::setParam

Source: https://devdocs.io/php/solrparams.setparam

(PECL solr >= 0.9.2)

SolrParams::setParam — Sets the parameter to the specified value

### Description

```
public SolrParams::setParam(string $name, string $value): SolrParams
```

Sets the query parameter to the specified value. This is used for parameters that can only be specified once. Subsequent calls with the same parameter name will override the existing value

### Parameters

Name of the parameter

Value of the parameter

### Return Values

Returns a SolrParam object on success and false on value.

### Examples

Example #1 SolrParams::setParam() example

```
<?php

$param = new SolrParams();

$param->setParam('q', 'solr')->setParam('rows', 2);

?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrparams.setparam.php
