# Errors

Source: https://devdocs.io/http/cors/errors

# CORS errors

Cross-Origin Resource Sharing (CORS) is a standard that allows a server to relax the same-origin policy. This is used to explicitly allow some cross-origin requests while rejecting others. For example, if a site offers an embeddable service, it may be necessary to relax certain restrictions. Setting up such a CORS configuration isn't necessarily easy and may present some challenges. In these pages, we'll look into some common CORS error messages and how to resolve them.

If the CORS configuration isn't setup correctly, the browser console will present an error like "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite" indicating that the request was blocked due to violating the CORS security rules. This might not necessarily be a set-up mistake, though. It's possible that the request is in fact intentionally being disallowed by the user's web application and remote external service. However, If the endpoint is meant to be available, some debugging is needed to succeed.

## Identifying the issue

To understand the underlying issue with the CORS configuration, you need to find out which request is at fault and why. These steps may help you do so:

1. Navigate to the web site or web app in question and open the Developer Tools.
2. Now try to reproduce the failing transaction and check the console if you are seeing a CORS violation error message. It will probably look like this:

The text of the error message will be something similar to the following:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

Note: For security reasons, specifics about what went wrong with a CORS request are not available to JavaScript code. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.

## CORS error messages

Firefox's console displays messages in its console when requests fail due to CORS. Part of the error text is a "reason" message that provides added insight into what went wrong. The reason messages are listed below; click the message to open an article explaining the error in more detail and offering possible solutions.

- Reason: CORS disabled
- Reason: CORS request did not succeed
- Reason: CORS header 'Origin' cannot be added
- Reason: CORS request external redirect not allowed
- Reason: CORS request not http
- Reason: CORS header 'Access-Control-Allow-Origin' missing
- Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
- Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
- Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
- Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
- Reason: CORS preflight channel did not succeed
- Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
- Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
- Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
- Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed

## See also

- Glossary: CORS
- CORS introduction
- Server-side CORS settings
- CORS enabled image
- CORS settings attributes
- https://www.test-cors.org – page to test CORS requests

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors
