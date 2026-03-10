# SoapServer::setPersistence

Source: https://devdocs.io/php/soapserver.setpersistence

(PHP 5, PHP 7, PHP 8)

SoapServer::setPersistence — Sets SoapServer persistence mode

### Description

```
public SoapServer::setPersistence(int $mode): void
```

This function allows changing the persistence state of a SoapServer object between requests. This function allows saving data between requests utilizing PHP sessions. This method only has an affect on a SoapServer after it has exported functions utilizing SoapServer::setClass().

Note:

The persistence of SOAP_PERSISTENCE_SESSION makes only objects of the given class persistent, but not the class static data. In this case, use $this->bar instead of self::$bar.

Note:

SOAP_PERSISTENCE_SESSION serializes data on the class object between requests. In order to properly utilize resources (e.g. PDO), __wakeup() and __sleep() magic methods should be utilized.

### Parameters

One of the SOAP_PERSISTENCE_* constants.

SOAP_PERSISTENCE_REQUEST - SoapServer data does not persist between requests. This is the default behavior of any SoapServer object after setClass is called.

SOAP_PERSISTENCE_SESSION - SoapServer data persists between requests. This is accomplished by serializing the SoapServer class data into $_SESSION['_bogus_session_name'], because of this session_start() must be called before this persistence mode is set.

### Return Values

No value is returned.

### Examples

Example #1 SoapServer::setPersistence() example

```
<?php
 class MyFirstPersistentSoapServer {
     private $resource; // (Such as PDO, mysqli, etc..)
     public $myvar1;
     public $myvar2;

     public function __construct() {
         $this->__wakeup(); // We're calling our wakeup to handle starting our resource
     }

     public function __wakeup() {
         $this->resource = CodeToStartOurResourceUp();
     }

     public function __sleep() {
         // We make sure to leave out $resource here, so our session data remains persistent
         // Failure to do so will result in the failure during the unserialization of data
         // on the next request; thus, our SoapObject would not be persistent across requests.
         return array('myvar1','myvar2');
     }
 }

 try {
     session_start();
     $server = new SoapServer(null, array('uri' => $_SERVER['REQUEST_URI']));
     $server->setClass('MyFirstPersistentSoapServer');
     // setPersistence MUST be called after setClass, because setClass's
     // behavior sets SESSION_PERSISTENCE_REQUEST upon enacting the method.
     $server->setPersistence(SOAP_PERSISTENCE_SESSION);
     $server->handle();
 } catch(SoapFault $e) {
     error_log("SOAP ERROR: ". $e->getMessage());
 }
?>
```

### See Also

- SoapServer::setClass() - Sets the class which handles SOAP requests

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.setpersistence.php
