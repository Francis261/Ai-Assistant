# Changelog

Source: https://devdocs.io/npm/cli/v10/using-npm/changelog

## 10.2.5 (2023-12-06)

### Bug Fixes

- c7a592c #7061 dont use cache for update notifier manifest request (@lukekarrys)
- 7b952f6 #7049 unpublish: bubble up all errors parsing local package.json (#7049) (@wraithgar)
- be4741f #7039 unpublish bugfixes (#7039) (@wraithgar)
- bc7f53d #7036 reverse direction of SPDX SBOM dependency rels (#7036) (@bdehamer, @antonbauhofer)
- 11ec231 #7033 skip creation of log directory if logs-max is set to 0 (#7033) (@JJ)
- 6267f54 #7005 properly catch missing url opener error on interactive prompt (#7005) (@wraithgar)

### Dependencies

- ff1204a #7058 lru-cache@10.1.0
- c648020 #7058 json-parse-even-better-errors@3.0.1
- 53aa8f2 #7058 pacote@17.0.5
- 2e5331c #7058 npm-packlist@8.0.1
- 937b7b7 #7058 ignore-walk@6.0.4
- 35371c8 #7058 cacache@18.0.1
- workspace: @npmcli/arborist@7.2.2
- workspace: @npmcli/config@8.0.3
- workspace: libnpmaccess@8.0.2
- workspace: libnpmdiff@6.0.4
- workspace: libnpmexec@7.0.5
- workspace: libnpmfund@5.0.2
- workspace: libnpmhook@10.0.1
- workspace: libnpmorg@6.0.2
- workspace: libnpmpack@6.0.4
- workspace: libnpmpublish@9.0.3
- workspace: libnpmsearch@7.0.1
- workspace: libnpmteam@6.0.1
- workspace: libnpmversion@5.0.2

### Chores

- f656b66 #7062 @npmcli/template-oss@4.21.3 (#7062) (@lukekarrys)
- 9754b17 #7051 use global npm for workspace tests (@lukekarrys)
- 3891757 #7051 @npmcli/template-oss@4.21.2 (@lukekarrys)
- 71f70fa #7058 nock@13.4.0 (@wraithgar)
- 43674a4 #7058 tap@16.3.9 (@wraithgar)
- 4ba585c #7040 fix tests for zlib differences between node versions (#7040) (@wraithgar)

## 10.2.4 (2023-11-14)

### Bug Fixes

- cd291e7 #6995 refactor search formatting code (#6995) (@wraithgar)
- f3a7380 #6973 look in workspace for exec commands (#6973) (@wraithgar)
- d11496b #6977 pkg: properly output in workspace mode (#6977) (@wraithgar)
- 0f70088 #6969 correctly handle object licenses in SBOM generation (#6969) (@jamietanna)
- dce3b08 #6951 properly catch missing url opener error (#6951) (@wraithgar)

### Documentation

- a38836c #6616 add path usage for view command (#6616) (@RobinKnipe)
- da18e4f #6987 update npm-prune description (#6987) (@Eomm)

### Dependencies

- e9ec2f7 #6994 lru-cache@10.0.2
- faf9eff #6994 is-core-module@2.13.1
- b00e780 #6994 @sigstore/sign@2.2.0
- 4613774 #6994 hoisting newer deps in favor of older ones
- 54c4f7b #6994 signal-exit@4.1.0
- 8c5882f #6994 strip-ansi@7.1.0
- cd0c649 #6994 ci-info@4.0.0
- a0a58b7 #6994 @sigstore/tuf@2.2.0
- b3a53c6 #6949 is-cidr@5.0.3 (#6949)
- Workspace: @npmcli/config@8.0.2
- Workspace: libnpmexec@7.0.4
- Workspace: libnpmpublish@9.0.2

## 10.2.3 (2023-11-02)

### Dependencies

- b5dedf3 #6958 node-gyp@10.0.1

