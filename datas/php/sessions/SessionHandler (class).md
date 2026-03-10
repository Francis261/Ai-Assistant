# The SessionHandler class

Source: https://devdocs.io/php/class.sessionhandler

## Introduction

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandler is a special class that can be used to expose the current internal PHP session save handler by inheritance. There are seven methods which wrap the seven internal session save handler callbacks (open, close, read, write, destroy, gc and create_sid). By default, this class will wrap whatever internal save handler is set as defined by the session.save_handler configuration directive which is usually files by default. Other internal session save handlers are provided by PHP extensions such as SQLite (as sqlite), Memcache (as memcache), and Memcached (as memcached).

When a plain instance of SessionHandler is set as the save handler using session_set_save_handler() it will wrap the current save handlers. A class extending from SessionHandler allows you to override the methods or intercept or filter them by calls the parent class methods which ultimately wrap the internal PHP session handlers.

This allows you, for example, to intercept the read and write methods to encrypt/decrypt the session data and then pass the result to and from the parent class. Alternatively one might chose to entirely override a method like the garbage collection callback gc.

Because the SessionHandler wraps the current internal save handler methods, the above example of encryption can be applied to any internal save handler without having to know the internals of the handlers.

To use this class, first set the save handler you wish to expose using session.save_handler and then pass an instance of SessionHandler or one extending it to session_set_save_handler().

Please note that the callback methods of this class are designed to be called internally by PHP and are not meant to be called from user-space code. The return values are equally processed internally by PHP. For more information on the session workflow, please refer to session_set_save_handler().

## Class synopsis

```
public close(): bool
```

```
public create_sid(): string
```

```
public destroy(string $id): bool
```

```
public gc(int $max_lifetime): int|false
```

```
public open(string $path, string $name): bool
```

```
public read(string $id): string|false
```

```
public write(string $id, string $data): bool
```

## Notes

This class is designed to expose the current internal PHP session save handler, if you want to write your own custom save handlers, please implement the SessionHandlerInterface interface instead of extending from SessionHandler.

## Examples

Example #1 Using SessionHandler to add encryption to internal PHP save handlers.

```
<?php

 /**
  * decrypt AES 256
  *
  * @param data $edata
  * @param string $password
  * @return decrypted data
  */
function decrypt($edata, $password) {
    $data = base64_decode($edata);
    $salt = substr($data, 0, 16);
    $ct = substr($data, 16);

    $rounds = 3; // depends on key length
    $data00 = $password.$salt;
    $hash = array();
    $hash[0] = hash('sha256', $data00, true);
    $result = $hash[0];
    for ($i = 1; $i < $rounds; $i++) {
        $hash[$i] = hash('sha256', $hash[$i - 1].$data00, true);
        $result .= $hash[$i];
    }
    $key = substr($result, 0, 32);
    $iv  = substr($result, 32,16);

    return openssl_decrypt($ct, 'AES-256-CBC', $key, true, $iv);
  }

/**
 * crypt AES 256
 *
 * @param data $data
 * @param string $password
 * @return base64 encrypted data
 */
function encrypt($data, $password) {
    // Generate a cryptographically secure random salt using random_bytes()
    $salt = random_bytes(16);

    $salted = '';
    $dx = '';
    // Salt the key(32) and iv(16) = 48
    while (strlen($salted) < 48) {
      $dx = hash('sha256', $dx.$password.$salt, true);
      $salted .= $dx;
    }

    $key = substr($salted, 0, 32);
    $iv  = substr($salted, 32,16);

    $encrypted_data = openssl_encrypt($data, 'AES-256-CBC', $key, true, $iv);
    return base64_encode($salt . $encrypted_data);
}

class EncryptedSessionHandler extends SessionHandler
{
    private $key;

    public function __construct($key)
    {
        $this->key = $key;
    }

    public function read($id)
    {
        $data = parent::read($id);

        if (!$data) {
            return "";
        } else {
            return decrypt($data, $this->key);
        }
    }

    public function write($id, $data)
    {
        $data = encrypt($data, $this->key);

        return parent::write($id, $data);
    }
}

// we'll intercept the native 'files' handler, but will equally work
// with other internal native handlers like 'sqlite', 'memcache' or 'memcached'
// which are provided by PHP extensions.
ini_set('session.save_handler', 'files');

$key = 'secret_string';
$handler = new EncryptedSessionHandler($key);
session_set_save_handler($handler, true);
session_start();

// proceed to set and retrieve values by key from $_SESSION
```

Note:

Since this class' methods are designed to be called internally by PHP as part of the normal session workflow, child class calls to parent methods (i.e. the actual internal native handlers) will return false unless the session has actually been started (either automatically, or by explicit session_start()). This is important to consider when writing unit tests where the class methods might be invoked manually.

## Table of Contents

- SessionHandler::close — Close the session
- SessionHandler::create_sid — Return a new session ID
- SessionHandler::destroy — Destroy a session
- SessionHandler::gc — Cleanup old sessions
- SessionHandler::open — Initialize session
- SessionHandler::read — Read session data
- SessionHandler::write — Write session data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sessionhandler.php
