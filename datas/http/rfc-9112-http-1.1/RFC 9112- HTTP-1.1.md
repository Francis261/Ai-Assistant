# HTTP/1.1

Source: https://devdocs.io/http/rfc9112

## 1. Introduction

### 1.1. Requirements Notation

### 1.2. Syntax Notation

## 2. Message

### 2.1. Message Format

### 2.2. Message Parsing

### 2.3. HTTP Version

## 3. Request Line

### 3.1. Method

### 3.2. Request Target

#### 3.2.1. origin-form

#### 3.2.2. absolute-form

#### 3.2.3. authority-form

#### 3.2.4. asterisk-form

### 3.3. Reconstructing the Target URI

## 4. Status Line

## 5. Field Syntax

### 5.1. Field Line Parsing

### 5.2. Obsolete Line Folding

## 6. Message Body

### 6.1. Transfer-Encoding

### 6.2. Content-Length

### 6.3. Message Body Length

## 7. Transfer Codings

### 7.1. Chunked Transfer Coding

#### 7.1.1. Chunk Extensions

#### 7.1.2. Chunked Trailer Section

#### 7.1.3. Decoding Chunked

### 7.2. Transfer Codings for Compression

### 7.3. Transfer Coding Registry

### 7.4. Negotiating Transfer Codings

## 8. Handling Incomplete Messages

## 9. Connection Management

### 9.1. Establishment

### 9.2. Associating a Response to a Request

### 9.3. Persistence

#### 9.3.1. Retrying Requests

#### 9.3.2. Pipelining

### 9.4. Concurrency

### 9.5. Failures and Timeouts

### 9.6. Tear-down

### 9.7. TLS Connection Initiation

### 9.8. TLS Connection Closure

## 10. Enclosing Messages as Data

### 10.1. Media Type message/http

### 10.2. Media Type application/http

## 11. Security Considerations

### 11.1. Response Splitting

### 11.2. Request Smuggling

### 11.3. Message Integrity

### 11.4. Message Confidentiality

## 12. IANA Considerations

### 12.1. Field Name Registration

### 12.2. Media Type Registration

### 12.3. Transfer Coding Registration

### 12.4. ALPN Protocol ID Registration

## 13. References

### 13.1. Normative References

### 13.2. Informative References

## Appendix A. Collected ABNF

## Appendix B. Differences between HTTP and MIME

### B.1. MIME-Version

### B.2. Conversion to Canonical Form

### B.3. Conversion of Date Formats

### B.4. Conversion of Content-Encoding

### B.5. Conversion of Content-Transfer-Encoding

### B.6. MHTML and Line Length Limitations

## Appendix C. Changes from Previous RFCs

### C.1. Changes from HTTP/0.9

### C.2. Changes from HTTP/1.0

#### C.2.1. Multihomed Web Servers

#### C.2.2. Keep-Alive Connections

#### C.2.3. Introduction of Transfer-Encoding

### C.3. Changes from RFC 7230

© document authors. All rights reserved.
 https://datatracker.ietf.org/doc/html/rfc9112
