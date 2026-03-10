# DevServer

Source: https://devdocs.io/webpack~5/configuration/dev-server#devserverstatic

webpack-dev-server can be used to quickly develop an application. See the development guide to get started.

This page describes the options that affect the behavior of webpack-dev-server (short: dev-server) version >= 5.0.0. Migration guide from v4 to v5 can be found here.

## devServer

object

This set of options is picked up by webpack-dev-server and can be used to change its behavior in various ways. Here's a rudimentary example that gzips and serves everything from our public/ directory in the project root:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
```

When the server is started, there will be a message prior to the list of resolved modules:

```
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:9000/
<i> [webpack-dev-server] On Your Network (IPv4): http://197.158.164.104:9000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:9000/
<i> [webpack-dev-server] Content not from webpack is served from '/path/to/public' directory
```

that will give some background on where the server is located and what it's serving.

If you're using dev-server through the Node.js API, the options in devServer will be ignored. Pass the options as the first parameter instead: new WebpackDevServer({...}, compiler). See here for an example of how to use webpack-dev-server through the Node.js API.

### Usage via CLI

You can invoke webpack-dev-server via CLI by:

```
npx webpack serve
```

A list of CLI options for serve is available here

### Usage via API

While it's recommended to run webpack-dev-server via the CLI, you may also choose to start a server via the API.

See the related API documentation for webpack-dev-server.

## devServer.app

function

Allows you to use custom server applications, such as connect, fastify, etc. The default application used is express.

webpack.config.js

```
const connect = require('connect');

module.exports = {
  //...
  devServer: {
    app: () => connect(),
  },
};
```

## devServer.allowedHosts

'auto' | 'all' [string]

This option allows you to allowlist services that are allowed to access the dev server.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    allowedHosts: [
      'host.com',
      'subdomain.host.com',
      'subdomain2.host.com',
      'host2.com',
    ],
  },
};
```

Mimicking Django's ALLOWED_HOSTS, a value beginning with . can be used as a subdomain wildcard. .host.com will match host.com, www.host.com, and any other subdomain of host.com.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    // this achieves the same effect as the first example
    // with the bonus of not having to update your config
    // if new subdomains need to access the dev server
    allowedHosts: ['.host.com', 'host2.com'],
  },
};
```

Usage via the CLI:

```
npx webpack serve --allowed-hosts .host.com --allowed-hosts host2.com
```

When set to 'all' this option bypasses host checking. THIS IS NOT RECOMMENDED as apps that do not check the host are vulnerable to DNS rebinding attacks.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    allowedHosts: 'all',
  },
};
```

Usage via the CLI:

```
npx webpack serve --allowed-hosts all
```

When set to 'auto' this option always allows localhost, host, and client.webSocketURL.hostname:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    allowedHosts: 'auto',
  },
};
```

Usage via the CLI:

```
npx webpack serve --allowed-hosts auto
```

## devServer.bonjour

boolean = false object

This option broadcasts the server via ZeroConf networking on start.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    bonjour: true,
  },
};
```

Usage via the CLI:

```
npx webpack serve --bonjour
```

To disable:

```
npx webpack serve --no-bonjour
```

You can also pass custom options to bonjour, for example:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    bonjour: {
      type: 'http',
      protocol: 'udp',
    },
  },
};
```

## devServer.client

### logging

'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'

Allows to set log level in the browser, e.g. before reloading, before an error or when Hot Module Replacement is enabled.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      logging: 'info',
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-logging info
```

### overlay

boolean = true object

Shows a full-screen overlay in the browser when there are compiler errors or warnings.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      overlay: true,
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-overlay
```

To disable:

```
npx webpack serve --no-client-overlay
```

You can provide an object with the following properties for more granular control:

All properties are optional and default to true when not provided.

For example, to disable compilation warnings, you can provide the following configuration:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-overlay-errors --no-client-overlay-warnings --client-overlay-runtime-errors
```

To filter based on the thrown error, you can pass a function that accepts an error parameter and returns a boolean.

