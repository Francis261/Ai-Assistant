# SolrClient::request

Source: https://devdocs.io/php/solrclient.request

(PECL solr >= 0.9.2)

SolrClient::request — Sends a raw update request

### Description

```
public SolrClient::request(string $raw_request): SolrUpdateResponse
```

Sends a raw XML update request to the server

### Parameters

An XML string with the raw request to the server.

### Return Values

Returns a SolrUpdateResponse on success. Throws an exception on failure.

### Errors/Exceptions

Throws SolrIllegalArgumentException if raw_request was an empty string

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to satisfy the query.

### Examples

Example #1 SolrClient::request() example

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

$update_response = $client->request("<commit/>");

$response = $update_response->getResponse();

print_r($response);
?>
```

The above example will output something similar to:

```
...
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.request.php
