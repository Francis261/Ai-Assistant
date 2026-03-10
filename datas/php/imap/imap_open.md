# imap_open

Source: https://devdocs.io/php/function.imap-open

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_open — Open an IMAP stream to a mailbox

### Description

```
imap_open(
 string $mailbox,
 string $user,
 string $password,
 int $flags = 0,
 int $retries = 0,
 array $options = []
): IMAP\Connection|false
```

Opens an IMAP stream to a mailbox.

This function can also be used to open streams to POP3 and NNTP servers, but some functions and features are only available on IMAP servers.

### Parameters

A mailbox name consists of a server and a mailbox path on this server. The special name INBOX stands for the current users personal mailbox. Mailbox names that contain international characters besides those in the printable ASCII space have to be encoded with imap_utf7_encode().

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

The server part, which is enclosed in '{' and '}', consists of the servers name or ip address, an optional port (prefixed by ':'), and an optional protocol specification (prefixed by '/').

The server part is mandatory in all mailbox parameters.

All names which start with { are remote names, and are in the form "{" remote_system_name [":" port] [flags] "}"
 [mailbox_name] where:

- remote_system_name - Internet domain name or bracketed IP address of server.
- port - optional TCP port number, default is the default port for that service
- flags - optional flags, see following table.
- mailbox_name - remote mailbox name, default is INBOX

The user name

The password associated with the user

The flags are a bit mask with one or more of the following:

- OP_READONLY - Open mailbox read-only
- OP_ANONYMOUS - Don't use or update a .newsrc for news (NNTP only)
- OP_HALFOPEN - For IMAP and NNTP names, open a connection but don't open a mailbox.
- CL_EXPUNGE - Expunge mailbox automatically upon mailbox close (see also imap_delete() and imap_expunge())
- OP_DEBUG - Debug protocol negotiations
- OP_SHORTCACHE - Short (elt-only) caching
- OP_SILENT - Don't pass up events (internal use)
- OP_PROTOTYPE - Return driver prototype
- OP_SECURE - Don't do non-secure authentication

Number of maximum connect attempts

Connection parameters, the following (string) keys maybe used to set one or more connection parameters:

- DISABLE_AUTHENTICATOR - Disable authentication properties

### Return Values

Returns an IMAP\Connection instance on success, or false on failure.

### Changelog

### Examples

Example #1 Different use of imap_open()

```
<?php
// To connect to an IMAP server running on port 143 on the local machine,
// do the following:
$mbox = imap_open("{localhost:143}INBOX", "user_id", "password");

// To connect to a POP3 server on port 110 on the local server, use:
$mbox = imap_open ("{localhost:110/pop3}INBOX", "user_id", "password");

// To connect to an SSL IMAP or POP3 server, add /ssl after the protocol
// specification:
$mbox = imap_open ("{localhost:993/imap/ssl}INBOX", "user_id", "password");

// To connect to an SSL IMAP or POP3 server with a self-signed certificate,
// add /ssl/novalidate-cert after the protocol specification:
$mbox = imap_open ("{localhost:995/pop3/ssl/novalidate-cert}", "user_id", "password");

// To connect to an NNTP server on port 119 on the local server, use:
$nntp = imap_open ("{localhost:119/nntp}comp.test", "", "");
// To connect to a remote server replace "localhost" with the name or the
// IP address of the server you want to connect to.
?>
```

Example #2 imap_open() example

```
<?php
$mbox = imap_open("{imap.example.org:143}", "username", "password");

echo "<h1>Mailboxes</h1>\n";
$folders = imap_listmailbox($mbox, "{imap.example.org:143}", "*");

if ($folders == false) {
    echo "Call failed<br />\n";
} else {
    foreach ($folders as $val) {
        echo $val . "<br />\n";
    }
}

echo "<h1>Headers in INBOX</h1>\n";
$headers = imap_headers($mbox);

if ($headers == false) {
    echo "Call failed<br />\n";
} else {
    foreach ($headers as $val) {
        echo $val . "<br />\n";
    }
}

imap_close($mbox);
?>
```

### See Also

- imap_close() - Close an IMAP stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-open.php
