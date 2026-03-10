# Worker Options

Source: https://devdocs.io/vite~6/config/worker-options#worker-rollupoptions

Unless noted, the options in this section are applied to all dev, build, and preview.

## worker.format

- Type: 'es' | 'iife'
- Default: 'iife'

Output format for worker bundle.

## worker.plugins

- Type: () => (Plugin | Plugin[])[]

Vite plugins that apply to the worker bundles. Note that config.plugins only applies to workers in dev, it should be configured here instead for build. The function should return new plugin instances as they are used in parallel rollup worker builds. As such, modifying config.worker options in the config hook will be ignored.

## worker.rollupOptions

- Type: RollupOptions

Rollup options to build worker bundle.

© 2019–present, Yuxi (Evan) You and Vite contributorsLicensed under the MIT License.
 https://v6.vite.dev/config/worker-options
