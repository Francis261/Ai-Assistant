# ftp_site

Source: https://devdocs.io/php/function.ftp-site

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_site — Sends a SITE command to the server

### Description

```
ftp_site(FTP\Connection $ftp, string $command): bool
```

ftp_site() sends the given SITE command to the FTP server.

SITE commands are not standardized, and vary from server to server. They are useful for handling such things as file permissions and group membership.

### Parameters

An FTP\Connection instance.

The SITE command. Note that this parameter isn't escaped so there may be some issues with filenames containing spaces and other characters.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Sending a SITE command to an ftp server

```
<?php
// Connect to FTP server
$ftp = ftp_connect('ftp.example.com');
if (!$ftp) die('Unable to connect to ftp.example.com');

// Login as "user" with password "pass"
if (!ftp_login($ftp, 'user', 'pass')) die('Error logging into ftp.example.com');

// Issue: "SITE CHMOD 0600 /home/user/privatefile" command to ftp server
if (ftp_site($ftp, 'CHMOD 0600 /home/user/privatefile')) {
   echo "Command executed successfully.\n";
} else {
   die('Command failed.');
}
?>
```

### See Also

- ftp_raw() - Sends an arbitrary command to an FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-site.php
