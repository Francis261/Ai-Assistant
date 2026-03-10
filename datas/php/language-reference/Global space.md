# Global space

Source: https://devdocs.io/php/language.namespaces.global

## Global space

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Without any namespace definition, all class and function definitions are placed into the global space - as it was in PHP before namespaces were supported. Prefixing a name with \ will specify that the name is required from the global space even in the context of the namespace.

Example #1 Using global space specification

```
<?php
namespace A\B\C;

/* This function is A\B\C\fopen */
function fopen() {
     /* ... */
     $f = \fopen(...); // call global fopen
     return $f;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.namespaces.global.php
