# use_soap_error_handler

Source: https://devdocs.io/php/function.use-soap-error-handler

(PHP 5, PHP 7, PHP 8)

use_soap_error_handler — Set whether to use the SOAP error handler

### Description

```
use_soap_error_handler(bool $enable = true): bool
```

This function sets whether or not to use the SOAP error handler in the SOAP server. It will return the previous value. If set to true, details of errors in a SoapServer application will be sent to the client as a SOAP fault message. If false, the standard PHP error handler is used. The default is to send error to the client as SOAP fault message.

### Parameters

Set to true to send error details to clients.

### Return Values

Returns the original value.

### See Also

- set_error_handler() - Sets a user-defined error handler function
- set_exception_handler() - Sets a user-defined exception handler function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.use-soap-error-handler.php
