# ssh2_poll

Source: https://devdocs.io/php/function.ssh2-poll

(PECL ssh2 >= 0.9.0)

ssh2_poll — Poll the channels/listeners/streams for events

### Description

```
ssh2_poll(array &$desc, int $timeout = 30): int
```

Polls the channels/listeners/streams for events, and returns the number of descriptors which returned non-zero revents.

This function is currently not documented; only its argument list is available.

### Parameters

An indexed array of subarrays with the keys 'resource' and 'events'. The value of the resource is a (channel) stream or an SSH2 Listener resource. The value of the event are SSH2_POLL* flags bitwise ORed together. Each subarray will be populated with an 'revents' element on return, whose values are SSH2_POLL* flags bitwise ORed together of the events that occurred.

The timeout in seconds.

### Return Values

Returns the number of descriptors which returned non-zero revents.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-poll.php
