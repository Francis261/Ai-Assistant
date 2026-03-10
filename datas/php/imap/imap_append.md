# imap_append

Source: https://devdocs.io/php/function.imap-append

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_append — Append a string message to a specified mailbox

### Description

```
imap_append(
 IMAP\Connection $imap,
 string $folder,
 string $message,
 ?string $options = null,
 ?string $internal_date = null
): bool
```

Appends a string message to the specified folder.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

The message to be append, as a string

When talking to the Cyrus IMAP server, you must use "\r\n" as your end-of-line terminator instead of "\n" or the operation will fail

If provided, the options will also be written to the folder

If this parameter is set, it will set the INTERNALDATE on the appended message. The parameter should be a date string that conforms to the rfc2060 specifications for a date_time value.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imap_append() example

```
<?php
$imap = imap_open("{imap.example.org}INBOX.Drafts", "username", "password");

$check = imap_check($imap);
echo "Msg Count before append: ". $check->Nmsgs . "\n";

imap_append($imap, "{imap.example.org}INBOX.Drafts"
                   , "From: me@example.com\r\n"
                   . "To: you@example.com\r\n"
                   . "Subject: test\r\n"
                   . "\r\n"
                   . "this is a test message, please ignore\r\n"
                   );

$check = imap_check($imap);
echo "Msg Count after append : ". $check->Nmsgs . "\n";

imap_close($imap);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-append.php
