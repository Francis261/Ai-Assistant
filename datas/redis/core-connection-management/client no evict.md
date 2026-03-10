# CLIENT

Source: https://devdocs.io/redis/client-no-evict/index

```
CLIENT NO-EVICT
```

```
CLIENT NO-EVICT <ON | OFF>
```

The CLIENT NO-EVICT command sets the client eviction mode for the current connection.

When turned on and client eviction is configured, the current connection will be excluded from the client eviction process even if we're above the configured client eviction threshold.

When turned off, the current client will be re-included in the pool of potential clients to be evicted (and evicted if needed).

See client eviction for more details.

## Return

Simple string reply: OK.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/client-no-evict/