## 10.2.2 (2023-10-31)

### Bug Fixes

- 8ed6d28 #6910 make npm link respect --no-save (#6910) (@Santoshraj2)
- eacec5f #6941 add back bin/node-gyp-bin/node-gyp files (#6941) (@lukekarrys)
- b776753 #6928 Grammar mistake in authentication error message (#6928) (@Gekuro, gek)

### Documentation

- c422a01 #6924 use markdown links instead of html (@lukekarrys)
- dd03aa0 #6921 add v9 and above for lockfile version 3 (#6921) (@MikeMcC399)

### Dependencies

- dfb6298 #6937 node-gyp@10.0.0 (#6937)
- Workspace: @npmcli/arborist@7.2.1
- Workspace: libnpmdiff@6.0.3
- Workspace: libnpmexec@7.0.3
- Workspace: libnpmfund@5.0.1
- Workspace: libnpmpack@6.0.3
- Workspace: libnpmversion@5.0.1

## 10.2.1 (2023-10-18)

### Bug Fixes

- 35c92fe #6902 Add check to pkg command to deal with empty values (#6902) (@NeonArray)
- 5b6172f #6895 logout from custom registry (@wraithgar)
- 8423d4f #6895 delete auth from proper location on logout (@wraithgar)
- 0cfe9de #6873 audit: spelling error in message (#6873) (@Fdawgs)

### Documentation

- 5142735 #6894 update npm build description (#6894) (@siemhesda)
- 2e4b4ad #6861 npm publish content modification (#6861) (@jpg619)

### Dependencies

- 96e1637 #6915 cmd-shim@6.0.2 (#6915)
- b405da1 #6899 bin-links@4.0.3
- ef69d36 #6895 npm-registry-fetch@16.1.0
- 337c903 #6882 spdx-license-ids@3.0.16
- e6b0be7 #6882 socks-proxy-agent@8.0.2
- ee6892e #6882 readable-stream@4.4.2
- 61c3ee9 #6882 minipass@7.0.4
- 14d31fd #6882 is-core-module@2.13.0
- 03f3d2e #6882 https-proxy-agent@7.0.2
- e0163c6 #6882 are-we-there-yet@4.0.1
- fca804a #6882 ci-info@3.9.0
- 6af582f #6882 npm-install-checks@6.3.0
- Workspace: @npmcli/config@8.0.1

## 10.2.0 (2023-10-02)

### Features

- 7c459d2 #6801 add npm sbom command (#6801) (@bdehamer)
- 81a460f #6732 add package-lock-only mode to npm query (@wraithgar)
- 0d29855 #6732 add no-package-lock mode to npm audit (@wraithgar)

### Bug Fixes

- 2207628 #6823 use strip-ansi module instead of internal regex (#6823) (@wraithgar)
- d46d052 #6798 tolerate null bugs URLs (#6798) (@vladh)
- fb1b674 #6758 deprecate: ignore implicit workspace mode (#6758) (@wraithgar)

### Documentation

- 68031f2 #6844 update CONTRIBUTING.md to prevent errors (#6844) (@darcyclarke)
- 3ac703c #6831 add includeparam to commands that have omit param (#6831) (@siemhesda)
- 03912db #6819 add init-specific params to init docs/help (#6819) (@wraithgar)
- 8088325 #6800 Update npm-doctor.md (#6800) (@siemhesda)

### Dependencies

- aa6728b #6859 tar@6.2.0
- ce9089f #6859 npm-package-arg@11.0.1
- 39d7f04 #6859 minipass@7.0.4
- 0a47af5 #6859 hosted-git-info@7.0.1
- af93130 #6859 glob@10.3.10
- 3ebc474 #6859 @npmcli/query@3.0.1
- 284cbfd #6858 @npmcli/agent@2.2.0
- Workspace: @npmcli/arborist@7.2.0
- Workspace: @npmcli/config@8.0.0
- Workspace: libnpmaccess@8.0.1
- Workspace: libnpmdiff@6.0.2
- Workspace: libnpmexec@7.0.2
- Workspace: libnpmfund@5.0.0
- Workspace: libnpmorg@6.0.1
- Workspace: libnpmpack@6.0.2
- Workspace: libnpmpublish@9.0.1

