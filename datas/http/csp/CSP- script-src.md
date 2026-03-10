# CSP: script-src

Source: https://devdocs.io/http/headers/content-security-policy/script-src

# CSP: script-src

The HTTP Content-Security-Policy (CSP) script-src directive specifies valid sources for JavaScript. This includes not only URLs loaded directly into <script> elements, but also things like inline script event handlers (onclick) and XSLT stylesheets which can trigger script execution.

## Syntax

One or more sources can be allowed for the script-src policy:

```
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation case

Given this CSP header:

```
Content-Security-Policy: script-src https://example.com/
```

the following script is blocked and won't be loaded or executed:

```
<script src="https://not-example.com/js/library.js"></script>
```

Note that inline event handlers are blocked as well:

```
<button id="btn" onclick="doSomething()"></button>
```

You should replace them with addEventListener calls:

```
document.getElementById("btn").addEventListener("click", doSomething);
```

### Unsafe inline script

Note: Disallowing inline styles and inline scripts is one of the biggest security wins CSP provides. However, if you absolutely have to use it, there are a few mechanisms that will allow them.

To allow inline scripts and inline event handlers, 'unsafe-inline', a nonce-source or a hash-source that matches the inline block can be specified.

```
Content-Security-Policy: script-src 'unsafe-inline';
```

The above Content Security Policy will allow inline <script> elements

```
<script>
  const inline = 1;
  // …
</script>
```

You can use a nonce-source to only allow specific inline script blocks:

```
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

You will have to set the same nonce on the <script> element:

```
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternatively, you can create hashes from your inline scripts. CSP supports sha256, sha384 and sha512.

```
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

When generating the hash, don't include the <script> tags and note that capitalization and whitespace matter, including leading or trailing whitespace.

```
<script>
  const inline = 1;
</script>
```

### Unsafe eval expressions

The 'unsafe-eval' source expression controls several script execution methods that create code from strings. If a page has a CSP header and 'unsafe-eval' isn't specified with the script-src directive, the following methods are blocked and won't have any effect:

- eval()
- Function()
- When passing a string literal like to methods like: setTimeout("alert(\"Hello World!\");", 500);
  - setTimeout()
  - setInterval()
  - window.setImmediate
- window.execScript() Non-standard (IE < 11 only)

- setTimeout()
- setInterval()
- window.setImmediate

### Unsafe WebAssembly execution

The 'wasm-unsafe-eval' source expression controls WebAssembly execution. If a page has a CSP header and 'wasm-unsafe-eval' isn't specified in the script-src directive, WebAssembly is blocked from loading and executing on the page. The 'wasm-unsafe-eval' source expression is more specific than 'unsafe-eval' which permits both compilation (and instantiation) of WebAssembly and, for example, the use of the eval operation in JavaScript. If the 'unsafe-eval' source keyword is used, then this overrides any occurrence of 'wasm-unsafe-eval' in the CSP policy.

```
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

The 'strict-dynamic' source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any allowlist or source expressions such as 'self' or 'unsafe-inline' will be ignored.

For example, a policy such as script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/ would allow loading of a root script with <script nonce="R4nd0m" src="https://example.com/loader.js"> and propagate that trust to any script loaded by loader.js, but disallow loading scripts from https://allowlisted.example.com/ unless accompanied by a nonce or loaded from a trusted script.

```
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Or:

```
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

It is possible to deploy strict-dynamic in a backwards compatible way, without requiring user-agent sniffing. The policy:

```
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

will act like 'unsafe-inline' https: in browsers that support CSP1, https: 'nonce-abcdefg' in browsers that support CSP2, and 'nonce-abcdefg' 'strict-dynamic' in browsers that support CSP3.

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- Sources
- <script>
- script-src-elem
- script-src-attr

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
