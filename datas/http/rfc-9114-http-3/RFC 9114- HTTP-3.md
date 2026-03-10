# HTTP/3

Source: https://devdocs.io/http/rfc9114

## 1. Introduction

### 1.1. Prior Versions of HTTP

### 1.2. Delegation to QUIC

## 2. HTTP/3 Protocol Overview

### 2.1. Document Organization

### 2.2. Conventions and Terminology

## 3. Connection Setup and Management

### 3.1. Discovering an HTTP/3 Endpoint

#### 3.1.1. HTTP Alternative Services

#### 3.1.2. Other Schemes

### 3.2. Connection Establishment

### 3.3. Connection Reuse

## 4. Expressing HTTP Semantics in HTTP/3

### 4.1. HTTP Message Framing

#### 4.1.1. Request Cancellation and Rejection

#### 4.1.2. Malformed Requests and Responses

### 4.2. HTTP Fields

#### 4.2.1. Field Compression

#### 4.2.2. Header Size Constraints

### 4.3. HTTP Control Data

#### 4.3.1. Request Pseudo-Header Fields

#### 4.3.2. Response Pseudo-Header Fields

### 4.4. The CONNECT Method

### 4.5. HTTP Upgrade

### 4.6. Server Push

## 5. Connection Closure

### 5.1. Idle Connections

### 5.2. Connection Shutdown

### 5.3. Immediate Application Closure

### 5.4. Transport Closure

## 6. Stream Mapping and Usage

### 6.1. Bidirectional Streams

### 6.2. Unidirectional Streams

#### 6.2.1. Control Streams

#### 6.2.2. Push Streams

#### 6.2.3. Reserved Stream Types

## 7. HTTP Framing Layer

### 7.1. Frame Layout

### 7.2. Frame Definitions

#### 7.2.1. DATA

#### 7.2.2. HEADERS

#### 7.2.3. CANCEL_PUSH

#### 7.2.4. SETTINGS

##### 7.2.4.1. Defined SETTINGS Parameters

##### 7.2.4.2. Initialization

#### 7.2.5. PUSH_PROMISE

#### 7.2.6. GOAWAY

#### 7.2.7. MAX_PUSH_ID

#### 7.2.8. Reserved Frame Types

## 8. Error Handling

### 8.1. HTTP/3 Error Codes

## 9. Extensions to HTTP/3

## 10. Security Considerations

### 10.1. Server Authority

### 10.2. Cross-Protocol Attacks

### 10.3. Intermediary-Encapsulation Attacks

### 10.4. Cacheability of Pushed Responses

### 10.5. Denial-of-Service Considerations

#### 10.5.1. Limits on Field Section Size

#### 10.5.2. CONNECT Issues

### 10.6. Use of Compression

### 10.7. Padding and Traffic Analysis

### 10.8. Frame Parsing

### 10.9. Early Data

### 10.10. Migration

### 10.11. Privacy Considerations

## 11. IANA Considerations

### 11.1. Registration of HTTP/3 Identification String

### 11.2. New Registries

#### 11.2.1. Frame Types

#### 11.2.2. Settings Parameters

#### 11.2.3. Error Codes

#### 11.2.4. Stream Types

## 12. References

### 12.1. Normative References

### 12.2. Informative References

## Appendix A. Considerations for Transitioning from HTTP/2

### A.1. Streams

### A.2. HTTP Frame Types

#### A.2.1. Prioritization Differences

#### A.2.2. Field Compression Differences

#### A.2.3. Flow-Control Differences

#### A.2.4. Guidance for New Frame Type Definitions

#### A.2.5. Comparison of HTTP/2 and HTTP/3 Frame Types

### A.3. HTTP/2 SETTINGS Parameters

### A.4. HTTP/2 Error Codes

#### A.4.1. Mapping between HTTP/2 and HTTP/3 Errors

© document authors. All rights reserved.
 https://datatracker.ietf.org/doc/html/rfc9114
