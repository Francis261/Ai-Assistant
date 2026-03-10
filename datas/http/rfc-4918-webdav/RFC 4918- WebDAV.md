# HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)

Source: https://devdocs.io/http/rfc4918

## 1. Introduction

## 2. Notational Conventions

## 3. Terminology

## 4. Data Model for Resource Properties

### 4.1. The Resource Property Model

### 4.2. Properties and HTTP Headers

### 4.3. Property Values

#### 4.3.1. Example - Property with Mixed Content

### 4.4. Property Names

### 4.5. Source Resources and Output Resources

## 5. Collections of Web Resources

### 5.1. HTTP URL Namespace Model

### 5.2. Collection Resources

## 6. Locking

### 6.1. Lock Model

### 6.2. Exclusive vs. Shared Locks

### 6.3. Required Support

### 6.4. Lock Creator and Privileges

### 6.5. Lock Tokens

### 6.6. Lock Timeout

### 6.7. Lock Capability Discovery

### 6.8. Active Lock Discovery

## 7. Write Lock

### 7.1. Write Locks and Properties

### 7.2. Avoiding Lost Updates

### 7.3. Write Locks and Unmapped URLs

### 7.4. Write Locks and Collections

### 7.5. Write Locks and the If Request Header

#### 7.5.1. Example - Write Lock and COPY

#### 7.5.2. Example - Deleting a Member of a Locked Collection

### 7.6. Write Locks and COPY/MOVE

### 7.7. Refreshing Write Locks

## 8. General Request and Response Handling

### 8.1. Precedence in Error Handling

### 8.2. Use of XML

### 8.3. URL Handling

#### 8.3.1. Example - Correct URL Handling

### 8.4. Required Bodies in Requests

### 8.5. HTTP Headers for Use in WebDAV

### 8.6. ETag

### 8.7. Including Error Response Bodies

### 8.8. Impact of Namespace Operations on Cache Validators

## 9. HTTP Methods for Distributed Authoring

### 9.1. PROPFIND Method

#### 9.1.1. PROPFIND Status Codes

#### 9.1.2. Status Codes for Use in 'propstat' Element

#### 9.1.3. Example - Retrieving Named Properties

#### 9.1.4. Example - Using 'propname' to Retrieve All Property Names

#### 9.1.5. Example - Using So-called 'allprop'

#### 9.1.6. Example - Using 'allprop' with 'include'

### 9.2. PROPPATCH Method

#### 9.2.1. Status Codes for Use in 'propstat' Element

#### 9.2.2. Example - PROPPATCH

### 9.3. MKCOL Method

#### 9.3.1. MKCOL Status Codes

#### 9.3.2. Example - MKCOL

### 9.4. GET, HEAD for Collections

### 9.5. POST for Collections

### 9.6. DELETE Requirements

#### 9.6.1. DELETE for Collections

#### 9.6.2. Example - DELETE

### 9.7. PUT Requirements

#### 9.7.1. PUT for Non-Collection Resources

#### 9.7.2. PUT for Collections

### 9.8. COPY Method

#### 9.8.1. COPY for Non-collection Resources

#### 9.8.2. COPY for Properties

#### 9.8.3. COPY for Collections

#### 9.8.4. COPY and Overwriting Destination Resources

#### 9.8.5. Status Codes

#### 9.8.6. Example - COPY with Overwrite

#### 9.8.7. Example - COPY with No Overwrite

#### 9.8.8. Example - COPY of a Collection

### 9.9. MOVE Method

#### 9.9.1. MOVE for Properties

#### 9.9.2. MOVE for Collections

#### 9.9.3. MOVE and the Overwrite Header

#### 9.9.4. Status Codes

#### 9.9.5. Example - MOVE of a Non-Collection

#### 9.9.6. Example - MOVE of a Collection

### 9.10. LOCK Method

#### 9.10.1. Creating a Lock on an Existing Resource

#### 9.10.2. Refreshing Locks

#### 9.10.3. Depth and Locking

#### 9.10.4. Locking Unmapped URLs

#### 9.10.5. Lock Compatibility Table

#### 9.10.6. LOCK Responses

#### 9.10.7. Example - Simple Lock Request

#### 9.10.8. Example - Refreshing a Write Lock

#### 9.10.9. Example - Multi-Resource Lock Request

### 9.11. UNLOCK Method

#### 9.11.1. Status Codes

#### 9.11.2. Example - UNLOCK

## 10. HTTP Headers for Distributed Authoring

### 10.1. DAV Header

### 10.2. Depth Header

### 10.3. Destination Header

### 10.4. If Header

#### 10.4.1. Purpose

#### 10.4.2. Syntax

#### 10.4.3. List Evaluation

#### 10.4.4. Matching State Tokens and ETags

