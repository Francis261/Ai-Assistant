# Declaring sub-namespaces

Source: https://devdocs.io/php/language.namespaces.nested

## Declaring sub-namespaces

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Much like directories and files, PHP namespaces also contain the ability to specify a hierarchy of namespace names. Thus, a namespace name can be defined with sub-levels:

Example #1 Declaring a single namespace with hierarchy

```
<?php
namespace MyProject\Sub\Level;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.namespaces.nested.php
