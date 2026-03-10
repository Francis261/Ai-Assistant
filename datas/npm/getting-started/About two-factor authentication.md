# About two-factor authentication

Source: https://devdocs.io/npm/about-two-factor-authentication

Two-factor authentication (2FA) protects against unauthorized access to your account by confirming your identity using:

- Something you know (e.g., a password).
- Something you have (e.g., an ID badge or a cryptographic key).
- Something you are (e.g., a fingerprint or other biometric data).

When you enable 2FA, you will be prompted for a second form of authentication before performing certain actions on your account or packages to which you have write access. Depending on your 2FA configuration you will be either prompted to authenticate with a security-key or a time-based one-time password (TOTP).

- The security-key flow allows you to use biometric devices such as Apple Touch ID, Face ID or Windows Hello as well as physical keys such as Yubikey, Thetis or Feitian as your 2FA.
- To configure TOTP you will need to install an authenticator application that can generate OTPs such as Authy, Google Authenticator, or Microsoft Authenticator on your mobile device.

Note: Two-factor authentication provides the best possible security for your account against attackers. We strongly recommend enabling 2FA on your account as soon as possible after you sign up.

## Two-factor authentication on npm

Two-factor authentication on npm can be enabled for authorization and writes, or authorization only.

### Authorization and writes

By default, 2FA is enabled for authorization and writes. We will request a second form of authentication for certain authorized actions, as well as write actions.

### Authorization only

If you enable 2FA for authorization only. We will request a second form of authentication only for certain authorized actions.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/about-two-factor-authentication
