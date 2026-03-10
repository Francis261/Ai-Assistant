# imap_thread

Source: https://devdocs.io/php/function.imap-thread

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imap_thread — Returns a tree of threaded message

### Description

```
imap_thread(IMAP\Connection $imap, int $flags = SE_FREE): array|false
```

Gets a tree of a threaded message.

### Parameters

An IMAP\Connection instance.

### Return Values

imap_thread() returns an associative array containing a tree of messages threaded by REFERENCES, or false on error.

Every message in the current mailbox will be represented by three entries in the resulting array:

- $thread["XX.num"] - current message number
- $thread["XX.next"]
- $thread["XX.branch"]

$thread["XX.num"] - current message number

$thread["XX.next"]

$thread["XX.branch"]

### Changelog

### Examples

Example #1 imap_thread() Example

```
<?php

// Here we're outputting the threads of a newsgroup, in HTML

$nntp = imap_open('{news.example.com:119/nntp}some.newsgroup', '', '');
$threads = imap_thread($nntp);

foreach ($threads as $key => $val) {
  $tree = explode('.', $key);
  if ($tree[1] == 'num') {
    $header = imap_headerinfo($nntp, $val);
    echo "<ul>\n\t<li>" . $header->fromaddress . "\n";
  } elseif ($tree[1] == 'branch') {
    echo "\t</li>\n</ul>\n";
  }
}

imap_close($nntp);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-thread.php
