# Exceptions

Source: https://devdocs.io/php/language.exceptions

## Table of Contents

- Extending Exceptions

PHP has an exception model similar to that of other programming languages. An exception can be thrown, and caught ("catched") within PHP. Code may be surrounded in a try block, to facilitate the catching of potential exceptions. Each try must have at least one corresponding catch or finally block.

If an exception is thrown and its current function scope has no catch block, the exception will "bubble up" the call stack to the calling function until it finds a matching catch block. All finally blocks it encounters along the way will be executed. If the call stack is unwound all the way to the global scope without encountering a matching catch block, the program will terminate with a fatal error unless a global exception handler has been set.

The thrown object must be an instanceof Throwable. Trying to throw an object that is not will result in a PHP Fatal Error.

As of PHP 8.0.0, the throw keyword is an expression and may be used in any expression context. In prior versions it was a statement and was required to be on its own line.

## catch

A catch block defines how to respond to a thrown exception. A catch block defines one or more types of exception or error it can handle, and optionally a variable to which to assign the exception. (The variable was required prior to PHP 8.0.0.) The first catch block a thrown exception or error encounters that matches the type of the thrown object will handle the object.

Multiple catch blocks can be used to catch different classes of exceptions. Normal execution (when no exception is thrown within the try block) will continue after that last catch block defined in sequence. Exceptions can be thrown (or re-thrown) within a catch block. If not, execution will continue after the catch block that was triggered.

When an exception is thrown, code following the statement will not be executed, and PHP will attempt to find the first matching catch block. If an exception is not caught, a PHP Fatal Error will be issued with an "Uncaught Exception ..." message, unless a handler has been defined with set_exception_handler().

As of PHP 7.1.0, a catch block may specify multiple exceptions using the pipe (|) character. This is useful for when different exceptions from different class hierarchies are handled the same.

As of PHP 8.0.0, the variable name for a caught exception is optional. If not specified, the catch block will still execute but will not have access to the thrown object.

## finally

A finally block may also be specified after or instead of catch blocks. Code within the finally block will always be executed after the try and catch blocks, regardless of whether an exception has been thrown, and before normal execution resumes.

One notable interaction is between the finally block and a return statement. If a return statement is encountered inside either the try or the catch blocks, the finally block will still be executed. Moreover, the return statement is evaluated when encountered, but the result will be returned after the finally block is executed. Additionally, if the finally block also contains a return statement, the value from the finally block is returned.

Another notable interaction is between an exception thrown from within a try block, and an exception thrown from within a finally block. If both blocks throw an exception, then the exception thrown from the finally block will be the one that is propagated, and the exception thrown from the try block will be used as its previous exception.

## Global exception handler

If an exception is allowed to bubble up to the global scope, it may be caught by a global exception handler if set. The set_exception_handler() function can set a function that will be called in place of a catch block if no other block is invoked. The effect is essentially the same as if the entire program were wrapped in a try-catch block with that function as the catch.

## Notes

Note:

Internal PHP functions mainly use Error reporting, only modern Object-oriented extensions use exceptions. However, errors can be easily translated to exceptions with ErrorException. This technique only works with non-fatal errors, however.

Example #1 Converting error reporting to exceptions

```
<?php
function exceptions_error_handler($severity, $message, $filename, $lineno) {
    throw new ErrorException($message, 0, $severity, $filename, $lineno);
}

set_error_handler('exceptions_error_handler');
?>
```

The Standard PHP Library (SPL) provides a good number of built-in exceptions.

## Examples

Example #2 Throwing an Exception

```
<?php
function inverse($x) {
    if (!$x) {
        throw new Exception('Division by zero.');
    }
    return 1/$x;
}

try {
    echo inverse(5) . "\n";
    echo inverse(0) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

// Continue execution
echo "Hello World\n";
?>
```

The above example will output:

```
0.2
Caught exception: Division by zero.
Hello World
```

Example #3 Exception handling with a finally block

```
<?php
function inverse($x) {
    if (!$x) {
        throw new Exception('Division by zero.');
    }
    return 1/$x;
}

try {
    echo inverse(5) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    echo "First finally.\n";
}

try {
    echo inverse(0) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    echo "Second finally.\n";
}

// Continue execution
echo "Hello World\n";
?>
```

The above example will output:

```
0.2
First finally.
Caught exception: Division by zero.
Second finally.
Hello World
```

Example #4 Interaction between the finally block and return

```
<?php

function test() {
    try {
        throw new Exception('foo');
    } catch (Exception $e) {
        return 'catch';
    } finally {
        return 'finally';
    }
}

echo test();
?>
```

The above example will output:

```
finally
```

Example #5 Nested Exception

```
<?php

class MyException extends Exception { }

class Test {
    public function testing() {
        try {
            try {
                throw new MyException('foo!');
            } catch (MyException $e) {
                // rethrow it
                throw $e;
            }
        } catch (Exception $e) {
            var_dump($e->getMessage());
        }
    }
}

$foo = new Test;
$foo->testing();

?>
```

The above example will output:

```
string(4) "foo!"
```

Example #6 Multi catch exception handling

```
<?php

class MyException extends Exception { }

class MyOtherException extends Exception { }

class Test {
    public function testing() {
        try {
            throw new MyException();
        } catch (MyException | MyOtherException $e) {
            var_dump(get_class($e));
        }
    }
}

$foo = new Test;
$foo->testing();

?>
```

The above example will output:

```
string(11) "MyException"
```

Example #7 Omitting the caught variable

Only permitted in PHP 8.0.0 and later.

```
<?php

class SpecificException extends Exception {}

function test() {
    throw new SpecificException('Oopsie');
}

try {
    test();
} catch (SpecificException) {
    print "A SpecificException was thrown, but we don't care about the details.";
}
?>
```

The above example will output:

```
A SpecificException was thrown, but we don't care about the details.
```

Example #8 Throw as an expression

Only permitted in PHP 8.0.0 and later.

```
<?php

function test() {
    do_something_risky() or throw new Exception('It did not work');
}

function do_something_risky() {
    return false; // Simulate failure
}

try {
    test();
} catch (Exception $e) {
    print $e->getMessage();
}
?>
```

The above example will output:

```
It did not work
```

Example #9 Exception in try and in finally

```
<?php

try {
    try {
        throw new Exception(message: 'Third', previous: new Exception('Fourth'));
    } finally {
        throw new Exception(message: 'First', previous: new Exception('Second'));
    }
} catch (Exception $e) {
    var_dump(
        $e->getMessage(),
        $e->getPrevious()->getMessage(),
        $e->getPrevious()->getPrevious()->getMessage(),
        $e->getPrevious()->getPrevious()->getPrevious()->getMessage(),
    );
}
```

The above example will output:

```
string(5) "First"
string(6) "Second"
string(5) "Third"
string(6) "Fourth"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.exceptions.php