For example, to ignore errors thrown by AbortController.abort():

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          if (error instanceof DOMException && error.name === 'AbortError') {
            return false;
          }
          return true;
        },
      },
    },
  },
};
```

### progress

boolean

Prints compilation progress in percentage in the browser.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      progress: true,
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-progress
```

To disable:

```
npx webpack serve --no-client-progress
```

### reconnect

boolean = true number

Tells dev-server the number of times it should try to reconnect the client. When true it will try to reconnect unlimited times.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      reconnect: true,
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-reconnect
```

When set to false it will not try to reconnect.

```
module.exports = {
  //...
  devServer: {
    client: {
      reconnect: false,
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --no-client-reconnect
```

You can also specify the exact number of times the client should try to reconnect.

```
module.exports = {
  //...
  devServer: {
    client: {
      reconnect: 5,
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-reconnect 5
```

### webSocketTransport

'ws' | 'sockjs' string

This option allows us either to choose the current devServer transport mode for clients individually or to provide custom client implementation. This allows specifying how the browser or other client communicates with the devServer.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-web-socket-transport ws --web-socket-server-type ws
```

To create a custom client implementation, create a class that extends BaseClient.

Using path to CustomClient.js, a custom WebSocket client implementation, along with the compatible 'ws' server:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketTransport: require.resolve('./CustomClient'),
    },
    webSocketServer: 'ws',
  },
};
```

Using custom, compatible WebSocket client and server implementations:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketTransport: require.resolve('./CustomClient'),
    },
    webSocketServer: require.resolve('./CustomServer'),
  },
};
```

### webSocketURL

string object

This option allows specifying URL to web socket server (useful when you're proxying dev server and client script does not always know where to connect to).

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --client-web-socket-url ws://0.0.0.0:8080/ws
```

You can also specify an object with the following properties:

- hostname: Tells clients connected to devServer to use the provided hostname.
- pathname: Tells clients connected to devServer to use the provided path to connect.
- password: Tells clients connected to devServer to use the provided password to authenticate.
- port: Tells clients connected to devServer to use the provided port.
- protocol: Tells clients connected to devServer to use the provided protocol.
- username: Tells clients connected to devServer to use the provided username to authenticate.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketURL: {
        hostname: '0.0.0.0',
        pathname: '/ws',
        password: 'dev-server',
        port: 8080,
        protocol: 'ws',
        username: 'webpack',
      },
    },
  },
};
```

## devServer.compress

boolean = true

Enable gzip compression for everything served:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    compress: true,
  },
};
```

Usage via the CLI:

```
npx webpack serve --compress
```

To disable:

```
npx webpack serve --no-compress
```

## devServer.devMiddleware

object

Provide options to webpack-dev-middleware which handles webpack assets.

webpack.config.js

```
module.exports = {
  devServer: {
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/publicPathForDevServe',
      serverSideRender: true,
      writeToDisk: true,
    },
  },
};
```

## devServer.headers

array function object

Adds headers to all responses:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    headers: {
      'X-Custom-Foo': 'bar',
    },
  },
};
```

You can also pass an array:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    headers: [
      {
        key: 'X-Custom',
        value: 'foo',
      },
      {
        key: 'Y-Custom',
        value: 'bar',
      },
    ],
  },
};
```

You can also pass a function:

```
module.exports = {
  //...
  devServer: {
    headers: () => {
      return { 'X-Bar': ['key1=value1', 'key2=value2'] };
    },
  },
};
```

## devServer.historyApiFallback

boolean = false object

When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. Enable devServer.historyApiFallback by setting it to true:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    historyApiFallback: true,
  },
};
```

Usage via the CLI:

```
npx webpack serve --history-api-fallback
```

To disable:

```
npx webpack serve --no-history-api-fallback
```

By providing an object this behavior can be controlled further using options like rewrites:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' },
      ],
    },
  },
};
```

When using dots in your path (common with Angular), you may need to use the disableDotRule:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
```

For more options and information, see the connect-history-api-fallback documentation.

## devServer.host

'local-ip' | 'local-ipv4' | 'local-ipv6' string

