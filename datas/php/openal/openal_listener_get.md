# openal_listener_get

Source: https://devdocs.io/php/function.openal-listener-get

(PECL openal >= 0.1.0)

openal_listener_get — Retrieve a listener property

### Description

```
openal_listener_get(int $property): mixed
```

### Parameters

Property to retrieve, one of: AL_GAIN (float), AL_POSITION (array(float,float,float)), AL_VELOCITY (array(float,float,float)) and AL_ORIENTATION (array(float,float,float)).

### Return Values

Returns a float or array of floats (as appropriate) or false on failure.

### See Also

- openal_listener_set() - Set a listener property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-listener-get.php
