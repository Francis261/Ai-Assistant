# imagegrabwindow

Source: https://devdocs.io/php/function.imagegrabwindow

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

imagegrabwindow — Captures a window

### Description

```
imagegrabwindow(int $handle, bool $client_area = false): GdImage|false
```

Grabs a window or its client area using a windows handle (HWND property in COM instance)

Note:

This function is only available on Windows.

### Parameters

The HWND window ID.

Include the client area of the application window.

### Return Values

Returns an image object on success, false on failure.

### Errors/Exceptions

E_NOTICE is issued if handle is invalid window handle. E_WARNING is issued if the Windows API is too old.

### Changelog

### Examples

Example #1 imagegrabwindow() example

Capture a window (IE for example)

```
<?php
$browser = new COM("InternetExplorer.Application");
$handle = $browser->HWND;
$browser->Visible = true;
$im = imagegrabwindow($handle);
$browser->Quit();
imagepng($im, "iesnap.png");
?>
```

Capture a window (IE for example) but with its content

```
<?php
$browser = new COM("InternetExplorer.Application");
$handle = $browser->HWND;
$browser->Visible = true;
$browser->Navigate("http://www.libgd.org");

/* Still working? */
while ($browser->Busy) {
    com_message_pump(4000);
}
$im = imagegrabwindow($handle, 0);
$browser->Quit();
imagepng($im, "iesnap.png");
?>
```

### See Also

- imagegrabscreen() - Captures the whole screen

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagegrabwindow.php
