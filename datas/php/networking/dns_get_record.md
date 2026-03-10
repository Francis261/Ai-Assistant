# dns_get_record

Source: https://devdocs.io/php/function.dns-get-record

(PHP 5, PHP 7, PHP 8)

dns_get_record — Fetch DNS Resource Records associated with a hostname

### Description

```
dns_get_record(
 string $hostname,
 int $type = DNS_ANY,
 array &$authoritative_name_servers = null,
 array &$additional_records = null,
 bool $raw = false
): array|false
```

Fetch DNS Resource Records associated with the given hostname.

### Parameters

hostname should be a valid DNS hostname such as "www.example.com". Reverse lookups can be generated using in-addr.arpa notation, but gethostbyaddr() is more suitable for the majority of reverse lookups.

Note:

Per DNS standards, email addresses are given in user.host format (for example: hostmaster.example.com as opposed to hostmaster@example.com), be sure to check this value and modify if necessary before using it with a functions such as mail().

By default, dns_get_record() will search for any resource records associated with hostname. To limit the query, use one of the DNS_* constants.

Passed by reference and, if given, will be populated with Resource Records for the Authoritative Name Servers.

Passed by reference and, if given, will be populated with any Additional Records.

The type will be interpreted as a raw DNS type ID (the DNS_* constants cannot be used). The return value will contain a data key, which needs to be manually parsed.

### Return Values

This function returns an array of associative arrays, or false on failure. Each associative array contains at minimum the following keys:

### Changelog

### Examples

Example #1 Using dns_get_record()

```
<?php
$result = dns_get_record("php.net");
print_r($result);
?>
```

The above example will output something similar to:

```
Array
(
    [0] => Array
        (
            [host] => php.net
            [type] => MX
            [pri] => 5
            [target] => pair2.php.net
            [class] => IN
            [ttl] => 6765
        )

    [1] => Array
        (
            [host] => php.net
            [type] => A
            [ip] => 64.246.30.37
            [class] => IN
            [ttl] => 8125
        )

)
```

Example #2 Using dns_get_record() and DNS_ANY

Since it's very common to want the IP address of a mail server once the MX record has been resolved, dns_get_record() also returns an array in additional_records which contains associate records. authoritative_name_servers is returned as well containing a list of authoritative name servers.

```
<?php
/* Request "ANY" record for php.net,
   and create $authns and $addtl arrays
   containing list of name servers and
   any additional records which go with
   them */
$result = dns_get_record("php.net", DNS_ANY, $authns, $addtl);
echo "Result = ";
print_r($result);
echo "Auth NS = ";
print_r($authns);
echo "Additional = ";
print_r($addtl);
?>
```

The above example will output something similar to:

```
Result = Array
(
    [0] => Array
        (
            [host] => php.net
            [type] => MX
            [pri] => 5
            [target] => pair2.php.net
            [class] => IN
            [ttl] => 6765
        )

    [1] => Array
        (
            [host] => php.net
            [type] => A
            [ip] => 64.246.30.37
            [class] => IN
            [ttl] => 8125
        )

)
Auth NS = Array
(
    [0] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => remote1.easydns.com
            [class] => IN
            [ttl] => 10722
        )

    [1] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => remote2.easydns.com
            [class] => IN
            [ttl] => 10722
        )

    [2] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => ns1.easydns.com
            [class] => IN
            [ttl] => 10722
        )

    [3] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => ns2.easydns.com
            [class] => IN
            [ttl] => 10722
        )

)
Additional = Array
(
    [0] => Array
        (
            [host] => pair2.php.net
            [type] => A
            [ip] => 216.92.131.5
            [class] => IN
            [ttl] => 6766
        )

    [1] => Array
        (
            [host] => remote1.easydns.com
            [type] => A
            [ip] => 64.39.29.212
            [class] => IN
            [ttl] => 100384
        )

    [2] => Array
        (
            [host] => remote2.easydns.com
            [type] => A
            [ip] => 212.100.224.80
            [class] => IN
            [ttl] => 81241
        )

    [3] => Array
        (
            [host] => ns1.easydns.com
            [type] => A
            [ip] => 216.220.40.243
            [class] => IN
            [ttl] => 81241
        )

    [4] => Array
        (
            [host] => ns2.easydns.com
            [type] => A
            [ip] => 216.220.40.244
            [class] => IN
            [ttl] => 81241
        )

)
```

### See Also

- dns_get_mx() - Alias of getmxrr
- dns_check_record() - Alias of checkdnsrr

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dns-get-record.php
