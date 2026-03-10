# Name resolution rules

Source: https://devdocs.io/php/language.namespaces.rules

## Name resolution rules

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

For the purposes of these resolution rules, here are some important definitions:

This is an identifier without a namespace separator, such as Foo

This is an identifier with a namespace separator, such as Foo\Bar

This is an identifier with a namespace separator that begins with a namespace separator, such as \Foo\Bar. The namespace \Foo is also a fully qualified name.

This is an identifier starting with namespace, such as namespace\Foo\Bar.

Names are resolved following these resolution rules:

1. Fully qualified names always resolve to the name without leading namespace separator. For instance \A\B resolves to A\B.
2. Relative names always resolve to the name with namespace replaced by the current namespace. If the name occurs in the global namespace, the namespace\ prefix is stripped. For example namespace\A inside namespace X\Y resolves to X\Y\A. The same name inside the global namespace resolves to A.
3. For qualified names the first segment of the name is translated according to the current class/namespace import table. For example, if the namespace A\B\C is imported as C, the name C\D\E is translated to A\B\C\D\E.
4. For qualified names, if no import rule applies, the current namespace is prepended to the name. For example, the name C\D\E inside namespace A\B, resolves to A\B\C\D\E.
5. For unqualified names, the name is translated according to the current import table for the respective symbol type. This means that class-like names are translated according to the class/namespace import table, function names according to the function import table and constants according to the constant import table. For example, after use A\B\C; a usage such as new C() resolves to the name A\B\C(). Similarly, after use function A\B\foo; a usage such as foo() resolves to the name A\B\foo.
6. For unqualified names, if no import rule applies and the name refers to a class-like symbol, the current namespace is prepended. For example new C() inside namespace A\B resolves to name A\B\C.
7. For unqualified names, if no import rule applies and the name refers to a function or constant and the code is outside the global namespace, the name is resolved at runtime. Assuming the code is in namespace A\B, here is how a call to function foo() is resolved:
  1. It looks for a function from the current namespace: A\B\foo().
  2. It tries to find and call the global function foo().

1. It looks for a function from the current namespace: A\B\foo().
2. It tries to find and call the global function foo().

Example #1 Name resolutions illustrated

```
<?php
namespace A;
use B\D, C\E as F;

// function calls

foo();      // first tries to call "foo" defined in namespace "A"
            // then calls global function "foo"

\foo();     // calls function "foo" defined in global scope

my\foo();   // calls function "foo" defined in namespace "A\my"

F();        // first tries to call "F" defined in namespace "A"
            // then calls global function "F"

// class references

new B();    // creates object of class "B" defined in namespace "A"
            // if not found, it tries to autoload class "A\B"

new D();    // using import rules, creates object of class "D" defined in namespace "B"
            // if not found, it tries to autoload class "B\D"

new F();    // using import rules, creates object of class "E" defined in namespace "C"
            // if not found, it tries to autoload class "C\E"

new \B();   // creates object of class "B" defined in global scope
            // if not found, it tries to autoload class "B"

new \D();   // creates object of class "D" defined in global scope
            // if not found, it tries to autoload class "D"

new \F();   // creates object of class "F" defined in global scope
            // if not found, it tries to autoload class "F"

// static methods/namespace functions from another namespace

B\foo();    // calls function "foo" from namespace "A\B"

B::foo();   // calls method "foo" of class "B" defined in namespace "A"
            // if class "A\B" not found, it tries to autoload class "A\B"

D::foo();   // using import rules, calls method "foo" of class "D" defined in namespace "B"
            // if class "B\D" not found, it tries to autoload class "B\D"

\B\foo();   // calls function "foo" from namespace "B"

\B::foo();  // calls method "foo" of class "B" from global scope
            // if class "B" not found, it tries to autoload class "B"

// static methods/namespace functions of current namespace

A\B::foo();   // calls method "foo" of class "B" from namespace "A\A"
              // if class "A\A\B" not found, it tries to autoload class "A\A\B"

\A\B::foo();  // calls method "foo" of class "B" from namespace "A"
              // if class "A\B" not found, it tries to autoload class "A\B"
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.namespaces.rules.php
