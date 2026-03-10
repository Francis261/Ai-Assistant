# SolrClient::getByIds

Source: https://devdocs.io/php/solrclient.getbyids

(PECL solr >= 2.2.0)

SolrClient::getByIds — Get Documents by their Ids. Utilizes Solr Realtime Get (RTG)

### Description

```
public SolrClient::getByIds(array $ids): SolrQueryResponse
```

Get Documents by their Ids. Utilizes Solr Realtime Get (RTG).

### Parameters

Document ids

### Return Values

SolrQueryResponse

### Examples

Example #1 SolrClient::getByIds() example

```
<?php

include "bootstrap.php";

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
    'path'     => SOLR_SERVER_PATH
);

$client = new SolrClient($options);
$response = $client->getByIds(['GB18030TEST', '6H500F0']);

print_r($response->getResponse());

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [response] => SolrObject Object
        (
            [numFound] => 2
            [start] => 0
            [docs] => Array
                (
                    [0] => SolrObject Object
                        (
                            [id] => GB18030TEST
                            [name] => Array
                                (
                                    [0] => Test with some GB18030 encoded characters
                                )

                            [features] => Array
                                (
                                    [0] => No accents here
                                    [1] => 这是一个功能
                                    [2] => This is a feature (translated)
                                    [3] => 这份文件是很有光泽
                                    [4] => This document is very shiny (translated)
                                )

                            [price] => Array
                                (
                                    [0] => 0
                                )

                            [inStock] => Array
                                (
                                    [0] => 1
                                )

                            [_version_] => 1510294336239042560
                        )

                    [1] => SolrObject Object
                        (
                            [id] => 6H500F0
                            [name] => Array
                                (
                                    [0] => Maxtor DiamondMax 11 - hard drive - 500 GB - SATA-300
                                )

                            [manu] => Array
                                (
                                    [0] => Maxtor Corp.
                                )

                            [manu_id_s] => maxtor
                            [cat] => Array
                                (
                                    [0] => electronics
                                    [1] => hard drive
                                )

                            [features] => Array
                                (
                                    [0] => SATA 3.0Gb/s, NCQ
                                    [1] => 8.5ms seek
                                    [2] => 16MB cache
                                )

                            [price] => Array
                                (
                                    [0] => 350
                                )

                            [popularity] => Array
                                (
                                    [0] => 6
                                )

                            [inStock] => Array
                                (
                                    [0] => 1
                                )

                            [store] => Array
                                (
                                    [0] => 45.17614,-93.87341
                                )

                            [manufacturedate_dt] => 2006-02-13T15:26:37Z
                            [_version_] => 1510294336449806336
                        )

                )

        )

)
```

### See Also

- SolrClient::getById() - Get Document By Id. Utilizes Solr Realtime Get (RTG)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.getbyids.php
