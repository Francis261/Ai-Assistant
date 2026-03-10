# ibase_service_detach

Source: https://devdocs.io/php/function.ibase-service-detach

(PHP 5, PHP 7 < 7.4.0)

ibase_service_detach — Disconnect from the service manager

### Description

```
ibase_service_detach(resource $service_handle): bool
```

### Parameters

A previously created connection to the database server.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 ibase_service_detach() example

```
<?php
    // Attach to the remote Firebird server by ip address
    if (($service = ibase_service_attach('10.1.1.199', 'sysdba', 'masterkey')) != FALSE) {
        
        // Successfully attached. 
        // Fetch server version (something like 'LI-V3.0.4.33054 Firebird 3.0')
        $server_version  = ibase_server_info($service, IBASE_SVC_SERVER_VERSION);

        // Fetch server implementation (something like 'Firebird/Linux/AMD/Intel/x64')
        $server_implementation = ibase_server_info($service, IBASE_SVC_IMPLEMENTATION);

        // Detach from server (disconnect)
        if(ibase_service_detach($service) == FALSE) {
            echo "Error on service detach.";
        }
        else {
            echo "Successfully detached from service.";
        }

    }
    else {
        // Output message on error
        $conn_error = ibase_errmsg();
        die($conn_error);
    }

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-service-detach.php
