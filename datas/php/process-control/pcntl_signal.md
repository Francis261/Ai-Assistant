# pcntl_signal

Source: https://devdocs.io/php/function.pcntl-signal

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_signal — Installs a signal handler

### Description

```
pcntl_signal(int $signal, callable|int $handler, bool $restart_syscalls = true): bool
```

The pcntl_signal() function installs a new signal handler or replaces the current signal handler for the signal indicated by signal.

### Parameters

The signal number.

The signal handler. This may be either a callable, which will be invoked to handle the signal, or either of the two global constants SIG_IGN or SIG_DFL, which will ignore the signal or restore the default signal handler respectively.

If a callable is given, it must implement the following signature:

```
handler(int $signo, mixed $siginfo): void
```

Note:

Note that when you set a handler to an object method, that object's reference count is increased which makes it persist until you either change the handler to something else, or your script ends.

Specifies whether system call restarting should be used when this signal arrives.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pcntl_signal() example

```
<?php
pcntl_async_signals(true);

// signal handler function
function sig_handler($signo)
{

     switch ($signo) {
         case SIGTERM:
             // handle shutdown tasks
             exit;
             break;
         case SIGHUP:
             // handle restart tasks
             break;
         case SIGUSR1:
             echo "Caught SIGUSR1...\n";
             break;
         default:
             // handle all other signals
     }

}

echo "Installing signal handler...\n";

// setup signal handlers
pcntl_signal(SIGTERM, "sig_handler");
pcntl_signal(SIGHUP,  "sig_handler");
pcntl_signal(SIGUSR1, "sig_handler");

// or use an object
// pcntl_signal(SIGUSR1, array($obj, "do_something"));

echo"Generating signal SIGUSR1 to self...\n";

// send SIGUSR1 to current process id
// posix_* functions require the posix extension
posix_kill(posix_getpid(), SIGUSR1);

echo "Done\n";

?>
```

### Notes

pcntl_signal() doesn't stack the signal handlers, but replaces them.

#### Dispatch Methods

There are several methods of dispatching signal handlers:

- Asynchronous dispatch with pcntl_async_signals() enabled. This is the recommended method
- Setting tick frequency
- Manual dispatch with pcntl_signal_dispatch()

When signals are dispatched asynchronously or using tick-based execution, blocking functions like sleep() may be interrupted.

### See Also

- » Signal (IPC) on Wikipedia
- pcntl_async_signals() - Enable/disable asynchronous signal handling or return the old setting
- pcntl_fork() - Forks the currently running process
- pcntl_signal_dispatch() - Calls signal handlers for pending signals
- pcntl_waitpid() - Waits on or returns the status of a forked child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-signal.php
