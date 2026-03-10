# Package slogtest

Source: https://devdocs.io/go/testing/slogtest/index

- import "testing/slogtest"
- Overview
- Index
- Examples

## Overview

Package slogtest implements support for testing implementations of log/slog.Handler.

#### Example (Parsing)

This example demonstrates one technique for testing a handler with this package. The handler is given a [bytes.Buffer] to write to, and each line of the resulting output is parsed. For JSON output, [encoding/json.Unmarshal] produces a result in the desired format when given a pointer to a map[string]any.

Code:

```
var buf bytes.Buffer
h := slog.NewJSONHandler(&buf, nil)

results := func() []map[string]any {
    var ms []map[string]any
    for line := range bytes.SplitSeq(buf.Bytes(), []byte{'\n'}) {
        if len(line) == 0 {
            continue
        }
        var m map[string]any
        if err := json.Unmarshal(line, &m); err != nil {
            panic(err) // In a real test, use t.Fatal.
        }
        ms = append(ms, m)
    }
    return ms
}
err := slogtest.TestHandler(h, results)
if err != nil {
    log.Fatal(err)
}
```

## Index

- func Run(t *testing.T, newHandler func(*testing.T) slog.Handler, result func(*testing.T) map[string]any)
- func TestHandler(h slog.Handler, results func() []map[string]any) error

### Examples

### Package files

slogtest.go

## func Run 1.22

```
func Run(t *testing.T, newHandler func(*testing.T) slog.Handler, result func(*testing.T) map[string]any)
```

Run exercises a slog.Handler on the same test cases as TestHandler, but runs each case in a subtest. For each test case, it first calls newHandler to get an instance of the handler under test, then runs the test case, then calls result to get the result. If the test case fails, it calls t.Error.

## func TestHandler 1.21

```
func TestHandler(h slog.Handler, results func() []map[string]any) error
```

TestHandler tests a slog.Handler. If TestHandler finds any misbehaviors, it returns an error for each, combined into a single error with errors.Join.

TestHandler installs the given Handler in a slog.Logger and makes several calls to the Logger's output methods. The Handler should be enabled for levels Info and above.

The results function is invoked after all such calls. It should return a slice of map[string]any, one for each call to a Logger output method. The keys and values of the map should correspond to the keys and values of the Handler's output. Each group in the output should be represented as its own nested map[string]any. The standard keys slog.TimeKey, slog.LevelKey and slog.MessageKey should be used.

If the Handler outputs JSON, then calling encoding/json.Unmarshal with a `map[string]any` will create the right data structure.

If a Handler intentionally drops an attribute that is checked by a test, then the results function should check for its absence and add it to the map it returns.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/testing/slogtest/
