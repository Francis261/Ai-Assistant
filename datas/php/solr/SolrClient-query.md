# SolrClient::query

Source: https://devdocs.io/php/solrclient.query

(PECL solr >= 0.9.2)

SolrClient::query — Sends a query to the server

### Description

```
public SolrClient::query(SolrParams $query): SolrQueryResponse
```

Sends a query to the server.

### Parameters

A SolrParams object. It is recommended to use SolrQuery for advanced queries.

### Return Values

Returns a SolrQueryResponse object on success and throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to satisfy the query.

### Examples

Example #1 SolrClient::query() example

```
<?php

$options = array
(
    'hostname' => 'localhost',
    'login'    => 'username',
    'password' => 'password',
    'port'     => '8983',
);

$client = new SolrClient($options);

$query = new SolrQuery();

$query->setQuery('lucene');

$query->setStart(0);

$query->setRows(50);

$query->addField('cat')->addField('features')->addField('id')->addField('timestamp');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response);

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [responseHeader] => SolrObject Object
        (
            [status] => 0
            [QTime] => 3
            [params] => SolrObject Object
                (
                    [fl] => cat,features,id,timestamp
                    [indent] => on
                    [start] => 0
                    [q] => lucene
                    [wt] => xml
                    [version] => 2.2
                    [rows] => 50
                )

        )

    [response] => SolrObject Object
        (
            [numFound] => 1
            [start] => 0
            [docs] => Array
                (
                    [0] => SolrObject Object
                        (
                            [id] => SOLR1000
                            [cat] => Array
                                (
                                    [0] => software
                                    [1] => search
                                )

                            [features] => Array
                                (
                                    [0] => Advanced Full-Text Search Capabilities using Lucene
                                    [1] => Optimized for High Volume Web Traffic
                                    [2] => Standards Based Open Interfaces - XML and HTTP
                                    [3] => Comprehensive HTML Administration Interfaces
                                    [4] => Scalability - Efficient Replication to other Solr Search Servers
                                    [5] => Flexible and Adaptable with XML configuration and Schema
                                    [6] => Good unicode support: héllo (hello with an accent over the e)
                                )

                        )

                )

        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.query.php
