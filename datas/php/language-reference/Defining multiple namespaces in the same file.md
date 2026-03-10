# Defining multiple namespaces in the same file

Source: https://devdocs.io/php/language.namespaces.definitionmultiple

## Defining multiple namespaces in the same file

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Multiple namespaces may also be declared in the same file. There are two allowed syntaxes.

Example #1 Declaring multiple namespaces, simple combination syntax

```
<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
?>
```

This syntax is not recommended for combining namespaces into a single file. Instead it is recommended to use the alternate bracketed syntax.

Example #2 Declaring multiple namespaces, bracketed syntax

```
<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace AnotherProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}
?>
```

It is strongly discouraged as a coding practice to combine multiple namespaces into the same file. The primary use case is to combine multiple PHP scripts into the same file.

To combine global non-namespaced code with namespaced code, only bracketed syntax is supported. Global code should be encased in a namespace statement with no namespace name as in:

Example #3 Declaring multiple namespaces and unnamespaced code

```
<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // global code
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>
```

No PHP code may exist outside of the namespace brackets except for an opening declare statement.

Example #4 Declaring multiple namespaces and unnamespaced code

```
<?php
declare(encoding='UTF-8');
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // global code
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.namespaces.definitionmultiple.php
