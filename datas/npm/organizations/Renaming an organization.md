# Renaming an organization

Source: https://devdocs.io/npm/renaming-an-organization

Organizations cannot be renamed from the website or command line interface.

To rename an organization, as an organization owner, you must manually migrate your existing organization members, teams, and packages to a new organization, then contact npm Support to have the outdated packages unpublished and the previous organization deleted.

1. Create a new organization with the name you want. If your old organization is on a paid plan, you must choose a paid plan for the new organization.
2. Add the members of your old organization to your new organization.
3. In your new organization, create teams to match teams in your old organization.
4. Republish packages to the new organization by updating the package scope in its package.json file to match the new organization name and running npm publish.
5. In the new organization teams, configure package access to match team package access in your old organization.
6. Contact npm Support to have the outdated packages unpublished and the previous organization deleted.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/renaming-an-organization
