# Defining namespaces

Source: https://devdocs.io/php/language.namespaces.definition

## Defining namespaces

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Although any valid PHP code can be contained within a namespace, only the following types of code are affected by namespaces: classes (including abstract classes, traits and enums), interfaces, functions and constants.

Namespaces are declared using the namespace keyword. A file containing a namespace must declare the namespace at the top of the file before any other code - with one exception: the declare keyword.

Example #1 Declaring a single namespace

```
<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */ }

?>
```

Note: Fully qualified names (i.e. names starting with a backslash) are not allowed in namespace declarations, because such constructs are interpreted as relative namespace expressions.

Example #2 Declaring a single namespace

```
<html>
<?php
namespace MyProject; // fatal error - namespace must be the first statement in the script
?>
```

In addition, unlike any other PHP construct, the same namespace may be defined in multiple files, allowing splitting up of a namespace's contents across the filesystem.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.namespaces.definition.php
