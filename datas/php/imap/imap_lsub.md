# imap_lsub

Source: https://devdocs.io/php/function.imap-lsub

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_lsub — List all the subscribed mailboxes

### Description

```
imap_lsub(IMAP\Connection $imap, string $reference, string $pattern): array|false
```

Gets an array of all the mailboxes that you have subscribed.

### Parameters

An IMAP\Connection instance.

reference should normally be just the server specification as described in imap_open()

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

Specifies where in the mailbox hierarchy to start searching.

There are two special characters you can pass as part of the pattern: '*' and '%'. '*' means to return all mailboxes. If you pass pattern as '*', you will get a list of the entire mailbox hierarchy. '%' means to return the current level only. '%' as the pattern parameter will return only the top level mailboxes; '~/mail/%' on UW_IMAPD will return every mailbox in the ~/mail directory, but none in subfolders of that directory.

### Return Values

Returns an array of all the subscribed mailboxes, or false on failure.

### Changelog

### See Also

- imap_list() - Read the list of mailboxes
- imap_getmailboxes() - Read the list of mailboxes, returning detailed information on each one

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-lsub.php