Specify a host to use. If you want your server to be accessible externally, specify it like this:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    host: '0.0.0.0',
  },
};
```

Usage via the CLI:

```
npx webpack serve --host 0.0.0.0
```

This also works with IPv6:

```
npx webpack serve --host ::
```

### local-ip

Specifying local-ip as host will try to resolve the host option as your local IPv4 address if available, if IPv4 is not available it will try to resolve your local IPv6 address.

```
npx webpack serve --host local-ip
```

### local-ipv4

Specifying local-ipv4 as host will try to resolve the host option as your local IPv4 address.

```
npx webpack serve --host local-ipv4
```

### local-ipv6

Specifying local-ipv6 as host will try to resolve the host option as your local IPv6 address.

```
npx webpack serve --host local-ipv6
```

## devServer.hot

'only' boolean = true

Enable webpack's Hot Module Replacement feature:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    hot: true,
  },
};
```

Usage via the CLI:

```
npx webpack serve --hot
```

To disable:

```
npx webpack serve --no-hot
```

To enable Hot Module Replacement without page refresh as a fallback in case of build failures, use hot: 'only':

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    hot: 'only',
  },
};
```

Usage via the CLI:

```
npx webpack serve --hot only
```

## devServer.ipc

true string

The Unix socket to listen to (instead of a host).

Setting it to true will listen to a socket at /your-os-temp-dir/webpack-dev-server.sock:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    ipc: true,
  },
};
```

Usage via the CLI:

```
npx webpack serve --ipc
```

You can also listen to a different socket with:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    ipc: path.join(__dirname, 'my-socket.sock'),
  },
};
```

## devServer.liveReload

boolean = true

By default, the dev-server will reload/refresh the page when file changes are detected. devServer.hot option must be disabled or devServer.watchFiles option must be enabled in order for liveReload to take effect. Disable devServer.liveReload by setting it to false:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    liveReload: false,
  },
};
```

Usage via the CLI:

```
npx webpack serve --live-reload
```

To disable:

```
npx webpack serve --no-live-reload
```

## devserver.onListening

function (devServer)

Provides the ability to execute a custom function when webpack-dev-server starts listening for connections on a port.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
  },
};
```

## devServer.open

boolean string object [string, object]

Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    open: true,
  },
};
```

Usage via the CLI:

```
npx webpack serve --open
```

To disable:

```
npx webpack serve --no-open
```

To open a specified page in a browser:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    open: ['/my-page'],
  },
};
```

Usage via the CLI:

```
npx webpack serve --open /my-page
```

To open multiple specified pages in browser:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    open: ['/my-page', '/another-page'],
  },
};
```

Usage via the CLI:

```
npx webpack serve --open /my-page --open /another-page
```

Provide browser name to use instead of the default one:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    open: {
      app: {
        name: 'google-chrome',
      },
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --open-app-name 'google-chrome'
```

The object accepts all open options:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    open: {
      target: ['first.html', 'http://localhost:8080/second.html'],
      app: {
        name: 'google-chrome',
        arguments: ['--incognito', '--new-window'],
      },
    },
  },
};
```

## devServer.port

'auto' string number

Specify a port number to listen for requests on:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    port: 8080,
  },
};
```

Usage via the CLI:

```
npx webpack serve --port 8080
```

port option can't be null or an empty string, to automatically use a free port please use port: 'auto':

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    port: 'auto',
  },
};
```

Usage via the CLI:

```
npx webpack serve --port auto
```

## devServer.proxy

[object, function]

Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

The dev-server makes use of the powerful http-proxy-middleware package. Check out its documentation for more advanced usages. Note that some of http-proxy-middleware's features do not require a target key, e.g. its router feature, but you will still need to include a target key in your configuration here, otherwise webpack-dev-server won't pass it along to http-proxy-middleware.

With a backend on localhost:3000, you can use this to enable proxying:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
  },
};
```

A request to /api/users will now proxy the request to http://localhost:3000/api/users.

If you don't want /api to be passed along, we need to rewrite the path:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    ],
  },
};
```

