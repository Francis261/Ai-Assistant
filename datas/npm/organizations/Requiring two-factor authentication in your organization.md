# Requiring two-factor authentication in your organization

Source: https://devdocs.io/npm/requiring-two-factor-authentication-in-your-organization

Organization owners can require organization members to enable two-factor authentication for their personal accounts, making it harder for malicious actors to access an organization's packages and settings

## About two-factor authentication for organizations

Two-factor authentication (2FA) is an extra layer of security used when logging into websites or apps. You can require all members in your organization to enable two-factor authentication on npm. For more information about two-factor authentication, see "Configuring two-factor authentication.".

Note:

- When you require use of two-factor authentication for your organization, members who do not use 2FA will be removed from the organization and lose access to its packages. You can add them back to the organization if they enable two-factor authentication.
- An organization owner cannot opt-in to requiring 2FA for an organization if they do not have 2FA enabled on their account.
- If you are the member of an organization that requires 2FA you will not be able to disable 2FA until you leave that organization.

## Prerequisites

Before you can require organization members to use two-factor authentication, you must enable two-factor authentication for your account on npm. For more information, see "Configuring two-factor authentication.".

Before you require use of two-factor authentication, we recommend notifying organization members and asking them to set up 2FA for their accounts. You can see if members already use 2Fa in the organizations members page.

## Requiring two-factor authentication in your organization

1. On the npm "Sign In" page, enter your account details and click Sign In.
2. In the upper right corner of the page, click your profile picture, then click Account.
3. In the left sidebar, click the name of your organization.
4. On the organization settings page, click Members.
5. Click the Enable 2FA Enforcement button.
6. If prompted, read the information about members who will be removed from the organization. Type your organization's name to confirm the change, then click Remove members & require two-factor authentication.
7. If any members are removed from the organization, we recommend sending them an invitation that can reinstate their former privileges and access to your organization. They must enable two-factor authentication before they can accept your invitation.

Click the Enable 2FA Enforcement button.

If prompted, read the information about members who will be removed from the organization. Type your organization's name to confirm the change, then click Remove members & require two-factor authentication.

If any members are removed from the organization, we recommend sending them an invitation that can reinstate their former privileges and access to your organization. They must enable two-factor authentication before they can accept your invitation.

## Helping removed members and outside collaborators rejoin your organization

If any members are removed from the organization when you enable required use of two-factor authentication, they'll receive an email notifying them that they've been removed. They should then enable 2FA for their personal account, and contact an organization owner to request access to your organization.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/requiring-two-factor-authentication-in-your-organization
