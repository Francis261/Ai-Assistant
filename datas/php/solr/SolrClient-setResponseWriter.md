# SolrClient::setResponseWriter

Source: https://devdocs.io/php/solrclient.setresponsewriter

(PECL solr >= 0.9.11)

SolrClient::setResponseWriter — Sets the response writer used to prepare the response from Solr

### Description

```
public SolrClient::setResponseWriter(string $responseWriter): void
```

Sets the response writer used to prepare the response from Solr

### Parameters

One of the following:

- json
- phps
- xml

### Return Values

No value is returned.

### Examples

Example #1 SolrClient::setResponseWriter() example

```
<?php

// This is my custom class for objects
class SolrClass
{
   public $_properties = array();

   public function __get($property_name) {
      
      if (property_exists($this, $property_name)) {
      
          return $this->$property_name;
      
      } else if (isset($_properties[$property_name])) {
      
          return $_properties[$property_name];
      }
      
      return null;
   }
}

$options = array
(
  'hostname' => 'localhost',
  'port' => 8983,
  'path' => '/solr/core1'
);

$client = new SolrClient($options);

$client->setResponseWriter("json");

//$response = $client->ping();

$query = new SolrQuery();

$query->setQuery("*:*");

$query->set("objectClassName", "SolrClass");

$query->set("objectPropertiesStorageMode", 1); // 0 for independent properties, 1 for combined

try
{

$response = $client->query($query);

$resp = $response->getResponse();

print_r($response);

print_r($resp);

} catch (Exception $e) {

print_r($e);

}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.setresponsewriter.php
