# openlog

Source: https://devdocs.io/php/function.openlog

(PHP 4, PHP 5, PHP 7, PHP 8)

openlog — Open connection to system logger

### Description

```
openlog(string $prefix, int $flags, int $facility): true
```

openlog() opens a connection to the system logger for a program.

The use of openlog() is optional. It will automatically be called by syslog() if necessary, in which case prefix will default to the empty string.

### Parameters

The string prefix is added to each message.

Bitmask of the following constants:

- LOG_CONS
- LOG_NDELAY
- LOG_ODELAY
- LOG_NOWAIT
- LOG_PERROR
- LOG_PID

The facility argument is used to specify what type of program is logging the message. This lets the configuration file specify that messages from different facilities will be handled differently. Must be one of the following constants:

- LOG_AUTH
- LOG_AUTHPRIV
- LOG_CRON
- LOG_DAEMON
- LOG_KERN
- LOG_LOCAL[0-7]
- LOG_LPR
- LOG_MAIL
- LOG_NEWS
- LOG_SYSLOG
- LOG_USER
- LOG_UUCP

Note: This parameter is ignored on Windows.

### Return Values

Always returns true.

### Changelog

### See Also

- syslog() - Generate a system log message
- closelog() - Close connection to system logger

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openlog.php
