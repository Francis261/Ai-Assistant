# EventDnsBase::__construct

Source: https://devdocs.io/php/eventdnsbase.construct

(PECL event >= 1.2.6-beta)

EventDnsBase::__construct — Constructs EventDnsBase object

### Description

Constructs EventDnsBase object.

### Parameters

Event base.

If initialize is true, it attempts to use the underlying operating system defaults to configure the DNS base senibly. If it is false, the DNS base is left unconfigured, with no nameservers or options set. In the latter case the DNS base should be configured manually, e.g. with EventDnsBase::parseResolvConf().

If initialize is an integer, it must be one of the following flags:

### Errors/Exceptions

If initialize has a type other than int|bool, a TypeError is thrown.

If the value of initialize is invalid, a EventException is thrown.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventdnsbase.construct.php
