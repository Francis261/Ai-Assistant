# XSLTProcessor::setSecurityPrefs

Source: https://devdocs.io/php/xsltprocessor.setsecurityprefs

(PHP >= 5.4.0, PHP 7, PHP 8)

XSLTProcessor::setSecurityPrefs — Set security preferences

### Description

```
public XSLTProcessor::setSecurityPrefs(int $preferences): int
```

Sets the security preferences.

### Parameters

The new security preferences. The following constants can be ORed: XSL_SECPREF_READ_FILE, XSL_SECPREF_WRITE_FILE, XSL_SECPREF_CREATE_DIRECTORY, XSL_SECPREF_READ_NETWORK, XSL_SECPREF_WRITE_NETWORK. Alternatively, XSL_SECPREF_NONE or XSL_SECPREF_DEFAULT can be passed.

### Return Values

Returns the old security preferences.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.setsecurityprefs.php
