# Package coverage

Source: https://devdocs.io/go/runtime/coverage/index

- import "runtime/coverage"
- Overview
- Index

## Overview

Package coverage contains APIs for writing coverage profile data at runtime from long-running and/or server programs that do not terminate via os.Exit.

## Index

- func ClearCounters() error
- func WriteCounters(w io.Writer) error
- func WriteCountersDir(dir string) error
- func WriteMeta(w io.Writer) error
- func WriteMetaDir(dir string) error

### Package files

coverage.go

## func ClearCounters 1.20

```
func ClearCounters() error
```

ClearCounters clears/resets all coverage counter variables in the currently running program. It returns an error if the program in question was not built with the "-cover" flag. Clearing of coverage counters is also not supported for programs not using atomic counter mode (see more detailed comments below for the rationale here).

## func WriteCounters 1.20

```
func WriteCounters(w io.Writer) error
```

WriteCounters writes coverage counter-data content for the currently running program to the writer 'w'. An error will be returned if the operation can't be completed successfully (for example, if the currently running program was not built with "-cover", or if a write fails). The counter data written will be a snapshot taken at the point of the invocation.

## func WriteCountersDir 1.20

```
func WriteCountersDir(dir string) error
```

WriteCountersDir writes a coverage counter-data file for the currently running program to the directory specified in 'dir'. An error will be returned if the operation can't be completed successfully (for example, if the currently running program was not built with "-cover", or if the directory does not exist). The counter data written will be a snapshot taken at the point of the call.

## func WriteMeta 1.20

```
func WriteMeta(w io.Writer) error
```

WriteMeta writes the meta-data content (the payload that would normally be emitted to a meta-data file) for the currently running program to the writer 'w'. An error will be returned if the operation can't be completed successfully (for example, if the currently running program was not built with "-cover", or if a write fails).

## func WriteMetaDir 1.20

```
func WriteMetaDir(dir string) error
```

WriteMetaDir writes a coverage meta-data file for the currently running program to the directory specified in 'dir'. An error will be returned if the operation can't be completed successfully (for example, if the currently running program was not built with "-cover", or if the directory does not exist).

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/runtime/coverage/
