# SolrClient::addDocument

Source: https://devdocs.io/php/solrclient.adddocument

(PECL solr >= 0.9.2)

SolrClient::addDocument — Adds a document to the index

### Description

```
public SolrClient::addDocument(SolrInputDocument $doc, bool $overwrite = true, int $commitWithin = 0): SolrUpdateResponse
```

This method adds a document to the index.

### Parameters

The SolrInputDocument instance.

Whether to overwrite existing document or not. If false there will be duplicates (several documents with the same ID).

PECL Solr < 2.0 $allowDups was used instead of $overwrite, which does the same functionality with exact opposite bool flag.

$allowDups = false is the same as $overwrite = true

Number of milliseconds within which to auto commit this document. Available since Solr 1.4 . Default (0) means disabled.

When this value specified, it leaves the control of when to do the commit to Solr itself, optimizing number of commits to a minimum while still fulfilling the update latency requirements, and Solr will automatically do a commit when the oldest add in the buffer is due.

### Return Values

Returns a SolrUpdateResponse object or throws an Exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### Examples

Example #1 SolrClient::addDocument() example

```
<?php

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
);

$client = new SolrClient($options);

$doc = new SolrInputDocument();

$doc->addField('id', 334455);
$doc->addField('cat', 'Software');
$doc->addField('cat', 'Lucene');

$updateResponse = $client->addDocument($doc);

// you will have to commit changes to be written if you didn't use $commitWithin
$client->commit();

print_r($updateResponse->getResponse());

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [responseHeader] => SolrObject Object
        (
            [status] => 0
            [QTime] => 1
        )

)
```

Example #2 SolrClient::addDocument() example 2

```
<?php

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
);

$client = new SolrClient($options);

$doc = new SolrInputDocument();

$doc->addField('id', 334455);
$doc->addField('cat', 'Software');
$doc->addField('cat', 'Lucene');

// No need to call commit() because $commitWithin is passed, so Solr Server will auto commit within 10 seconds
$updateResponse = $client->addDocument($doc, false, 10000);

print_r($updateResponse->getResponse());

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [responseHeader] => SolrObject Object
        (
            [status] => 0
            [QTime] => 1
        )

)
```

### See Also

- SolrClient::addDocuments() - Adds a collection of SolrInputDocument instances to the index
- SolrClient::commit() - Finalizes all add/deletes made to the index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.adddocument.php
