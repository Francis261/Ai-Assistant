# imap_listscan

Source: https://devdocs.io/php/function.imap-listscan

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_listscan — Returns the list of mailboxes that matches the given text

### Description

```
imap_listscan(
 IMAP\Connection $imap,
 string $reference,
 string $pattern,
 string $content
): array|false
```

Returns an array containing the names of the mailboxes that have content in the text of the mailbox.

This function is similar to imap_listmailbox(), but it will additionally check for the presence of the string content inside the mailbox data.

### Parameters

An IMAP\Connection instance.

reference should normally be just the server specification as described in imap_open()

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

Specifies where in the mailbox hierarchy to start searching.

There are two special characters you can pass as part of the pattern: '*' and '%'. '*' means to return all mailboxes. If you pass pattern as '*', you will get a list of the entire mailbox hierarchy. '%' means to return the current level only. '%' as the pattern parameter will return only the top level mailboxes; '~/mail/%' on UW_IMAPD will return every mailbox in the ~/mail directory, but none in subfolders of that directory.

The searched string

### Return Values

Returns an array containing the names of the mailboxes that have content in the text of the mailbox, or false on failure.

### Changelog

### See Also

- imap_listmailbox() - Alias of imap_list
- imap_search() - This function returns an array of messages matching the given search criteria

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-listscan.php
