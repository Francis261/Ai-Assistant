# InfrastructureLogging

Source: https://devdocs.io/webpack~5/configuration/infrastructurelogging#infrastructureloggingdebug

Options for infrastructure level logging.

## infrastructureLogging.appendOnly

boolean

Append lines to the output instead of updating existing output, useful for status messages. This option is used only when no custom console is provided.

webpack.config.js

```
module.exports = {
  //...
  infrastructureLogging: {
    appendOnly: true,
    level: 'verbose',
  },
  plugins: [
    (compiler) => {
      const logger = compiler.getInfrastructureLogger('MyPlugin');
      logger.status('first output'); // this line won't be overridden with `appendOnly` enabled
      logger.status('second output');
    },
  ],
};
```

## infrastructureLogging.colors

boolean

Enable colorful output for infrastructure level logging. This option is used only when no custom console is provided.

webpack.config.js

```
module.exports = {
  //...
  infrastructureLogging: {
    colors: true,
    level: 'verbose',
  },
  plugins: [
    (compiler) => {
      const logger = compiler.getInfrastructureLogger('MyPlugin');
      logger.log('this output will be colorful');
    },
  ],
};
```

## infrastructureLogging.console

Console

Customize the console used for infrastructure level logging.

webpack.config.js

```
module.exports = {
  //...
  infrastructureLogging: {
    console: yourCustomConsole(),
  },
};
```

## infrastructureLogging.debug

string boolean = false RegExp function(name) => boolean [string, RegExp, function(name) => boolean]

Enable debug information of specified loggers such as plugins or loaders. Similar to stats.loggingDebug option but for infrastructure. Defaults to false.

webpack.config.js

```
module.exports = {
  //...
  infrastructureLogging: {
    level: 'info',
    debug: ['MyPlugin', /MyPlugin/, (name) => name.contains('MyPlugin')],
  },
};
```

## infrastructureLogging.level

string = 'info' : 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose'

Enable infrastructure logging output. Similar to stats.logging option but for infrastructure. Defaults to 'info'.

Possible values:

- 'none' - disable logging
- 'error' - errors only
- 'warn' - errors and warnings only
- 'info' - errors, warnings, and info messages
- 'log' - errors, warnings, info messages, log messages, groups, clears. Collapsed groups are displayed in a collapsed state.
- 'verbose' - log everything except debug and trace. Collapsed groups are displayed in expanded state.

webpack.config.js

```
module.exports = {
  //...
  infrastructureLogging: {
    level: 'info',
  },
};
```

## infrastructureLogging.stream

NodeJS.WritableStream = process.stderr

Stream used for logging output. Defaults to process.stderr. This option is used only when no custom console is provided.

webpack.config.js

```
module.exports = {
  //...
  infrastructureLogging: {
    stream: process.stderr,
  },
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/infrastructureLogging
