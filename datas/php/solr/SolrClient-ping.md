# SolrClient::ping

Source: https://devdocs.io/php/solrclient.ping

(PECL solr >= 0.9.2)

SolrClient::ping — Checks if Solr server is still up

### Description

```
public SolrClient::ping(): SolrPingResponse
```

Checks if the Solr server is still alive. Sends a HEAD request to the Apache Solr server.

### Parameters

This function has no parameters.

### Return Values

Returns a SolrPingResponse object on success and throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to satisfy the request.

### Examples

Example #1 SolrClient::ping() example

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

$pingresponse = $client->ping();

?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.ping.php
