# Package user

Source: https://devdocs.io/go/os/user/index

- import "os/user"
- Overview
- Index

## Overview

Package user allows user account lookups by name or id.

For most Unix systems, this package has two internal implementations of resolving user and group ids to names, and listing supplementary group IDs. One is written in pure Go and parses /etc/passwd and /etc/group. The other is cgo-based and relies on the standard C library (libc) routines such as getpwuid_r, getgrnam_r, and getgrouplist.

When cgo is available, and the required routines are implemented in libc for a particular platform, cgo-based (libc-backed) code is used. This can be overridden by using osusergo build tag, which enforces the pure Go implementation.

## Index

- type Group
- func LookupGroup(name string) (*Group, error)
- func LookupGroupId(gid string) (*Group, error)
- type UnknownGroupError
- func (e UnknownGroupError) Error() string
- type UnknownGroupIdError
- func (e UnknownGroupIdError) Error() string
- type UnknownUserError
- func (e UnknownUserError) Error() string
- type UnknownUserIdError
- func (e UnknownUserIdError) Error() string
- type User
- func Current() (*User, error)
- func Lookup(username string) (*User, error)
- func LookupId(uid string) (*User, error)
- func (u *User) GroupIds() ([]string, error)

### Package files

cgo_listgroups_unix.go cgo_lookup_cgo.go cgo_lookup_unix.go getgrouplist_unix.go lookup.go user.go

## type Group 1.7

Group represents a grouping of users.

On POSIX systems Gid contains a decimal number representing the group ID.

```
type Group struct {
    Gid  string // group ID
    Name string // group name
}
```

### func LookupGroup 1.7

```
func LookupGroup(name string) (*Group, error)
```

LookupGroup looks up a group by name. If the group cannot be found, the returned error is of type UnknownGroupError.

### func LookupGroupId 1.7

```
func LookupGroupId(gid string) (*Group, error)
```

LookupGroupId looks up a group by groupid. If the group cannot be found, the returned error is of type UnknownGroupIdError.

## type UnknownGroupError 1.7

UnknownGroupError is returned by LookupGroup when a group cannot be found.

```
type UnknownGroupError string
```

### func (UnknownGroupError) Error 1.7

```
func (e UnknownGroupError) Error() string
```

## type UnknownGroupIdError 1.7

UnknownGroupIdError is returned by LookupGroupId when a group cannot be found.

```
type UnknownGroupIdError string
```

### func (UnknownGroupIdError) Error 1.7

```
func (e UnknownGroupIdError) Error() string
```

## type UnknownUserError

UnknownUserError is returned by Lookup when a user cannot be found.

```
type UnknownUserError string
```

### func (UnknownUserError) Error

```
func (e UnknownUserError) Error() string
```

## type UnknownUserIdError

UnknownUserIdError is returned by LookupId when a user cannot be found.

```
type UnknownUserIdError int
```

### func (UnknownUserIdError) Error

```
func (e UnknownUserIdError) Error() string
```

## type User

User represents a user account.

```
type User struct {
    // Uid is the user ID.
    // On POSIX systems, this is a decimal number representing the uid.
    // On Windows, this is a security identifier (SID) in a string format.
    // On Plan 9, this is the contents of /dev/user.
    Uid string
    // Gid is the primary group ID.
    // On POSIX systems, this is a decimal number representing the gid.
    // On Windows, this is a SID in a string format.
    // On Plan 9, this is the contents of /dev/user.
    Gid string
    // Username is the login name.
    Username string
    // Name is the user's real or display name.
    // It might be blank.
    // On POSIX systems, this is the first (or only) entry in the GECOS field
    // list.
    // On Windows, this is the user's display name.
    // On Plan 9, this is the contents of /dev/user.
    Name string
    // HomeDir is the path to the user's home directory (if they have one).
    HomeDir string
}
```

### func Current

```
func Current() (*User, error)
```

Current returns the current user.

The first call will cache the current user information. Subsequent calls will return the cached value and will not reflect changes to the current user.

### func Lookup

```
func Lookup(username string) (*User, error)
```

Lookup looks up a user by username. If the user cannot be found, the returned error is of type UnknownUserError.

### func LookupId

```
func LookupId(uid string) (*User, error)
```

LookupId looks up a user by userid. If the user cannot be found, the returned error is of type UnknownUserIdError.

### func (*User) GroupIds 1.7

```
func (u *User) GroupIds() ([]string, error)
```

GroupIds returns the list of group IDs that the user is a member of.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/os/user/