A backend server running on HTTPS with an invalid certificate will not be accepted by default. If you want to, modify your configuration like this:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        secure: false,
      },
    ],
  },
};
```

Sometimes you don't want to proxy everything. It is possible to bypass the proxy based on the return value of a function.

In the function, you get access to the request, response, and proxy options.

- Return null or undefined to continue processing the request with proxy.
- Return false to produce a 404 error for the request.
- Return a path to serve from, instead of continuing to proxy the request.

E.g. for a browser request, you want to serve an HTML page, but for an API request, you want to proxy it. You could do something like this:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          }
        },
      },
    ],
  },
};
```

If you want to proxy multiple, specific paths to the same target, you can use an array of one or more objects with a context property:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    proxy: [
      {
        context: ['/auth', '/api'],
        target: 'http://localhost:3000',
      },
    ],
  },
};
```

Note that requests to root won't be proxied by default. To enable root proxying, the devMiddleware.index option should be specified as a falsy value:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    devMiddleware: {
      index: false, // specify to enable root proxying
    },
    proxy: [
      {
        context: () => true,
        target: 'http://localhost:1234',
      },
    ],
  },
};
```

The origin of the host header is kept when proxying by default, you can set changeOrigin to true to override this behaviour. It is useful in some cases like using name-based virtual hosted sites.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    ],
  },
};
```

## devServer.server

'http' | 'https' | 'spdy' string object

Allows to set server and options (by default 'http').

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    server: 'http',
  },
};
```

Usage via the CLI:

```
npx webpack serve --server-type http
```

To serve over HTTPS with a self-signed certificate:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    server: 'https',
  },
};
```

Usage via the CLI:

```
npx webpack serve --server-type https
```

To serve over HTTP/2 using spdy with a self-signed certificate:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    server: 'spdy',
  },
};
```

Usage via the CLI:

```
npx webpack serve --server-type spdy
```

Use the object syntax to provide your own certificate:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    server: {
      type: 'https',
      options: {
        ca: './path/to/server.pem',
        pfx: './path/to/server.pfx',
        key: './path/to/server.key',
        cert: './path/to/server.crt',
        passphrase: 'webpack-dev-server',
        requestCert: true,
      },
    },
  },
};
```

Usage via the CLI:

```
npx webpack serve --server-type https --server-options-key ./path/to/server.key --server-options-cert ./path/to/server.crt --server-options-ca ./path/to/ca.pem --server-options-passphrase webpack-dev-server
```

It also allows you to set additional TLS options like minVersion and you can directly pass the contents of respective files:

webpack.config.js

```
const fs = require('fs');
const path = require('path');

module.exports = {
  //...
  devServer: {
    server: {
      type: 'https',
      options: {
        minVersion: 'TLSv1.1',
        key: fs.readFileSync(path.join(__dirname, './server.key')),
        pfx: fs.readFileSync(path.join(__dirname, './server.pfx')),
        cert: fs.readFileSync(path.join(__dirname, './server.crt')),
        ca: fs.readFileSync(path.join(__dirname, './ca.pem')),
        passphrase: 'webpack-dev-server',
        requestCert: true,
      },
    },
  },
};
```

## devServer.setupExitSignals

boolean = true

Allows to close dev server and exit the process on SIGINT and SIGTERM signals.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    setupExitSignals: true,
  },
};
```

## devServer.setupMiddlewares

function (middlewares, devServer)

Provides the ability to execute a custom function and apply custom middleware(s).

webpack.config.js

```
module.exports = {
  // ...
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.get('/setup-middleware/some/path', (_, response) => {
        response.send('setup-middlewares option GET');
      });

      // Use the `unshift` method if you want to run a middleware before all other middlewares
      // or when you are migrating from the `onBeforeSetupMiddleware` option
      middlewares.unshift({
        name: 'first-in-array',
        // `path` is optional
        path: '/foo/path',
        middleware: (req, res) => {
          res.send('Foo!');
        },
      });

      // Use the `push` method if you want to run a middleware after all other middlewares
      // or when you are migrating from the `onAfterSetupMiddleware` option
      middlewares.push({
        name: 'hello-world-test-one',
        // `path` is optional
        path: '/foo/bar',
        middleware: (req, res) => {
          res.send('Foo Bar!');
        },
      });

      middlewares.push((req, res) => {
        res.send('Hello World!');
      });

      return middlewares;
    },
  },
};
```

