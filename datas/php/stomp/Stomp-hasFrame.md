# Stomp::hasFrame

Source: https://devdocs.io/php/stomp.hasframe

# stomp_has_frame

(PECL stomp >= 0.1.0)

Stomp::hasFrame -- stomp_has_frame — Indicates whether or not there is a frame ready to read

### Description

Object-oriented style (method):

```
public Stomp::hasFrame(): bool
```

Procedural style:

```
stomp_has_frame(resource $link): bool
```

Indicates whether or not there is a frame ready to read.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

### Return Values

Returns true if a frame is ready to read, or false otherwise.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.hasframe.php
