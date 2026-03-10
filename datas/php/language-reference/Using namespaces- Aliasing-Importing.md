# Using namespaces: Aliasing/Importing

Source: https://devdocs.io/php/language.namespaces.importing

## Using namespaces: Aliasing/Importing

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The ability to refer to an external fully qualified name with an alias, or importing, is an important feature of namespaces. This is similar to the ability of unix-based filesystems to create symbolic links to a file or to a directory.

PHP can alias(/import) constants, functions, classes, interfaces, traits, enums and namespaces.

Aliasing is accomplished with the use operator. Here is an example showing all 5 kinds of importing:

Example #1 importing/aliasing with the use operator

```
<?php
namespace foo;
use My\Full\Classname as Another;

// this is the same as use My\Full\NSname as NSname
use My\Full\NSname;

// importing a global class
use ArrayObject;

// importing a function
use function My\Full\functionName;

// aliasing a function
use function My\Full\functionName as func;

// importing a constant
use const My\Full\CONSTANT;

$obj = new namespace\Another; // instantiates object of class foo\Another
$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // instantiates object of class ArrayObject
// without the "use ArrayObject" we would instantiate an object of class foo\ArrayObject
func(); // calls function My\Full\functionName
echo CONSTANT; // echoes the value of My\Full\CONSTANT
?>
```

PHP additionally supports a convenience shortcut to place multiple use statements on the same line

Example #2 importing/aliasing with the use operator, multiple use statements combined

```
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
?>
```

Importing is performed at compile-time, and so does not affect dynamic class, function or constant names.

Example #3 Importing and dynamic names

```
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$a = 'Another';
$obj = new $a;      // instantiates object of class Another
?>
```

In addition, importing only affects unqualified and qualified names. Fully qualified names are absolute, and unaffected by imports.

Example #4 Importing and fully qualified names

```
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$obj = new \Another; // instantiates object of class Another
$obj = new Another\thing; // instantiates object of class My\Full\Classname\thing
$obj = new \Another\thing; // instantiates object of class Another\thing
?>
```

### Scoping rules for importing

The use keyword must be declared in the outermost scope of a file (the global scope) or inside namespace declarations. This is because the importing is done at compile time and not runtime, so it cannot be block scoped. The following example will show an illegal use of the use keyword:

Example #5 Illegal importing rule

```
<?php
namespace Languages;

function toGreenlandic()
{
    use Languages\Danish;

    // ...
}
?>
```

Note:

Importing rules are per file basis, meaning included files will NOT inherit the parent file's importing rules.

### Group use declarations

Classes, functions and constants being imported from the same namespace can be grouped together in a single use statement.

```
<?php

use some\namespace\ClassA;
use some\namespace\ClassB;
use some\namespace\ClassC as C;

use function some\namespace\fn_a;
use function some\namespace\fn_b;
use function some\namespace\fn_c;

use const some\namespace\ConstA;
use const some\namespace\ConstB;
use const some\namespace\ConstC;

// is equivalent to the following groupped use declaration
use some\namespace\{ClassA, ClassB, ClassC as C};
use function some\namespace\{fn_a, fn_b, fn_c};
use const some\namespace\{ConstA, ConstB, ConstC};
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.namespaces.importing.php