## 10.1.0 (2023-09-08)

### Features

- 1c93c44 #6755 Add --cpu and --os option to override platform specific install (#6755) (@yukukotani)

### Bug Fixes

- 7bf2374 #6762 make $npm_execpath always point to npm (@rotu)

### Documentation

- 09d8e0a #6759 fix versions of node.js in readme (#6759) (@JoaoOtavioS)

### Dependencies

- f76066a #6771 @npmcli/agent@2.1.1
- Workspace: @npmcli/arborist@7.1.0
- Workspace: @npmcli/config@7.2.0
- Workspace: libnpmdiff@6.0.1
- Workspace: libnpmexec@7.0.1
- Workspace: libnpmfund@4.1.1
- Workspace: libnpmpack@6.0.1

## 10.0.0 (2023-08-31)

### Features

- 48a7b07 remove prerelease flags (@lukekarrys)

### Dependencies

- Workspace: @npmcli/arborist@7.0.0
- Workspace: @npmcli/config@7.1.0
- Workspace: libnpmaccess@8.0.0
- Workspace: libnpmdiff@6.0.0
- Workspace: libnpmexec@7.0.0
- Workspace: libnpmfund@4.1.0
- Workspace: libnpmhook@10.0.0
- Workspace: libnpmorg@6.0.0
- Workspace: libnpmpack@6.0.0
- Workspace: libnpmpublish@9.0.0
- Workspace: libnpmsearch@7.0.0
- Workspace: libnpmteam@6.0.0
- Workspace: libnpmversion@5.0.0

## 10.0.0-pre.1 (2023-08-31)

### ⚠️ BREAKING CHANGES

- support for node <=16.13 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed
- support for node 14 has been removed

### Bug Fixes

- b34ee65 #6706 set objectMode for search filter stream (@lukekarrys)
- 6b251b1 #6706 drop node 16.13.x support (@lukekarrys)
- d857c4a #6706 drop node14 support (@lukekarrys)
- 37a99eb #6706 drop node14 support (@lukekarrys)
- ee7292e #6706 drop node14 support (@lukekarrys)
- 8b0e755 #6706 drop node14 support (@lukekarrys)
- 5c8c6cc #6706 drop node14 support (@lukekarrys)
- d431647 #6706 drop node14 support (@lukekarrys)
- b6f2205 #6706 drop node14 support (@lukekarrys)
- 4caedd0 #6706 drop node14 support (@lukekarrys)
- 355bac8 #6706 drop node14 support (@lukekarrys)
- e3a377d #6706 drop node14 support (@lukekarrys)
- f916d33 #6715 allow searching packages with no description (@lukekarrys)

### Documentation

- c736b62 #6686 add missing bugs key in package-json.md (#6686) (@airscripts)
- c1e01d9 #6680 Update package-json.md (#6680) (@p-chan, @ljharb)

### Dependencies

