# Package constraint

Source: https://devdocs.io/go/go/build/constraint/index

- import "go/build/constraint"
- Overview
- Index

## Overview

Package constraint implements parsing and evaluation of build constraint lines. See https://golang.org/cmd/go/#hdr-Build_constraints for documentation about build constraints themselves.

This package parses both the original “// +build” syntax and the “//go:build” syntax that was added in Go 1.17. See https://golang.org/design/draft-gobuild for details about the “//go:build” syntax.

## Index

- func GoVersion(x Expr) string
- func IsGoBuild(line string) bool
- func IsPlusBuild(line string) bool
- func PlusBuildLines(x Expr) ([]string, error)
- type AndExpr
- func (x *AndExpr) Eval(ok func(tag string) bool) bool
- func (x *AndExpr) String() string
- type Expr
- func Parse(line string) (Expr, error)
- type NotExpr
- func (x *NotExpr) Eval(ok func(tag string) bool) bool
- func (x *NotExpr) String() string
- type OrExpr
- func (x *OrExpr) Eval(ok func(tag string) bool) bool
- func (x *OrExpr) String() string
- type SyntaxError
- func (e *SyntaxError) Error() string
- type TagExpr
- func (x *TagExpr) Eval(ok func(tag string) bool) bool
- func (x *TagExpr) String() string

### Package files

expr.go vers.go

## func GoVersion 1.21

```
func GoVersion(x Expr) string
```

GoVersion returns the minimum Go version implied by a given build expression. If the expression can be satisfied without any Go version tags, GoVersion returns an empty string.

For example:

```
GoVersion(linux && go1.22) = "go1.22"
GoVersion((linux && go1.22) || (windows && go1.20)) = "go1.20" => go1.20
GoVersion(linux) = ""
GoVersion(linux || (windows && go1.22)) = ""
GoVersion(!go1.22) = ""
```

GoVersion assumes that any tag or negated tag may independently be true, so that its analysis can be purely structural, without SAT solving. “Impossible” subexpressions may therefore affect the result.

For example:

```
GoVersion((linux && !linux && go1.20) || go1.21) = "go1.20"
```

## func IsGoBuild 1.16

```
func IsGoBuild(line string) bool
```

IsGoBuild reports whether the line of text is a “//go:build” constraint. It only checks the prefix of the text, not that the expression itself parses.

## func IsPlusBuild 1.16

```
func IsPlusBuild(line string) bool
```

IsPlusBuild reports whether the line of text is a “// +build” constraint. It only checks the prefix of the text, not that the expression itself parses.

## func PlusBuildLines 1.16

```
func PlusBuildLines(x Expr) ([]string, error)
```

PlusBuildLines returns a sequence of “// +build” lines that evaluate to the build expression x. If the expression is too complex to convert directly to “// +build” lines, PlusBuildLines returns an error.

## type AndExpr 1.16

An AndExpr represents the expression X && Y.

```
type AndExpr struct {
    X, Y Expr
}
```

### func (*AndExpr) Eval 1.16

```
func (x *AndExpr) Eval(ok func(tag string) bool) bool
```

### func (*AndExpr) String 1.16

```
func (x *AndExpr) String() string
```

## type Expr 1.16

An Expr is a build tag constraint expression. The underlying concrete type is *AndExpr, *OrExpr, *NotExpr, or *TagExpr.

```
type Expr interface {
    // String returns the string form of the expression,
    // using the boolean syntax used in //go:build lines.
    String() string

    // Eval reports whether the expression evaluates to true.
    // It calls ok(tag) as needed to find out whether a given build tag
    // is satisfied by the current build configuration.
    Eval(ok func(tag string) bool) bool
    // contains filtered or unexported methods
}
```

### func Parse 1.16

```
func Parse(line string) (Expr, error)
```

Parse parses a single build constraint line of the form “//go:build ...” or “// +build ...” and returns the corresponding boolean expression.

## type NotExpr 1.16

A NotExpr represents the expression !X (the negation of X).

```
type NotExpr struct {
    X Expr
}
```

### func (*NotExpr) Eval 1.16

```
func (x *NotExpr) Eval(ok func(tag string) bool) bool
```

### func (*NotExpr) String 1.16

```
func (x *NotExpr) String() string
```

## type OrExpr 1.16

An OrExpr represents the expression X || Y.

```
type OrExpr struct {
    X, Y Expr
}
```

### func (*OrExpr) Eval 1.16

```
func (x *OrExpr) Eval(ok func(tag string) bool) bool
```

### func (*OrExpr) String 1.16

```
func (x *OrExpr) String() string
```

## type SyntaxError 1.16

A SyntaxError reports a syntax error in a parsed build expression.

```
type SyntaxError struct {
    Offset int    // byte offset in input where error was detected
    Err    string // description of error
}
```

### func (*SyntaxError) Error 1.16

```
func (e *SyntaxError) Error() string
```

## type TagExpr 1.16

A TagExpr is an Expr for the single tag Tag.

```
type TagExpr struct {
    Tag string // for example, “linux” or “cgo”
}
```

### func (*TagExpr) Eval 1.16

```
func (x *TagExpr) Eval(ok func(tag string) bool) bool
```

### func (*TagExpr) String 1.16

```
func (x *TagExpr) String() string
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/go/build/constraint/
