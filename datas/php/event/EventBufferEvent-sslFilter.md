# EventBufferEvent::sslFilter

Source: https://devdocs.io/php/eventbufferevent.sslfilter

(PECL event >= 1.2.6-beta)

EventBufferEvent::sslFilter — Create a new SSL buffer event to send its data over another buffer event

### Description

```
public static EventBufferEvent::sslFilter(
  EventBase $base ,
  EventBufferEvent $underlying ,
  EventSslContext $ctx ,
  int $state ,
  int $options  = 0 
): EventBufferEvent
```

Create a new SSL buffer event to send its data over another buffer event

Note:

This function is available only if Event is compiled with OpenSSL support.

### Parameters

Associated event base.

A socket buffer event to use for this SSL.

Object of EventSslContext class.

The current state of SSL connection: EventBufferEvent::SSL_OPEN, EventBufferEvent::SSL_ACCEPTING or EventBufferEvent::SSL_CONNECTING.

One or more buffer event options.

### Return Values

Returns a new SSL EventBufferEvent object.

### Examples

Example #1 Simple SMTP server

```
<?php
 /*
 * Author: Andrew Rose <hello at andrewrose dot co dot uk>
 *
 * Usage:
 * 1) Prepare cert.pem certificate and privkey.pem private key files.
 * 2) Launch the server script
 * 3) Open TLS connection, e.g.:
 *      $ openssl s_client -connect localhost:25 -starttls smtp -crlf
 * 4) Start testing the commands listed in `cmd` method below.
 */

class Handler {
    public $domainName = FALSE;
    public $connections = [];
    public $buffers = [];
    public $maxRead = 256000;

    public function __construct() {
        $this->ctx = new EventSslContext(EventSslContext::SSLv3_SERVER_METHOD, [
            EventSslContext::OPT_LOCAL_CERT  => 'cert.pem',
            EventSslContext::OPT_LOCAL_PK    => 'privkey.pem',
            //EventSslContext::OPT_PASSPHRASE  => '',
            EventSslContext::OPT_VERIFY_PEER => false, // change to true with authentic cert
            EventSslContext::OPT_ALLOW_SELF_SIGNED => true // change to false with authentic cert
        ]);

        $this->base = new EventBase();
        if (!$this->base) {
            exit("Couldn't open event base\n");
        }

        if (!$this->listener = new EventListener($this->base,
            [$this, 'ev_accept'],
            $this->ctx,
            EventListener::OPT_CLOSE_ON_FREE | EventListener::OPT_REUSEABLE,
            -1,
            '0.0.0.0:25'))
        {
            exit("Couldn't create listener\n");
        }

        $this->listener->setErrorCallback([$this, 'ev_error']);
        $this->base->dispatch();
    }

    public function ev_accept($listener, $fd, $address, $ctx) {
        static $id = 0;
        $id += 1;

        $this->connections[$id]['clientData'] = '';
        $this->connections[$id]['cnx'] = new EventBufferEvent($this->base, $fd,
            EventBufferEvent::OPT_CLOSE_ON_FREE);

        if (!$this->connections[$id]['cnx']) {
            echo "Failed creating buffer\n";
            $this->base->exit(NULL);
            exit(1);
        }

        $this->connections[$id]['cnx']->setCallbacks([$this, "ev_read"], NULL,
            [$this, 'ev_error'], $id);
        $this->connections[$id]['cnx']->enable(Event::READ | Event::WRITE);

        $this->ev_write($id, '220 '.$this->domainName." wazzzap?\r\n");
    }

    function ev_error($listener, $ctx) {
        $errno = EventUtil::getLastSocketErrno();

        fprintf(STDERR, "Got an error %d (%s) on the listener. Shutting down.\n",
            $errno, EventUtil::getLastSocketError());

        if ($errno != 0) {
            $this->base->exit(NULL);
            exit();
        }
    }

    public function ev_close($id) {
        $this->connections[$id]['cnx']->disable(Event::READ | Event::WRITE);
        unset($this->connections[$id]);
    }

    protected function ev_write($id, $string) {
        echo 'S('.$id.'): '.$string;
        $this->connections[$id]['cnx']->write($string);
    }

    public function ev_read($buffer, $id) {
        while($buffer->input->length > 0) {
            $this->connections[$id]['clientData'] .= $buffer->input->read($this->maxRead);
            $clientDataLen = strlen($this->connections[$id]['clientData']);

            if($this->connections[$id]['clientData'][$clientDataLen-1] == "\n"
                && $this->connections[$id]['clientData'][$clientDataLen-2] == "\r")
            {
                // remove the trailing \r\n
                $line = substr($this->connections[$id]['clientData'], 0,
                    strlen($this->connections[$id]['clientData']) - 2);

                $this->connections[$id]['clientData'] = '';
                $this->cmd($buffer, $id, $line);
            }
        }
    }

    protected function cmd($buffer, $id, $line) {
        switch ($line) {
            case strncmp('EHLO ', $line, 4):
                $this->ev_write($id, "250-STARTTLS\r\n");
                $this->ev_write($id, "250 OK ehlo\r\n");
                break;

            case strncmp('HELO ', $line, 4):
                $this->ev_write($id, "250-STARTTLS\r\n");
                $this->ev_write($id, "250 OK helo\r\n");
                break;

            case strncmp('QUIT', $line, 3):
                $this->ev_write($id, "250 OK quit\r\n");
                $this->ev_close($id);
                break;

            case strncmp('STARTTLS', $line, 3):
                $this->ev_write($id, "220 Ready to start TLS\r\n");
                $this->connections[$id]['cnx'] = EventBufferEvent::sslFilter($this->base,
                    $this->connections[$id]['cnx'], $this->ctx,
                    EventBufferEvent::SSL_ACCEPTING,
                    EventBufferEvent::OPT_CLOSE_ON_FREE);
                $this->connections[$id]['cnx']->setCallbacks([$this, "ev_read"], NULL, [$this, 'ev_error'], $id);
                $this->connections[$id]['cnx']->enable(Event::READ | Event::WRITE);
                break;

            default:
                echo 'unknown command: '.$line."\n";
                break;
        }
    }
}

new Handler();
```

### See Also

- EventBufferEvent::sslSocket() - Creates a new SSL buffer event to send its data over an SSL on a socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.sslfilter.php
