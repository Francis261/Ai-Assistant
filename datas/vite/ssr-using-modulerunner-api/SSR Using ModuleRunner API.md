# SSR Using ModuleRunner API

Source: https://devdocs.io/vite/changes/ssr-using-modulerunner

Give us feedback at Environment API feedback discussion

server.ssrLoadModule has been replaced by importing from a Module Runner.

Affected scope: Vite Plugin Authors

ModuleRunner was first introduced in v6.0. The deprecation of server.ssrLoadModule is planned for a future major. To identify your usage, set future.removeSsrLoadModule to "warn" in your vite config.

## Motivation

The server.ssrLoadModule(url) only allows importing modules in the ssr environment and can only execute the modules in the same process as the Vite dev server. For apps with custom environments, each is associated with a ModuleRunner that may be running in a separate thread or process. To import modules, we now have moduleRunner.import(url).

## Migration Guide

Check out the Environment API for Frameworks Guide.

server.ssrFixStacktrace and server.ssrRewriteStacktrace does not have to be called when using the Module Runner APIs. The stack traces will be updated unless sourcemapInterceptor is set to false.

© 2019-present, VoidZero Inc. and Vite contributorsLicensed under the MIT License.
 https://vite.dev/changes/ssr-using-modulerunner
