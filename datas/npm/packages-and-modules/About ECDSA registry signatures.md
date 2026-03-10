# About ECDSA registry signatures

Source: https://devdocs.io/npm/about-registry-signatures

Packages published to the public npm registry are signed to make it possible to detect if the package content has been tampered with.

Signing and verifying published packages protects against an attacker controlling a registry mirror or proxy where they attempt to intercept and tamper with the package tarball content.

## Migrating from PGP to ECDSA signatures

Note: PGP-based registry signatures were deprecated on April 25th 2023 and replaced by ECDSA registry signatures.

The public npm registry is migrating away from the existing PGP signatures to ECDSA signatures that are more compact and can be verified without extra dependencies in the npm CLI.

Signature verification was previously a multi-step process involving the Keybase CLI, as well as manually retrieving and parsing the signature from the package metadata.

Read more about migrating and verifying signatures using the npm CLI.

## Supporting signatures on third-party registries

The npm CLI supports registry signatures and signing keys provided by any registry if the following conventions are followed:

1. Signatures are provided in the package's packument in each published version within the dist object:

```
"dist":{
  ..omitted..,
  "signatures": [{
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "sig": "a312b9c3cb4a1b693e8ebac5ee1ca9cc01f2661c14391917dcb111517f72370809..."
  }],
```

See this example of a signed package from the public npm registry.

To generate the signature, sign the package name, version and tarball sha integrity: ${package.name}@${package.version}:${package.dist.integrity}.

The current best practice is to use a Key Management System that does the signing operation on a Hardware Security Module (HSM) in order to not directly handle the private key part, which reduces the attack surface.

The keyid must match one of the public signing keys below.

2. Public signing keys are provided at registry-host.tld/-/npm/v1/keys in the following format:

```
{
  "keys": [{
    "expires": null,
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "keytype": "ecdsa-sha2-nistp256",
    "scheme": "ecdsa-sha2-nistp256",
    "key": "{{B64_PUBLIC_KEY}}"
  }]
}
```

Keys response:

- expires: null or a simplified extended ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ
- keydid: sha256 fingerprint of the public key
- keytype: only ecdsa-sha2-nistp256 is currently supported by the npm CLI
- scheme: only ecdsa-sha2-nistp256 is currently supported by the npm CLI
- key: base64 encoded public key

See this example key's response from the public npm registry.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/about-registry-signatures
