# SolrDocument::toArray

Source: https://devdocs.io/php/solrdocument.toarray

(PECL solr >= 0.9.2)

SolrDocument::toArray — Returns an array representation of the document

### Description

```
public SolrDocument::toArray(): array
```

Returns an array representation of the document.

### Parameters

This function has no parameters.

### Return Values

Returns an array representation of the document.

### Examples

Example #1 SolrDocument::toArray() example

```
<?php

$doc = new SolrDocument();

$doc->addField('id', 1123);

$doc->features = "PHP Client Side";
$doc->features = "Fast development cycles";

$doc['cat'] = 'Software';
$doc['cat'] = 'Custom Search';
$doc->cat   = 'Information Technology';

print_r($doc->toArray());

?>
```

The above example will output something similar to:

```
Array
(
    [document_boost] => 0
    [field_count] => 3
    [fields] => Array
        (
            [0] => SolrDocumentField Object
                (
                    [name] => id
                    [boost] => 0
                    [values] => Array
                        (
                            [0] => 1123
                        )

                )

            [1] => SolrDocumentField Object
                (
                    [name] => features
                    [boost] => 0
                    [values] => Array
                        (
                            [0] => PHP Client Side
                            [1] => Fast development cycles
                        )

                )

            [2] => SolrDocumentField Object
                (
                    [name] => cat
                    [boost] => 0
                    [values] => Array
                        (
                            [0] => Software
                            [1] => Custom Search
                            [2] => Information Technology
                        )

                )

        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdocument.toarray.php
