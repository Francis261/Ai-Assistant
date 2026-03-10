# Accessing npm using two-factor authentication

Source: https://devdocs.io/npm/accessing-npm-using-2fa

## Sign in from the command line using security-key flow

1. On the command line, type the npm login command.
2. When prompted, provide your username, password, and email address. 
user@host:~$ npm login
npm notice Log in on https://registry.npmjs.org/
Username: mona
Password:
Email: (this IS public) mona@github.com
npm notice Open https://www.npmjs.com/login/913c3ab1-89a0-44bd-be8d-d946e2e906f0 to use your security key for authentication or enter OTP from your authenticator app
3. If you have configured a security-key, open the provided URL shown in the command line. Alternatively, if you have configured a mobile authenticator skip to step 6.
4. Click on Use security key and follow the browser specific steps to authenticate.
5. Copy the generated token
6. Enter the one-time password into the CLI prompt.

On the command line, type the npm login command.

When prompted, provide your username, password, and email address.

```
user@host:~$ npm login
npm notice Log in on https://registry.npmjs.org/
Username: mona
Password:
Email: (this IS public) mona@github.com
npm notice Open https://www.npmjs.com/login/913c3ab1-89a0-44bd-be8d-d946e2e906f0 to use your security key for authentication or enter OTP from your authenticator app
```

If you have configured a security-key, open the provided URL shown in the command line. Alternatively, if you have configured a mobile authenticator skip to step 6.

Click on Use security key and follow the browser specific steps to authenticate.

Copy the generated token

Enter the one-time password into the CLI prompt.

## Sign in from the command line using --auth-type=web

npm 8.14.0 and higher support login flow through the browsers. This will become the default behavior for the npm public registry in npm 9.

### With an existing browser session

1. On the command line, type the npm login --auth-type=web command.
2. When prompted hit "ENTER" to open your browser to start the login flow or click the provided URL show in the command line. 
user@host:~$ npm login
npm notice Log in on https://registry.npmjs.org/
Authenticate your account at:
https://www.npmjs.com/login?next=/login/cli/b1a2f96a-ce09-4463-954c-c99f6773b922
Press ENTER to open in the browser...
3. Click on Use security key and follow the browser specific steps to authenticate. Note: If you have configured to use TOTP, you will see an TOTP prompt instead

On the command line, type the npm login --auth-type=web command.

When prompted hit "ENTER" to open your browser to start the login flow or click the provided URL show in the command line.

```
user@host:~$ npm login
npm notice Log in on https://registry.npmjs.org/
Authenticate your account at:
https://www.npmjs.com/login?next=/login/cli/b1a2f96a-ce09-4463-954c-c99f6773b922
Press ENTER to open in the browser...
```

Click on Use security key and follow the browser specific steps to authenticate.

Note: If you have configured to use TOTP, you will see an TOTP prompt instead

### Without an existing browser session

1. On the command line, type the npm login --auth-type=web command.
2. When prompted hit "ENTER" to open your browser to start the login flow or click the provided URL show in the command line. 
user@host:~$ npm login
npm notice Log in on https://registry.npmjs.org/
Authenticate your account at:
https://www.npmjs.com/login?next=/login/cli/b1a2f96a-ce09-4463-954c-c99f6773b922
Press ENTER to open in the browser...
3. On the npm "Sign In" page, enter your account details and click Sign In.
4. Click on Use security key and follow the browser specific steps to authenticate. Note: If you have configured to use TOTP, you will see an TOTP prompt instead

On the command line, type the npm login --auth-type=web command.

When prompted hit "ENTER" to open your browser to start the login flow or click the provided URL show in the command line.

```
user@host:~$ npm login
npm notice Log in on https://registry.npmjs.org/
Authenticate your account at:
https://www.npmjs.com/login?next=/login/cli/b1a2f96a-ce09-4463-954c-c99f6773b922
Press ENTER to open in the browser...
```

Click on Use security key and follow the browser specific steps to authenticate.

Note: If you have configured to use TOTP, you will see an TOTP prompt instead

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/accessing-npm-using-2fa
