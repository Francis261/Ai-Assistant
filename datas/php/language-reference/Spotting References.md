# Spotting References

Source: https://devdocs.io/php/language.references.spot

## Spotting References

Many syntax constructs in PHP are implemented via referencing mechanisms, so everything mentioned herein about reference binding also applies to these constructs. Some constructs, like passing and returning by reference, are mentioned above. Other constructs that use references are:

### global References

When you declare a variable as global $var you are in fact creating reference to a global variable. That means, this is the same as:

```
<?php

$var =& $GLOBALS["var"];

?>
```

This also means that unsetting $var won't unset the global variable.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.references.spot.php
