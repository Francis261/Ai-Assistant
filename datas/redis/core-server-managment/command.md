# COMMAND

Source: https://devdocs.io/redis/command/index

```
COMMAND
```

```
COMMAND
```

Return an array with details about every Redis command.

The COMMAND command is introspective. Its reply describes all commands that the server can process. Redis clients can call it to obtain the server's runtime capabilities during the handshake.

COMMAND also has several subcommands. Please refer to its subcommands for further details.

Cluster note: this command is especially beneficial for cluster-aware clients. Such clients must identify the names of keys in commands to route requests to the correct shard. Although most commands accept a single key as their first argument, there are many exceptions to this rule. You can call COMMAND and then keep the mapping between commands and their respective key specification rules cached in the client.

The reply it returns is an array with an element per command. Each element that describes a Redis command is represented as an array by itself.

The command's array consists of a fixed number of elements. The exact number of elements in the array depends on the server's version.

1. Name
2. Arity
3. Flags
4. First key
5. Last key
6. Step
7. ACL categories (as of Redis 6.0)
8. Tips (as of Redis 7.0)
9. Key specifications (as of Redis 7.0)
10. Subcommands (as of Redis 7.0)

## Name

This is the command's name in lowercase.

Note: Redis command names are case-insensitive.

## Arity

Arity is the number of arguments a command expects. It follows a simple pattern:

- A positive integer means a fixed number of arguments.
- A negative integer means a minimal number of arguments.

Command arity always includes the command's name itself (and the subcommand when applicable).

Examples:

- GET's arity is 2 since the command only accepts one argument and always has the format GET _key_.
- MGET's arity is -2 since the command accepts at least one argument, but possibly multiple ones: MGET _key1_ [key2] [key3] ....

## Flags

Command flags are an array. It can contain the following simple strings (status reply):

- admin: the command is an administrative command.
- asking: the command is allowed even during hash slot migration. This flag is relevant in Redis Cluster deployments.
- blocking: the command may block the requesting client.
- denyoom: the command is rejected if the server's memory usage is too high (see the maxmemory configuration directive).
- fast: the command operates in constant or log(N) time. This flag is used for monitoring latency with the LATENCY command.
- loading: the command is allowed while the database is loading.
- movablekeys: the first key, last key, and step values don't determine all key positions. Clients need to use COMMAND GETKEYS or key specifications in this case. See below for more details.
- no_auth: executing the command doesn't require authentication.
- no_async_loading: the command is denied during asynchronous loading (that is when a replica uses disk-less SWAPDB SYNC, and allows access to the old dataset).
- no_mandatory_keys: the command may accept key name arguments, but these aren't mandatory.
- no_multi: the command isn't allowed inside the context of a transaction.
- noscript: the command can't be called from scripts or functions.
- pubsub: the command is related to Redis Pub/Sub.
- random: the command returns random results, which is a concern with verbatim script replication. As of Redis 7.0, this flag is a command tip.
- readonly: the command doesn't modify data.
- sort_for_script: the command's output is sorted when called from a script.
- skip_monitor: the command is not shown in MONITOR's output.
- skip_slowlog: the command is not shown in SLOWLOG's output. As of Redis 7.0, this flag is a command tip.
- stale: the command is allowed while a replica has stale data.
- write: the command may modify data.

### Movablekeys

Consider SORT:

```
1) 1) "sort"
   2) (integer) -2
   3) 1) write
      2) denyoom
      3) movablekeys
   4) (integer) 1
   5) (integer) 1
   6) (integer) 1
   ...
```

Some Redis commands have no predetermined key locations or are not easy to find. For those commands, the movablekeys flag indicates that the first key, last key, and step values are insufficient to find all the keys.

Here are several examples of commands that have the movablekeys flag:

- SORT: the optional STORE, BY, and GET modifiers are followed by names of keys.
- ZUNION: the numkeys argument specifies the number key name arguments.
- MIGRATE: the keys appear KEYS keyword and only when the second argument is the empty string.

Redis Cluster clients need to use other measures, as follows, to locate the keys for such commands.

You can use the COMMAND GETKEYS command and have your Redis server report all keys of a given command's invocation.

As of Redis 7.0, clients can use the key specifications to identify the positions of key names. The only commands that require using COMMAND GETKEYS are SORT and MIGRATE for clients that parse keys' specifications.

For more information, please refer to the key specifications page.

## First key

The position of the command's first key name argument. For most commands, the first key's position is 1. Position 0 is always the command name itself.

## Last key

The position of the command's last key name argument. Redis commands usually accept one, two or multiple number of keys.

Commands that accept a single key have both first key and last key set to 1.

Commands that accept two key name arguments, e.g. BRPOPLPUSH, SMOVE and RENAME, have this value set to the position of their second key.

Multi-key commands that accept an arbitrary number of keys, such as MSET, use the value -1.

## Step

The step, or increment, between the first key and the position of the next key.

Consider the following two examples:

```
1) 1) "mset"
   2) (integer) -3
   3) 1) write
      2) denyoom
   4) (integer) 1
   5) (integer) -1
   6) (integer) 2
   ...
```

```
1) 1) "mget"
   2) (integer) -2
   3) 1) readonly
      2) fast
   4) (integer) 1
   5) (integer) -1
   6) (integer) 1
   ...
```

The step count allows us to find keys' positions. For example MSET: Its syntax is MSET _key1_ _val1_ [key2] [val2] [key3] [val3]..., so the keys are at every other position (step value of 2). Unlike MGET, which uses a step value of 1.

## ACL categories

This is an array of simple strings that are the ACL categories to which the command belongs. Please refer to the Access Control List page for more information.

## Command tips

Helpful information about the command. To be used by clients/proxies.

Please check the Command tips page for more information.

## Key specifications

This is an array consisting of the command's key specifications. Each element in the array is a map describing a method for locating keys in the command's arguments.

For more information please check the key specifications page.

## Subcommands

This is an array containing all of the command's subcommands, if any. Some Redis commands have subcommands (e.g., the REWRITE subcommand of CONFIG). Each element in the array represents one subcommand and follows the same specifications as those of COMMAND's reply.

## Return

Array reply: a nested list of command details.

The order of commands in the array is random.

## Examples

The following is COMMAND's output for the GET command:

```
1)  1) "get"
    2) (integer) 2
    3) 1) readonly
       2) fast
    4) (integer) 1
    5) (integer) 1
    6) (integer) 1
    7) 1) @read
       2) @string
       3) @fast
    8) (empty array)
    9) 1) 1) "flags"
          2) 1) read
          3) "begin_search"
          4) 1) "type"
             2) "index"
             3) "spec"
             4) 1) "index"
                2) (integer) 1
          5) "find_keys"
          6) 1) "type"
             2) "range"
             3) "spec"
             4) 1) "lastkey"
                2) (integer) 0
                3) "keystep"
                4) (integer) 1
                5) "limit"
                6) (integer) 0
   10) (empty array)
...
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/command/
