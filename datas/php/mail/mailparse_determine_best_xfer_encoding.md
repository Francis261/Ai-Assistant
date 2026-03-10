# mailparse_determine_best_xfer_encoding

Source: https://devdocs.io/php/function.mailparse-determine-best-xfer-encoding

(PECL mailparse >= 0.9.0)

mailparse_determine_best_xfer_encoding — Gets the best way of encoding

### Description

```
mailparse_determine_best_xfer_encoding(resource $fp): string
```

Figures out the best way of encoding the content read from the given file pointer.

### Parameters

A valid file pointer, which must be seek-able.

### Return Values

Returns one of the character encodings supported by the mbstring module.

### Examples

Example #1 mailparse_determine_best_xfer_encoding() example

```
<?php

$fp = fopen('somemail.eml', 'r');
echo 'Best encoding: ' . mailparse_determine_best_xfer_encoding($fp);

?>
```

The above example will output something similar to:

```
Best encoding: 7bit
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mailparse-determine-best-xfer-encoding.php
