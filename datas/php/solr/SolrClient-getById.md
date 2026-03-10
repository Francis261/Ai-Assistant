# SolrClient::getById

Source: https://devdocs.io/php/solrclient.getbyid

(PECL solr >= 2.2.0)

SolrClient::getById — Get Document By Id. Utilizes Solr Realtime Get (RTG)

### Description

```
public SolrClient::getById(string $id): SolrQueryResponse
```

Get Document By Id. Utilizes Solr Realtime Get (RTG).

### Parameters

Document ID

### Return Values

SolrQueryResponse

### Examples

Example #1 SolrClient::getById() example

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
$response = $client->getById('GB18030TEST');
print_r($response->getResponse());

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [doc] => SolrObject Object
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

)
```

### See Also

- SolrClient::getByIds() - Get Documents by their Ids. Utilizes Solr Realtime Get (RTG)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.getbyid.php
