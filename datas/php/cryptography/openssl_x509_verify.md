# openssl_x509_verify

Source: https://devdocs.io/php/function.openssl-x509-verify

(PHP 7 >= 7.4.0, PHP 8)

openssl_x509_verify — Verifies digital signature of x509 certificate against a public key

### Description

```
openssl_x509_verify(OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key): int
```

openssl_x509_verify() verifies that the certificate certificate was signed by the private key corresponding to public key public_key.

### Parameters

See Key/Certificate parameters for a list of valid values.

OpenSSLAsymmetricKey - a key, returned by openssl_get_publickey()

string - a PEM formatted key (e.g. -----BEGIN PUBLIC KEY-----
MIIBCgK...)

### Return Values

Returns 1 if the signature is correct, 0 if it is incorrect, and -1 on error.

### Changelog

### Examples

Example #1 openssl_x509_verify() example

```
<?php
$hostname = "news.php.net";
$ssloptions = array(
    "capture_peer_cert" => true, 
    "capture_peer_cert_chain" => true, 
    "allow_self_signed"=> false, 
    "CN_match" => $hostname,
    "verify_peer" => true,
    "SNI_enabled" => true,
    "SNI_server_name" => $hostname,
);
 
$ctx = stream_context_create( array("ssl" => $ssloptions) );
$result = stream_socket_client("ssl://$hostname:443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $ctx);
$cont = stream_context_get_params($result);
$x509 = $cont["options"]["ssl"]["peer_certificate"];
$certparsed = openssl_x509_parse($x509);

foreach($cont["options"]["ssl"]["peer_certificate_chain"] as $chaincert)
{
    $chainparsed = openssl_x509_parse($chaincert);
    $chain_public_key = openssl_get_publickey($chaincert);
    $r = openssl_x509_verify($x509, $chain_public_key);   
    if ($r==1)
    {
        echo $certparsed['subject']['CN'];
        echo " was digitally signed by ";
        echo $chainparsed['subject']['CN']."\n";
    }
}
?>
```

### See Also

- openssl_verify() - Verify signature
- openssl_get_publickey() - Alias of openssl_pkey_get_public

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-verify.php
