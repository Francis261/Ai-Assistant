# imap_mail_compose

Source: https://devdocs.io/php/function.imap-mail-compose

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail_compose — Create a MIME message based on given envelope and body sections

### Description

```
imap_mail_compose(array $envelope, array $bodies): string|false
```

Create a MIME message based on the given envelope and bodies sections.

### Parameters

An associative array of header fields. Valid keys are: "remail", "return_path", "date", "from", "reply_to", "in_reply_to", "subject", "to", "cc", "bcc" and "message_id", which set the respective message headers to the given string. To set additional headers, the key "custom_headers" is supported, which expects an array of those headers, e.g. ["User-Agent: My Mail Client"].

An indexed array of bodies. The first body is the main body of the message; only if it has a type of TYPEMULTIPART, further bodies are processed; these bodies constitute the bodies of the parts.

### Return Values

Returns the MIME message as string, or false on failure.

### Examples

Example #1 imap_mail_compose() example

```
<?php

$envelope["from"]= "joe@example.com";
$envelope["to"]  = "foo@example.com";
$envelope["cc"]  = "bar@example.com";

$part1["type"] = TYPEMULTIPART;
$part1["subtype"] = "mixed";

$filename = "/tmp/imap.c.gz";
$fp = fopen($filename, "r");
$contents = fread($fp, filesize($filename));
fclose($fp);

$part2["type"] = TYPEAPPLICATION;
$part2["encoding"] = ENCBINARY;
$part2["subtype"] = "octet-stream";
$part2["description"] = basename($filename);
$part2["contents.data"] = $contents;

$part3["type"] = TYPETEXT;
$part3["subtype"] = "plain";
$part3["description"] = "description3";
$part3["contents.data"] = "contents.data3\n\n\n\t";

$body[1] = $part1;
$body[2] = $part2;
$body[3] = $part3;

echo nl2br(imap_mail_compose($envelope, $body));

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-mail-compose.php
