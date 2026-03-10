# EventDnsBase::parseResolvConf

Source: https://devdocs.io/php/eventdnsbase.parseresolvconf

(PECL event >= 1.2.6-beta)

EventDnsBase::parseResolvConf — Scans the resolv.conf-formatted file

### Description

```
public EventDnsBase::parseResolvConf( int $flags ,  string $filename ): bool
```

Scans the resolv.conf-formatted file stored in filename, and read in all the options from it that are listed in flags

### Parameters

Determines what information is parsed from the resolv.conf file. See the man page for resolv.conf for the format of this file.

The following directives are not parsed from the file: sortlist, rotate, no-check-names, inet6, debug.

If this function encounters an error, the possible return values are:

- 1 = failed to open file
- 2 = failed to stat file
- 3 = file too large
- 4 = out of memory
- 5 = short read from file
- 6 = no nameservers listed in the file

Path to resolv.conf file.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventdnsbase.parseresolvconf.php
