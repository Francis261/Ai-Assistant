# imap_rfc822_write_address

Source: https://devdocs.io/php/function.imap-rfc822-write-address

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_rfc822_write_address — Returns a properly formatted email address given the mailbox, host, and personal info

### Description

```
imap_rfc822_write_address(string $mailbox, string $hostname, string $personal): string|false
```

Returns a properly formatted email address as defined in » RFC2822 given the needed information.

### Parameters

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

The email host part

The name of the account owner

### Return Values

Returns a string properly formatted email address as defined in » RFC2822, or false on failure.

### Examples

Example #1 imap_rfc822_write_address() example

```
<?php
echo imap_rfc822_write_address("hartmut", "example.com", "Hartmut Holzgraefe");
?>
```

The above example will output:

```
Hartmut Holzgraefe <hartmut@example.com>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-rfc822-write-address.php
