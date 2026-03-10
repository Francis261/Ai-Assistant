# Variable variables

Source: https://devdocs.io/php/language.variables.variable

## Variable variables

Sometimes it is convenient to be able to have variable variable names. That is, a variable name which can be set and used dynamically. A normal variable is set with a statement such as:

```
<?php
$a = 'hello';
?>
```

A variable variable takes the value of a variable and treats that as the name of a variable. In the above example, hello, can be used as the name of a variable by using two dollar signs. i.e.

```
<?php
$$a = 'world';
?>
```

At this point two variables have been defined and stored in the PHP symbol tree: $a with contents "hello" and $hello with contents "world". Therefore, this statement:

```
<?php
echo "$a {$$a}";
?>
```

produces the exact same output as:

```
<?php
echo "$a $hello";
?>
```

i.e. they both produce: hello world.

In order to use variable variables with arrays, an ambiguity problem has to be resolved. That is, if the parser sees $$a[1] then it needs to know if $a[1] was meant to be used as a variable, or if $$a was wanted as the variable and then the [1] index from that variable. The syntax for resolving this ambiguity is: ${$a[1]} for the first case and ${$a}[1] for the second.

Class properties may also be accessed using variable property names. The variable property name will be resolved within the scope from which the call is made. For instance, if there is an expression such as $foo->$bar, then the local scope will be examined for $bar and its value will be used as the name of the property of $foo. This is also true if $bar is an array access.

Curly braces may also be used to clearly delimit the property name. They are most useful when accessing values within a property that contains an array, when the property name is made of multiple parts, or when the property name contains characters that are not otherwise valid (e.g. from json_decode() or SimpleXML).

Example #1 Variable property example

```
<?php
class Foo {
    public $bar = 'I am bar.';
    public $arr = ['I am A.', 'I am B.', 'I am C.'];
    public $r   = 'I am r.';
}

$foo = new Foo();
$bar = 'bar';
$baz = ['foo', 'bar', 'baz', 'quux'];
echo $foo->$bar . "\n";
echo $foo->{$baz[1]} . "\n";

$start = 'b';
$end   = 'ar';
echo $foo->{$start . $end} . "\n";

$arr = 'arr';
echo $foo->{$arr[1]} . "\n";
echo $foo->{$arr}[1] . "\n";

?>
```

The above example will output:

```
I am bar.
I am bar.
I am bar.
I am r.
I am B.
```

Please note that variable variables cannot be used with PHP's Superglobal arrays within functions or class methods. The variable $this is also a special variable that cannot be referenced dynamically.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.variables.variable.php
