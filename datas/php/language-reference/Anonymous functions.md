# Anonymous functions

Source: https://devdocs.io/php/functions.anonymous

## Anonymous functions

Anonymous functions, also known as closures, allow the creation of functions which have no specified name. They are most useful as the value of callable parameters, but they have many other uses.

Anonymous functions are implemented using the Closure class.

Example #1 Anonymous function example

```
<?php
echo preg_replace_callback('~-([a-z])~', function ($match) {
    return strtoupper($match[1]);
}, 'hello-world');
// outputs helloWorld
?>
```

Closures can also be used as the values of variables; PHP automatically converts such expressions into instances of the Closure internal class. Assigning a closure to a variable uses the same syntax as any other assignment, including the trailing semicolon:

Example #2 Anonymous function variable assignment example

```
<?php
$greet = function($name) {
    printf("Hello %s\r\n", $name);
};

$greet('World');
$greet('PHP');
?>
```

Closures may also inherit variables from the parent scope. Any such variables must be passed to the use language construct. As of PHP 7.1, these variables must not include superglobals, $this, or variables with the same name as a parameter. A return type declaration of the function has to be placed after the use clause.

Example #3 Inheriting variables from the parent scope

```
<?php
$message = 'hello';

// No "use"
$example = function () {
    var_dump($message);
};
$example();

// Inherit $message
$example = function () use ($message) {
    var_dump($message);
};
$example();

// Inherited variable's value is from when the function
// is defined, not when called
$message = 'world';
$example();

// Reset message
$message = 'hello';

// Inherit by-reference
$example = function () use (&$message) {
    var_dump($message);
};
$example();

// The changed value in the parent scope
// is reflected inside the function call
$message = 'world';
$example();

// Closures can also accept regular arguments
$example = function ($arg) use ($message) {
    var_dump($arg . ' ' . $message);
};
$example("hello");

// Return type declaration comes after the use clause
$example = function () use ($message): string {
    return "hello $message";
};
var_dump($example());
?>
```

The above example will output something similar to:

```
Notice: Undefined variable: message in /example.php on line 6
NULL
string(5) "hello"
string(5) "hello"
string(5) "hello"
string(5) "world"
string(11) "hello world"
string(11) "hello world"
```

As of PHP 8.0.0, the list of scope-inherited variables may include a trailing comma, which will be ignored.

Inheriting variables from the parent scope is not the same as using global variables. Global variables exist in the global scope, which is the same no matter what function is executing. The parent scope of a closure is the function in which the closure was declared (not necessarily the function it was called from). See the following example:

Example #4 Closures and scoping

```
<?php
// A basic shopping cart which contains a list of added products
// and the quantity of each product. Includes a method which
// calculates the total price of the items in the cart using a
// closure as a callback.
class Cart
{
    const PRICE_BUTTER  = 1.00;
    const PRICE_MILK    = 3.00;
    const PRICE_EGGS    = 6.95;

    protected $products = array();
    
    public function add($product, $quantity)
    {
        $this->products[$product] = $quantity;
    }
    
    public function getQuantity($product)
    {
        return isset($this->products[$product]) ? $this->products[$product] :
               FALSE;
    }
    
    public function getTotal($tax)
    {
        $total = 0.00;
        
        $callback =
            function ($quantity, $product) use ($tax, &$total)
            {
                $pricePerItem = constant(__CLASS__ . "::PRICE_" .
                    strtoupper($product));
                $total += ($pricePerItem * $quantity) * ($tax + 1.0);
            };
        
        array_walk($this->products, $callback);
        return round($total, 2);
    }
}

$my_cart = new Cart;

// Add some items to the cart
$my_cart->add('butter', 1);
$my_cart->add('milk', 3);
$my_cart->add('eggs', 6);

// Print the total with a 5% sales tax.
print $my_cart->getTotal(0.05) . "\n";
// The result is 54.29
?>
```

Example #5 Automatic binding of $this

```
<?php

class Test
{
    public function testing()
    {
        return function() {
            var_dump($this);
        };
    }
}

$object = new Test;
$function = $object->testing();
$function();
    
?>
```

The above example will output:

```
object(Test)#1 (0) {
}
```

When declared in the context of a class, the current class is automatically bound to it, making $this available inside of the function's scope. If this automatic binding of the current class is not wanted, then static anonymous functions may be used instead.

### Static anonymous functions

Anonymous functions may be declared statically. This prevents them from having the current class automatically bound to them. Objects may also not be bound to them at runtime.

Example #6 Attempting to use $this inside a static anonymous function

```
<?php

class Foo
{
    function __construct()
    {
        $func = static function() {
            var_dump($this);
        };
        $func();
    }
};
new Foo();

?>
```

The above example will output:

```
Notice: Undefined variable: this in %s on line %d
NULL
```

Example #7 Attempting to bind an object to a static anonymous function

```
<?php

$func = static function() {
    // function body
};
$func = $func->bindTo(new stdClass);
$func();

?>
```

The above example will output:

```
Warning: Cannot bind an instance to a static closure in %s on line %d
```

### Changelog

### Notes

Note: It is possible to use func_num_args(), func_get_arg(), and func_get_args() from within a closure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/functions.anonymous.php
