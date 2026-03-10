# imap_getsubscribed

Source: https://devdocs.io/php/function.imap-getsubscribed

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_getsubscribed — List all the subscribed mailboxes

### Description

```
imap_getsubscribed(IMAP\Connection $imap, string $reference, string $pattern): array|false
```

Gets information about the subscribed mailboxes.

Identical to imap_getmailboxes(), except that it only returns mailboxes that the user is subscribed to.

### Parameters

An IMAP\Connection instance.

reference should normally be just the server specification as described in imap_open()

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

Specifies where in the mailbox hierarchy to start searching.

There are two special characters you can pass as part of the pattern: '*' and '%'. '*' means to return all mailboxes. If you pass pattern as '*', you will get a list of the entire mailbox hierarchy. '%' means to return the current level only. '%' as the pattern parameter will return only the top level mailboxes; '~/mail/%' on UW_IMAPD will return every mailbox in the ~/mail directory, but none in subfolders of that directory.

### Return Values

Returns an array of objects containing mailbox information. Each object has the attributes name, specifying the full name of the mailbox; delimiter, which is the hierarchy delimiter for the part of the hierarchy this mailbox is in; and attributes. Attributes is a bitmask that can be tested against:

- LATT_NOINFERIORS - This mailbox has no "children" (there are no mailboxes below this one).
- LATT_NOSELECT - This is only a container, not a mailbox - you cannot open it.
- LATT_MARKED - This mailbox is marked. Only used by UW-IMAPD.
- LATT_UNMARKED - This mailbox is not marked. Only used by UW-IMAPD.
- LATT_REFERRAL - This container has a referral to a remote mailbox.
- LATT_HASCHILDREN - This mailbox has selectable inferiors.
- LATT_HASNOCHILDREN - This mailbox has no selectable inferiors.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-getsubscribed.php
