# do...while

Source: https://devdocs.io/javascript/statements/do...while

The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

## Try it

```
let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## Syntax

```
do
  statement
while (condition);
```

A statement that is executed at least once and re-executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements.

An expression evaluated after each pass through the loop. If this condition evaluates to true, statement is re-executed. When condition evaluates to false, execution continues with the statement after the do...while loop.

## Description

Like other looping statements, you can use control flow statements inside statement:

- break stops statement execution and goes to the first statement after the loop.
- continue stops statement execution and re-evaluates condition.

The do...while statement syntax requires a semicolon at the end, but the automatic semicolon insertion process may insert one for you if the lack of a semicolon results in invalid syntax.

## Examples

### Using do...while

In the following example, the do...while loop iterates at least once and reiterates until i is no longer less than 5.

```
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```

### Using false as do...while condition

Because the statement is always executed once, do...while (false) is the same as executing the statement itself. This is a common idiom in C-like languages, which allows you to use break to break out of branching logic early.

```
do {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// The rest of code
```

In JavaScript, there are some alternatives, such as using a labeled block statement with break:

```
handleFriends: {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break handleFriends;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

Or using a function:

```
function handleFriends() {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

### Using an assignment as a condition

In some cases, it can make sense to use an assignment as a condition, such as this:

```
do {
  // …
} while ((match = regexp.exec(str)));
```

But when you do, there are readability tradeoffs. The while documentation has a Using an assignment as a condition section with our recommendations.

## Specifications

## Browser compatibility

## See also

- while
- for
- break
- continue

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
