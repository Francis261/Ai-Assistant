# Unsetting References

Source: https://devdocs.io/php/language.references.unset

## Unsetting References

When you unset the reference, you just break the binding between variable name and variable content. This does not mean that variable content will be destroyed. For example:

```
<?php

$a = 1;
$b =& $a;
unset($a); 

?>
```

Again, it might be useful to think about this as analogous to the Unix unlink call.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.references.unset.php
