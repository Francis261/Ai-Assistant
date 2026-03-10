# SolrDisMaxQuery::__construct

Source: https://devdocs.io/php/solrdismaxquery.construct

(No version information available, might only be in Git)

SolrDisMaxQuery::__construct — Class Constructor

### Description

Class constructor initializes the object and sets the q parameter if passed

### Parameters

Search Query (q parameter)

### Return Values

### Errors/Exceptions

Emits SolrIllegalArgumentException in case of an invalid parameter was passed.

### Examples

Example #1 SolrDisMaxQuery::__construct() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
echo $dismaxQuery;

?>
```

The above example will output:

```
q=lucene&defType=edismax
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.construct.php
