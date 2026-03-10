# solr_get_version

Source: https://devdocs.io/php/function.solr-get-version

(PECL solr >= 0.9.1)

solr_get_version — Returns the current version of the Apache Solr extension

### Description

```
solr_get_version(): string
```

This function returns the current version of the extension as a string.

### Parameters

This function has no parameters.

### Return Values

It returns a string on success and false on failure.

### Errors/Exceptions

This function throws no errors or exceptions.

### Examples

Example #1 solr_get_version() example

```
<?php

$solr_version = solr_get_version();

print $solr_version;

?>
```

The above example will output something similar to:

```
0.9.6
```

### See Also

- SolrUtils::getSolrVersion() - Returns the current version of the Solr extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.solr-get-version.php
