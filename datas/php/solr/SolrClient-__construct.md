# SolrClient::__construct

Source: https://devdocs.io/php/solrclient.construct

(PECL solr >= 0.9.2)

SolrClient::__construct — Constructor for the SolrClient object

### Description

Constructor for the SolrClient object

### Parameters

This is an array containing one of the following keys :

```
- secure          (Boolean value indicating whether or not to connect in secure mode)
 - hostname        (The hostname for the Solr server)
 - port            (The port number)
 - path            (The path to solr)
 - wt              (The name of the response writer e.g. xml, json)
 - login           (The username used for HTTP Authentication, if any)
 - password        (The HTTP Authentication password)
 - proxy_host      (The hostname for the proxy server, if any)
 - proxy_port      (The proxy port)
 - proxy_login     (The proxy username)
 - proxy_password  (The proxy password)
 - timeout         (This is maximum time in seconds allowed for the http data transfer operation. Default is 30 seconds)
 - ssl_cert        (File name to a PEM-formatted file containing the private key + private certificate (concatenated in that order) )
 - ssl_key         (File name to a PEM-formatted private key file only)
 - ssl_keypassword (Password for private key)
 - ssl_cainfo      (Name of file holding one or more CA certificates to verify peer with)
 - ssl_capath      (Name of directory holding multiple CA certificates to verify peer with )
 
 Please note the if the ssl_cert file only contains the private certificate, you have to specify a separate ssl_key file
 
 The ssl_keypassword option is required if the ssl_cert or ssl_key options are set.
```

### Errors/Exceptions

Throws SolrIllegalArgumentException on failure.

### Examples

Example #1 SolrClient::__construct() example

```
<?php

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
    'path'     => SOLR_PATH_TO_SOLR,
    'wt'       => 'xml',
);

$client = new SolrClient($options);

$doc = new SolrInputDocument();

$doc->addField('id', 334455);
$doc->addField('cat', 'Software');
$doc->addField('cat', 'Lucene');

$updateResponse = $client->addDocument($doc);

?>
```

The above example will output something similar to:

### See Also

- SolrClient::getOptions() - Returns the client options set internally

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.construct.php
