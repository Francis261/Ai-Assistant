# Creating a strong password

Source: https://devdocs.io/npm/creating-a-strong-password

Secure your npm account with a strong and unique password using a password manager.

You must choose or generate a password for your npm account that:

- is longer than 10 characters
- does not match or significantly contain your username, e.g. do not use 'username123'
- has not been compromised and known to the Have I Been Pwned breach database

To keep your account secure, we recommend you follow these best practices:

- Use a password manager, such as 1Password, to generate a password more than 16 characters.
- Generate a unique password for npm. If you use your npm password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your npm account.
- Configure two-factor authentication for your account. For more information, see "About two-factor authentication."
- Never share your password, even with a potential collaborator. Each person should use their own personal account on npm. For more information on ways to collaborate, see: "npm organizations".

When you type a password to sign in, create an account, or change your password, npm will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before.

npm only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see HaveIBeenPwned.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/creating-a-strong-password
