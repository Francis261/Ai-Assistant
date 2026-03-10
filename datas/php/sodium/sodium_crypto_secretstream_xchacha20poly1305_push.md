# sodium_crypto_secretstream_xchacha20poly1305_push

Source: https://devdocs.io/php/function.sodium-crypto-secretstream-xchacha20poly1305-push

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_secretstream_xchacha20poly1305_push — Encrypt a chunk of data so that it can safely be decrypted in a streaming API

### Description

```
sodium_crypto_secretstream_xchacha20poly1305_push(
 string &$state,
 #[\SensitiveParameter] string $message,
 string $additional_data = "",
 int $tag = SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_MESSAGE
): string
```

Encrypt a chunk of data so that it can safely be decrypted in a streaming API.

### Parameters

See sodium_crypto_secretstream_xchacha20poly1305_init_pull() and sodium_crypto_secretstream_xchacha20poly1305_init_push()

Optional. Can be used to assert decryption behavior (i.e. re-keying or indicating the final chunk in a stream).

- SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_MESSAGE: the most common tag, that doesn't add any information about the nature of the message.
- SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_FINAL: indicates that the message marks the end of the stream, and erases the secret key used to encrypt the previous sequence.
- SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_PUSH: indicates that the message marks the end of a set of messages, but not the end of the stream. For example, a huge JSON string sent as multiple chunks can use this tag to indicate to the application that the string is complete and that it can be decoded. But the stream itself is not closed, and more data may follow.
- SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_REKEY: "forget" the key used to encrypt this message and the previous ones, and derive a new secret key.

### Return Values

Returns the encrypted ciphertext.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-secretstream-xchacha20poly1305-push.php