- 5ab3f7e #6706 @npmcli/git@5.0.3
- eb41977 #6706 @npmcli/run-script@7.0.1
- f30c9e3 #6706 @npmcli/git@5.0.2
- f334466 #6706 pacote@17.0.4
- bb63bf9 #6706 @npmcli/run-script@7.0.0
- 75642c6 #6706 @npmcli/promise-spawn@7.0.0
- dbb18f4 #6706 @npmcli/agent@2.1.0
- 812aa6d #6706 sigstore@2.1.0
- 7fab9d3 #6706 @sigstore/tuf@2.1.0
- 12337cc #6706 which@4.0.0
- b1ad3ad #6706 npm-packlist@8.0.0
- 43831d0 #6706 pacote@17.0.3
- 44e8fec #6706 pacote@17.0.2
- 0d2e2c9 #6706 bump sigstore from 1.7.0 to 2.0.0
- dbd5885 #6706 npm-profile@9.0.0
- 2ee0fb3 #6706 npm-registry-fetch@16.0.0
- 81ff4df #6706 pacote@17.0.1
- 2b23d44 #6706 hoist read-package-json@7.0.0
- 325ed05 #6706 hoist normalize-package-data@6.0.0
- c3a1a02 #6706 @npmcli/metavuln-calculator@7.0.0
- f1dd130 #6706 @npmcli/git@5.0.1
- 10792ea #6706 init-package-json@6.0.0
- cac0725 #6706 pacote@17.0.0
- fd8beaf #6706 npm-pick-manifest@9.0.0
- 65f435e #6706 hoist lru-cache@10.0.1
- c784b57 #6706 npm-package-arg@11.0.0
- d6b1790 #6706 normalize-package-data@6.0.0
- 2f03fb9 #6706 make-fetch-happen@13.0.0
- 729e893 #6706 hosted-git-info@7.0.0
- 7af81c7 #6706 cacache@18.0.0
- b0849ab #6706 @npmcli/package-json@5.0.0
- c9587d7 #6706 @npmcli/git@5.0.0
- e28d426 #6706 minipass-fetch@3.0.4
- 61e9b00 #6706 @npmcli/metavuln-calculator@6.0.1
- 2c5542d #6706 minipass@7.0.3
- ede7f5e #6706 glob@10.3.3
- 4c9eb17 #6706 npm-install-checks@6.2.0
- 88ece81 #6706 npm-pick-manifest@8.0.2
- 9117a4f #6706 ssri@10.0.5
- 45f8d6f #6706 make-fetch-happen@12.0.0
- f6f6a18 #6706 fs-minipass@3.0.3
- 5eea975 #6706 cacache@17.1.4
- ca33c98 #6706 @npmcli/metavuln-calculator@6.0.0
- 7be541a #6706 npm-profile@8.0.0
- edbc25a #6706 pacote@16.0.0
- 5d0d859 #6706 npm-registry-fetch@15.0.0
- Workspace: @npmcli/arborist@7.0.0-pre.0
- Workspace: @npmcli/config@7.0.1
- Workspace: libnpmaccess@8.0.0-pre.0
- Workspace: libnpmdiff@6.0.0-pre.0
- Workspace: libnpmexec@7.0.0-pre.0
- Workspace: libnpmfund@4.0.20
- Workspace: libnpmhook@10.0.0-pre.0
- Workspace: libnpmorg@6.0.0-pre.0
- Workspace: libnpmpack@6.0.0-pre.0
- Workspace: libnpmpublish@9.0.0-pre.0
- Workspace: libnpmsearch@7.0.0-pre.0
- Workspace: libnpmteam@6.0.0-pre.0
- Workspace: libnpmversion@5.0.0-pre.0

## 10.0.0-pre.0 (2023-07-26)

### ⚠️ BREAKING CHANGES

- the "ci-name" config has been removed
- npm no longer treats missing scripts as a special case in workspace mode. Use if-present to ignore missing scripts.
- npm now supports node ^18.17.0 || >=20.5.0

### Features

- b6cf113 #6674 set engines and prerelease for npm 10 (#6674) (@lukekarrys)

### Bug Fixes

- e0d3edd #6641 remove "ci-name" config (@wraithgar)
- 0318f44 #6641 remove implicit if-present logic from run-script workspaces (@wraithgar)

### Documentation

- e5338af #6672 remove link to deprecated npm set-script command (#6672) (@emmanuel-ferdman)

### Dependencies

- Workspace: @npmcli/config@7.0.0
- Workspace: libnpmpublish@8.0.0

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/using-npm/changelog