#### 10.4.5. If Header and Non-DAV-Aware Proxies

#### 10.4.6. Example - No-tag Production

#### 10.4.7. Example - Using "Not" with No-tag Production

#### 10.4.8. Example - Causing a Condition to Always Evaluate to True

#### 10.4.9. Example - Tagged List If Header in COPY

#### 10.4.10. Example - Matching Lock Tokens with Collection Locks

#### 10.4.11. Example - Matching ETags on Unmapped URLs

### 10.5. Lock-Token Header

### 10.6. Overwrite Header

### 10.7. Timeout Request Header

## 11. Status Code Extensions to HTTP/1.1

### 11.1. 207 Multi-Status

### 11.2. 422 Unprocessable Entity

### 11.3. 423 Locked

### 11.4. 424 Failed Dependency

### 11.5. 507 Insufficient Storage

## 12. Use of HTTP Status Codes

### 12.1. 412 Precondition Failed

### 12.2. 414 Request-URI Too Long

## 13. Multi-Status Response

### 13.1. Response Headers

### 13.2. Handling Redirected Child Resources

### 13.3. Internal Status Codes

## 14. XML Element Definitions

### 14.1. activelock XML Element

### 14.2. allprop XML Element

### 14.3. collection XML Element

### 14.4. depth XML Element

### 14.5. error XML Element

### 14.6. exclusive XML Element

### 14.7. href XML Element

### 14.8. include XML Element

### 14.9. location XML Element

### 14.10. lockentry XML Element

### 14.11. lockinfo XML Element

### 14.12. lockroot XML Element

### 14.13. lockscope XML Element

### 14.14. locktoken XML Element

### 14.15. locktype XML Element

### 14.16. multistatus XML Element

### 14.17. owner XML Element

### 14.18. prop XML Element

### 14.19. propertyupdate XML Element

### 14.20. propfind XML Element

### 14.21. propname XML Element

### 14.22. propstat XML Element

### 14.23. remove XML Element

### 14.24. response XML Element

### 14.25. responsedescription XML Element

### 14.26. set XML Element

### 14.27. shared XML Element

### 14.28. status XML Element

### 14.29. timeout XML Element

### 14.30. write XML Element

## 15. DAV Properties

### 15.1. creationdate Property

### 15.2. displayname Property

### 15.3. getcontentlanguage Property

### 15.4. getcontentlength Property

### 15.5. getcontenttype Property

### 15.6. getetag Property

### 15.7. getlastmodified Property

### 15.8. lockdiscovery Property

#### 15.8.1. Example - Retrieving DAV:lockdiscovery

### 15.9. resourcetype Property

### 15.10. supportedlock Property

#### 15.10.1. Example - Retrieving DAV:supportedlock

## 16. Precondition/Postcondition XML Elements

## 17. XML Extensibility in DAV

## 18. DAV Compliance Classes

### 18.1. Class 1

### 18.2. Class 2

### 18.3. Class 3

## 19. Internationalization Considerations

## 20. Security Considerations

### 20.1. Authentication of Clients

### 20.2. Denial of Service

### 20.3. Security through Obscurity

### 20.4. Privacy Issues Connected to Locks

### 20.5. Privacy Issues Connected to Properties

### 20.6. Implications of XML Entities

### 20.7. Risks Connected with Lock Tokens

### 20.8. Hosting Malicious Content

## 21. IANA Considerations

### 21.1. New URI Schemes

### 21.2. XML Namespaces

### 21.3. Message Header Fields

#### 21.3.1. DAV

#### 21.3.2. Depth

#### 21.3.3. Destination

#### 21.3.4. If

#### 21.3.5. Lock-Token

#### 21.3.6. Overwrite

#### 21.3.7. Timeout

### 21.4. HTTP Status Codes

## 22. Acknowledgements

## 23. Contributors to This Specification

## 24. Authors of RFC 2518

## 25. References

### 25.1. Normative References

### 25.2. Informative References

## Appendix A. Notes on Processing XML Elements

### A.1. Notes on Empty XML Elements

### A.2. Notes on Illegal XML Processing

### A.3. Example - XML Syntax Error

### A.4. Example - Unexpected XML Element

## Appendix B. Notes on HTTP Client Compatibility

## Appendix C. The 'opaquelocktoken' Scheme and URIs

## Appendix D. Lock-null Resources

### D.1. Guidance for Clients Using LOCK to Create Resources

## Appendix E. Guidance for Clients Desiring to Authenticate

## Appendix F. Summary of Changes from RFC 2518

### F.1. Changes for Both Client and Server Implementations

### F.2. Changes for Server Implementations

### F.3. Other Changes

© document authors. All rights reserved.
 https://datatracker.ietf.org/doc/html/rfc4918
