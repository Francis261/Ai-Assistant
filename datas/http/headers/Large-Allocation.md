# Large-Allocation

Source: https://devdocs.io/http/headers/large-allocation

# Large-Allocation

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The non-standard Large-Allocation response header tells the browser that the page being loaded is going to want to perform a large allocation. It's not implemented in current versions of any browser, but is harmless to send to any browser.

WebAssembly or asm.js applications can use large contiguous blocks of allocated memory. For complex games, for example, these allocations can be quite large, sometimes as large as 1GB. The Large-Allocation tells the browser that the web content in the to-be-loaded page is going to want to perform a large contiguous memory allocation and the browser can react to this header by starting a dedicated process for the to-be-loaded document, for example.

## Syntax

```
Large-Allocation: 0
Large-Allocation: <megabytes>
```

## Directives

0 is a special value which represents uncertainty as to what the size of the allocation is.

The expected size of the allocation to be performed, in megabytes.

## Examples

```
Large-Allocation: 0
Large-Allocation: 500
```

## Troubleshooting errors

The Large-Allocation header throws warnings or error messages when used incorrectly. You'll encounter them in the web console.

This message means that the browser saw the Large-Allocation header, and was able to reload the page into a new process which should have more available contiguous memory.

When a POST request is used to load a document, that load cannot currently be redirected into a new process. This error is displayed when loading a document with a Large-Allocation header with a non-GET HTTP method. This could be caused due to the document being loaded by a form submission, for example.

This error means that the document was not loaded at the top level of an user-opened or noopener-opened tab or window. It can occur in these situations:

- The document with the Large-Allocation header was loaded in an <iframe>. Firefox cannot move an iframe into a new process currently, so the document must load in the current process.
- The document with the Large-Allocation header was loaded in a window which was opened by window.open(), <a target="_blank"> or other similar methods without rel="noopener" or the "noopener" feature being set. These windows must remain in the same process as their opener, as they can communicate, meaning that we cannot allow them to switch processes.
- The document with the Large-Allocation header has opened another window with window.open(), <a target="_blank"> or other similar methods without rel="noopener" or the "noopener" feature being set. This is for the same reason as above, namely that they can communicate and thus we cannot allow them to switch processes.

Firefox currently only supports the Large-Allocation header in our 32-bit Windows builds, as memory fragmentation is not an issue in 64-bit builds. If you are running a non-win32 version of Firefox, this error will appear. This check can be disabled with the dom.largeAllocation.forceEnable boolean preference in about:config.

## Specifications

Not part of any current specifications. An explainer of the ideas behind this header can be found in this document.

## Browser compatibility

## See also

- WebAssembly

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation
