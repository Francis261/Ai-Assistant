# CSP: report-uri

Source: https://devdocs.io/http/headers/content-security-policy/report-uri

# CSP: report-uri

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The deprecated HTTP Content-Security-Policy (CSP) report-uri directive instructs the user agent to report attempts to violate the Content Security Policy. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.

Warning: Though the report-to directive is intended to replace the deprecated report-uri directive, report-to isn't supported in most browsers yet. So for compatibility with current browsers while also adding forward compatibility when browsers get report-to support, you can specify both report-uri and report-to:

```
Content-Security-Policy: …; report-uri https://endpoint.com; report-to groupname
```

In browsers that support report-to, the report-uri directive will be ignored.

The directive has no effect in and of itself, but only gains meaning in combination with other directives.

## Syntax

```
Content-Security-Policy: report-uri <uri>;
Content-Security-Policy: report-uri <uri> <uri>;
```

A URI where to POST the report to.

## Examples

See Content-Security-Policy-Report-Only for more information and examples.

```
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

/csp-violation-report-endpoint/ could for example run a PHP something like the following that logs the JSON detailing the violation and, if the violation is the first one added to the log file, sends an email to an administrator:

```
    <?php

    // Start configure
    $log_file = dirname(__FILE__) . '/csp-violations.log';
    $log_file_size_limit = 1000000; // bytes - once exceeded no further entries are added
    $email_address = 'admin@example.com';
    $email_subject = 'Content-Security-Policy violation';
    // End configuration

    $current_domain = preg_replace('/www\./i', '', $_SERVER['SERVER_NAME']);
    $email_subject = $email_subject . ' on ' . $current_domain;

    http_response_code(204); // HTTP 204 No Content

    $json_data = file_get_contents('php://input');

    // We pretty print the JSON before adding it to the log file
    if ($json_data = json_decode($json_data)) {
      $json_data = json_encode($json_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

      if (!file_exists($log_file)) {
        // Send an email
        $message = "The following Content-Security-Policy violation occurred on " .
          $current_domain . ":\n\n" .
          $json_data .
          "\n\nFurther CPS violations will be logged to the following log file, but no further email notifications will be sent until this log file is deleted:\n\n" .
          $log_file;
        mail($email_address, $email_subject, $message,
             'Content-Type: text/plain;charset=utf-8');
      } else if (filesize($log_file) > $log_file_size_limit) {
        exit(0);
      }

      file_put_contents($log_file, $json_data, FILE_APPEND | LOCK_EX);
    }
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- Content-Security-Policy-Report-Only
- report-to

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri
