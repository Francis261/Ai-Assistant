# About the developers team

Source: https://devdocs.io/npm/about-developers-team

The "developers" team is automatically created when you create an organization. By default, the developers team has read/write access to all new packages created under the organization's scope.

- Members added to the organization, including the organization owner, are automatically added to the developers team
- The maintainers field in the package.json of any newly created packages under the organization scope is automatically populated with the members of the current developers team

If you create a new package under your organization's scope and you do not want members of the developers team to have read/write access to that package, an owner or admin can remove the developers team's access to that package. For more information, see "Managing team access to organization packages".

If an owner adds a new member to an organization and does not want that member to be on the developers team, an owner can remove them.

Note: The developers team can no longer be removed from an organization for the following reasons:

- It is the source of truth for all users, packages, and default permissions in an organization.
- When you want to restrict write access, it is almost always better to set the default permissions to read-only and create separate teams for managing write permissions.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/about-developers-team
