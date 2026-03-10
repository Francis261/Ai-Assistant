# imap_mail

Source: https://devdocs.io/php/function.imap-mail

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail — Send an email message

### Description

```
imap_mail(
 string $to,
 string $subject,
 string $message,
 ?string $additional_headers = null,
 ?string $cc = null,
 ?string $bcc = null,
 ?string $return_path = null
): bool
```

This function allows sending of emails with correct handling of Cc and Bcc receivers.

The parameters to, cc and bcc are all strings and are all parsed as » RFC822 address lists.

### Parameters

The receiver

The mail subject

The mail body, see imap_mail_compose()

As string with additional headers to be set on the mail

The receivers specified in bcc will get the mail, but are excluded from the headers.

Use this parameter to specify return path upon mail delivery failure. This is useful when using PHP as a mail client for multiple users.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- mail() - Send mail
- imap_mail_compose() - Create a MIME message based on given envelope and body sections

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-mail.php
