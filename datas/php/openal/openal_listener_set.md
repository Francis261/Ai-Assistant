# openal_listener_set

Source: https://devdocs.io/php/function.openal-listener-set

(PECL openal >= 0.1.0)

openal_listener_set — Set a listener property

### Description

```
openal_listener_set(int $property, mixed $setting): bool
```

### Parameters

Property to set, one of: AL_GAIN (float), AL_POSITION (array(float,float,float)), AL_VELOCITY (array(float,float,float)) and AL_ORIENTATION (array(float,float,float)).

Value to set, either float, or an array of floats as appropriate.

### Return Values

Returns true on success or false on failure.

### See Also

- openal_listener_get() - Retrieve a listener property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-listener-set.php
