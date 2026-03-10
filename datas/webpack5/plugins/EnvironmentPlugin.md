# EnvironmentPlugin

Source: https://devdocs.io/webpack~5/plugins/environment-plugin

The EnvironmentPlugin is shorthand for using the DefinePlugin on process.env keys.

## Usage

The EnvironmentPlugin accepts either an array of keys or an object mapping its keys to their default values.

```
new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);
```

This is equivalent to the following DefinePlugin application:

```
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
});
```

## Usage with default values

Alternatively, the EnvironmentPlugin supports an object, which maps keys to their default values. The default value for a key is taken if the key is undefined in process.env.

```
new webpack.EnvironmentPlugin({
  NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
  DEBUG: false,
});
```

Example:

Let's investigate the result when running the previous EnvironmentPlugin configuration on a test file entry.js:

```
if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}
if (process.env.DEBUG) {
  console.log('Debugging output');
}
```

When executing NODE_ENV=production webpack in the terminal to build, entry.js becomes this:

```
if ('production' === 'production') {
  // <-- 'production' from NODE_ENV is taken
  console.log('Welcome to production');
}
if (false) {
  // <-- default value is taken
  console.log('Debugging output');
}
```

Running DEBUG=false webpack yields:

```
if ('development' === 'production') {
  // <-- default value is taken
  console.log('Welcome to production');
}
if ('false') {
  // <-- 'false' from DEBUG is taken
  console.log('Debugging output');
}
```

## Use Case: Git Version

The following EnvironmentPlugin configuration provides process.env.GIT_VERSION (such as "v5.4.0-2-g25139f57f") and process.env.GIT_AUTHOR_DATE (such as "2020-11-04T12:25:16+01:00") corresponding to the last Git commit of the repository:

```
const child_process = require('child_process');
function git(command) {
  return child_process.execSync(`git ${command}`, { encoding: 'utf8' }).trim();
}

new webpack.EnvironmentPlugin({
  GIT_VERSION: git('describe --always'),
  GIT_AUTHOR_DATE: git('log -1 --format=%aI'),
});
```

## DotenvPlugin

The third-party DotenvPlugin (dotenv-webpack) allows you to expose (a subset of) dotenv variables:

```
// .env
DB_HOST=127.0.0.1
DB_PASS=foobar
S3_API=mysecretkey
```

```
new Dotenv({
  path: './.env', // Path to .env file (this is the default)
  safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
});
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/environment-plugin
