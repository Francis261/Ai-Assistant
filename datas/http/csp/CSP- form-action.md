# CSP: form-action

Source: https://devdocs.io/http/headers/content-security-policy/form-action

# CSP: form-action

The HTTP Content-Security-Policy (CSP) form-action directive restricts the URLs which can be used as the target of form submissions from a given context.

Warning: Whether form-action should block redirects after a form submission is debated and browser implementations of this aspect are inconsistent (e.g. Firefox 57 doesn't block the redirects whereas Chrome 63 does).

## Syntax

One or more sources can be set for the form-action policy:

```
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Meta tag configuration

```
 <meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Apache configuration

```
<IfModule mod_headers.c>
  Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Nginx configuration

```
add_header Content-Security-Policy "form-action 'none';"
```

### Violation case

Using a <form> element with an action set to inline JavaScript will result in a CSP violation.

```
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!--
// Error: Refused to send form data because it violates the following
// Content Security Policy directive: "form-action 'none'".
-->
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <form>

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action