## devServer.static

boolean string object [string, object]

This option allows configuring options for serving static files from the directory (by default 'public' directory). To disable set it to false:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    static: false,
  },
};
```

Usage via CLI:

```
npx webpack serve --static
```

To disable:

```
npx webpack serve --no-static
```

To watch a single directory:

webpack.config.js

```
module.exports = {
  // ...
  devServer: {
    static: ['assets'],
  },
};
```

Usage via CLI:

```
npx webpack serve --static assets
```

To watch multiple static directories:

webpack.config.js

```
module.exports = {
  // ...
  devServer: {
    static: ['assets', 'css'],
  },
};
```

Usage via CLI:

```
npx webpack serve --static assets --static css
```

### directory

string = path.join(process.cwd(), 'public')

Tell the server where to serve the content from. This is only necessary if you want to serve static files. static.publicPath will be used to determine where the bundles should be served from and takes precedence.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
```

Provide an array of objects in case you have multiple static folders:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'assets'),
      },
      {
        directory: path.join(__dirname, 'css'),
      },
    ],
  },
};
```

### staticOptions

object

It is possible to configure advanced options for serving static files from static.directory. See the Express documentation for the possible options.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    static: {
      staticOptions: {
        redirect: true,
      },
    },
  },
};
```

### publicPath

string = '/' [string]

Tell the server at which URL to serve static.directory content. For example to serve a file assets/manifest.json at /serve-public-path-url/manifest.json, your configurations should be as following:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'assets'),
      publicPath: '/serve-public-path-url',
    },
  },
};
```

Provide an array of objects in case you have multiple static folders:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'assets'),
        publicPath: '/serve-public-path-url',
      },
      {
        directory: path.join(__dirname, 'css'),
        publicPath: '/other-serve-public-path-url',
      },
    ],
  },
};
```

### serveIndex

boolean object = { icons: true }

Tell dev-server to use serveIndex middleware when enabled.

serveIndex middleware generates directory listings on viewing directories that don't have an index.html file.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true,
    },
  },
};
```

Usage via CLI:

```
npx webpack serve --static-serve-index
```

To disable:

```
npx webpack serve --no-static-serve-index
```

### watch

boolean object

Tell dev-server to watch the files served by the static.directory option. It is enabled by default, and file changes will trigger a full page reload. This can be disabled by setting the watch option to false.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      watch: false,
    },
  },
};
```

Usage via CLI:

```
npx webpack serve --static-watch
```

To disable:

```
npx webpack serve --no-static-watch
```

It is possible to configure advanced options for watching static files from static.directory. See the chokidar documentation for the possible options.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      watch: {
        ignored: '*.txt',
        usePolling: false,
      },
    },
  },
};
```

## devServer.watchFiles

string object [string, object]

This option allows you to configure a list of globs/directories/files to watch for file changes. For example:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    watchFiles: ['src/**/*.php', 'public/**/*'],
  },
};
```

It is possible to configure advanced options for watching files. See the chokidar documentation for the possible options.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    watchFiles: {
      paths: ['src/**/*.php', 'public/**/*'],
      options: {
        usePolling: false,
      },
    },
  },
};
```

## devServer.webSocketServer

false | 'sockjs' | 'ws' string function object

This option allows us either to choose the current web-socket server or to provide custom web-socket server implementation.

The current default mode is 'ws'. This mode uses ws as a server, and native WebSockets on the client.

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    webSocketServer: 'ws',
  },
};
```

To create a custom server implementation, create a class that extends BaseServer.

Using path to CustomServer.js, a custom WebSocket server implementation, along with the compatible 'ws' client:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketTransport: 'ws',
    },
    webSocketServer: require.resolve('./CustomServer'),
  },
};
```

Using custom, compatible WebSocket client and server implementations:

webpack.config.js

```
module.exports = {
  //...
  devServer: {
    client: {
      webSocketTransport: require.resolve('./CustomClient'),
    },
    webSocketServer: require.resolve('./CustomServer'),
  },
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/dev-server
